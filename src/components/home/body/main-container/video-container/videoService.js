import { POPULAR_VIDEO_API } from "../../../../../utils/constants";
import {
  startLoading,
  videosLoaded,
  loadingFailed,
} from "../../../../../store/slices/videoSlice";

export const fetchVideos =
  (pageToken = null) =>
  async (dispatch , getState) => {
    const { status, hasMore } = getState().videos;
    if (status === "loading" || !hasMore) {
      return;
    }
    dispatch(startLoading());
    try {
      let url = POPULAR_VIDEO_API;
      if (pageToken) {
        url +=`&pageToken=${pageToken}`;
      }
      const data = await fetch(url);
      const response = await data.json();
      if (!data.ok) {
        throw new Error(
          response.error.message || `HTTP error! status: ${data.status}`
        );
      }
      const newVideos = response.items;
      const newNextPageToken = response.nextPageToken;
      dispatch(videosLoaded({
        newVideos,
        newNextPageToken,
      }));
    } catch (error) {
      console.error("Error fetching videos:", error);
      dispatch(loadingFailed(error.message));
    }
  };
