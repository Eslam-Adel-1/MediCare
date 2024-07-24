import { createSlice } from "@reduxjs/toolkit";

export const show_appSlice = createSlice({
  name: "show_app",
  initialState: {
    value: false,
  },
  reducers: {
    showApp: (state) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showApp } = show_appSlice.actions;

export default show_appSlice.reducer;
