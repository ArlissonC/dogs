import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PHOTOS_GET } from "services/photo";

interface IInitialStateProps {
  list: any;
  pages: number;
  infinite: boolean;
  data: any;
  error: any;
  loading: boolean;
}

interface FetchFeedPhotos {
  total?: number;
  user: any;
}

export const fetchFeedPhotos = createAsyncThunk(
  "photo/fetchFeedPhotos",
  async ({ total = 6, user }: FetchFeedPhotos, { getState }) => {
    const { feed }: any = getState();
    const { data } = await PHOTOS_GET({ page: feed.pages, total, user });
    return data;
  },
);

const slice = createSlice({
  name: "feed",
  initialState: {
    list: [],
    pages: 1,
    infinite: true,
    data: null,
    error: null,
    loading: false,
  } as IInitialStateProps,
  reducers: {
    resetState: (state) => {
      state.infinite = true;
      state.pages = 1;
      state.list = [];
      state.data = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFeedPhotos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFeedPhotos.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.list.push(...payload);
      state.pages++;
      state.error = null;
      if (payload.length === 0) state.infinite = false;
    });
    builder.addCase(fetchFeedPhotos.rejected, (state) => {
      state.loading = false;
      state.data = null;
      state.error = "";
    });
  },
});

export const { resetState: resetFeedState } = slice.actions;

export default slice.reducer;
