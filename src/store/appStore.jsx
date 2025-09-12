import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
import searchReducer from "./slices/searchSlice";
import videoReducer from "./slices/videoSlice";
import demoVideosReducer from "./slices/demoVideoSlice";
const appStore = configureStore({
    reducer : {
      app : appReducer,
      search : searchReducer,
      videos : videoReducer,
      demoVideos: demoVideosReducer,
    }
});
export default appStore;