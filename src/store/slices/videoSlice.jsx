import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    items: [],
    nextPageToken: null,
    hasMore: true,
    status: "idle",
    error: null,
  },
  reducers: {
    startLoading: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    videosLoaded: (state, action) => {
      const { newVideos, newNextPageToken } = action.payload;
      state.status = "succeeded";
      state.items = [...state.items , ...newVideos];
      state.nextPageToken = newNextPageToken || null;
      state.hasMore = !!newNextPageToken;
    },
    loadingFailed: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
      state.hasMore = false;
    },
  },
});
export const {startLoading , videosLoaded , loadingFailed} = videoSlice.actions;
export default videoSlice.reducer;
