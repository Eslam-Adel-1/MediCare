import { createSlice } from "@reduxjs/toolkit";

export const fag_health_card_showSlice = createSlice({
  name: "fag_health_card_show",
  initialState: {
    value: false,
  },
  reducers: {
    openHealth: (state) => {
      state.value = true;
    },
    closeHealth: (state) => {
      state.value = false;
    },
    switchHealth: (state) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openHealth, closeHealth, switchHealth } =
  fag_health_card_showSlice.actions;

export default fag_health_card_showSlice.reducer;
