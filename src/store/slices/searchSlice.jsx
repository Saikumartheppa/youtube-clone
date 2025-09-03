import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchInfo: {}, 
  },
  reducers: {
    cacheResults: (state, action) => {
      const { query, results } = action.payload;
      state.searchInfo[query] = results;
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;