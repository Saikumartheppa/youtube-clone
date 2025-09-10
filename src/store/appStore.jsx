import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
import searchReducer from "./slices/searchSlice";
import videoReducer from "./slices/videoSlice";
const appStore = configureStore({
    reducer : {
      app : appReducer,
      search : searchReducer,
      videos : videoReducer,
    }
});
export default appStore;