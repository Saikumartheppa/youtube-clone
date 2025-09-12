import {
  startLoading,
  videosLoaded,
  loadingFailed,
} from "../../store/slices/demoVideoSlice";
import { POPULAR_VIDEO_API } from "../../utils/constants";
export const fetchVideos = () => async (dispatch, getState) => {
  const { status } = getState().demoVideos;
  if (status === "loading") return;
  dispatch(startLoading);
  try {
    const data = await fetch(POPULAR_VIDEO_API);
    if (!data.ok) {
      throw new Error(
        response.error.message || `HTTP error! status: ${data.status}`
      );
    }
    const response = await data.json();
    dispatch(videosLoaded(response.items));
  } catch (error) {
    console.error("Error fetching videos:", error);
    dispatch(loadingFailed(error.message));
  }
};
