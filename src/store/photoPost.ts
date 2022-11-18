import { PHOTO_POST } from "./../services/photo";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  data: any;
  error: any;
  loading: boolean;
}

export const fetchPhotoPost = createAsyncThunk(
  "photoPost/fetchPhotoPost",
  async (formData: any) => {
    const { data } = await PHOTO_POST(formData);
    return data;
  },
);

const slice = createSlice({
  name: "photoPost",
  initialState: {
    data: null,
    loading: false,
    error: null,
  } as InitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPhotoPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPhotoPost.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.error = null;
    });
    builder.addCase(fetchPhotoPost.rejected, (state) => {
      state.loading = false;
      state.data = null;
      state.error = "Ocorreu um erro ao processar sua solicitação!";
    });
  },
});

export default slice.reducer;
