import { createSlice } from "@reduxjs/toolkit";

export const fag_aid_card_showSlice = createSlice({
  name: "fag_aid_card_show",
  initialState: {
    value: false,
  },
  reducers: {
    openAid: (state) => {
      state.value = true;
    },
    closeAid: (state) => {
      state.value = false;
    },
    switchAid: (state) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openAid, closeAid, switchAid } = fag_aid_card_showSlice.actions;

export default fag_aid_card_showSlice.reducer;
