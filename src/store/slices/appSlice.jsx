import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    channelsInfo: {},
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
  },
});
export const { toggleMenu, addChannelInfo , closeMenu } = appSlice.actions;
export default appSlice.reducer;
