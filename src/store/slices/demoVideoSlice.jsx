import { createSlice } from "@reduxjs/toolkit";

const demoVideos = createSlice({
  name: "demoVideos",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {
    startLoading: (state) => {
        state.status = "loading";
        state.error = null;
      },
      videosLoaded: (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      },
      loadingFailed: (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.hasMore = false;
      },
      moveWatchedVideoToEnd: (state, action) => {
        const videoId = action.payload;
        const index = state.items.findIndex((video) => video.id === videoId);
        if (index !== -1) {
          const [watchedVideo] = state.items.splice(index, 1);
          state.items.push(watchedVideo);
        }
      }
  },
});
export const {startLoading , videosLoaded , loadingFailed , moveWatchedVideoToEnd} = demoVideos.actions;
export default demoVideos.reducer;