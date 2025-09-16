import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    channelsInfo: {},
    user: null,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    addChannelInfo: (state, action) => {
      const { channelId, data } = action.payload;
      state.channelsInfo[channelId] = data;
    },
    addUser: (state, action) => {
       state.user = action.payload;
    },
    removeUser: (state, action) => {
      state.user = null;
    },
  },
});
export const { toggleMenu, addChannelInfo, closeMenu , addUser , removeUser } = appSlice.actions;
export default appSlice.reducer;
