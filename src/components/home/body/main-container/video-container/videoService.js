import { POPULAR_VIDEO_API } from "../../../../../utils/constants";

export const fetchVideos = async () => {
  try {
    const data = await fetch(POPULAR_VIDEO_API);
    const response = await data.json();
    return response.items || [];
  } catch (error) {
    console.error("Error fetching videos:", error);
    throw error;
  }
};