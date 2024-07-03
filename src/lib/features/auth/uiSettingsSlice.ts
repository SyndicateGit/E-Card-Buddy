import { createSlice } from '@reduxjs/toolkit';

export const uiSettings = createSlice({
  name: 'uiSettings',
  initialState: {
    isSideBarCollapsed: false,
  },
  reducers: {
    toggleSideBarCollapsed: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isSideBarCollapsed? state.isSideBarCollapsed = false : state.isSideBarCollapsed = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleSideBarCollapsed } = uiSettings.actions;

export default uiSettings.reducer;
