import { TOKEN_POST, TOKEN_VALIDATE_POST } from "./../services/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  loading: boolean;
  data: any;
  error: any;
}

export const fetchToken = createAsyncThunk(
  "token/fetchToken",
  async (user: any) => {
    const { data } = await TOKEN_POST(user);
    return data;
  },
);

export const validateToken = createAsyncThunk(
  "token/validateToken",
  async (token: any) => {
    const { data } = await TOKEN_VALIDATE_POST(token);
    return data;
  },
);

const slice = createSlice({
  name: "token",
  initialState: {
    loading: false,
    data: localStorage.getItem("token") || null,
    error: null,
  } as IInitialState,
  reducers: {
    resetTokenState: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchToken.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchToken.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.error = null;
      localStorage.setItem("token", payload.token);
    });
    builder.addCase(fetchToken.rejected, (state) => {
      state.loading = false;
      state.data = null;
      state.error = "Usuário ou senha inválidos";
    });
    builder.addCase(validateToken.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(validateToken.rejected, (state) => {
      state.loading = false;
      state.data = null;
      state.error = "Token inválido";
    });
  },
});

export const { resetTokenState } = slice.actions;

export default slice.reducer;
