import { TOKEN_POST } from "./../services/auth";
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

const slice = createSlice({
  name: "token",
  initialState: {
    loading: false,
    data: null,
    error: null,
  } as IInitialState,
  reducers: {},
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
    builder.addCase(fetchToken.rejected, (state, { payload }) => {
      state.loading = false;
      state.data = null;
      state.error = payload;
    });
  },
});

export default slice.reducer;
