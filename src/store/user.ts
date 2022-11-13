import { AppDispatch } from "./configureStore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { USER_GET } from "services/auth";
import { fetchToken, resetTokenState } from "./token";

interface IInitialState {
  loading: boolean;
  data: any;
  error: any;
}

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (user: any, thunkAPI) => {
    await thunkAPI.dispatch(fetchToken(user));
    const { data } = await USER_GET();
    return data;
  },
);

const slice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    data: JSON.parse(localStorage.getItem("user")!) || null,
    error: null,
  } as IInitialState,
  reducers: {
    resetUserState: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.error = null;
      localStorage.setItem("user", JSON.stringify(payload));
    });
    builder.addCase(fetchUser.rejected, (state) => {
      state.loading = false;
      state.data = null;
      state.error = "Usuário ou senha inválidos";
    });
  },
});

const { resetUserState } = slice.actions;

export const userLogout = () => async (dispatch: AppDispatch) => {
  dispatch(resetUserState());
  dispatch(resetTokenState());
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export default slice.reducer;
