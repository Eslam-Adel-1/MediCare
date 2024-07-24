import { createSlice } from "@reduxjs/toolkit";

export const parkinson_InputsSlice = createSlice({
  name: "parkinson_Inputs",
  initialState: {
    value: {
      MDVP_fo_HZ: "",
      MDVP_Fhi_HZ: "",
      MDVP_Flo_HZ: "",
      MDVP_Jitter_percentage: "",
      MDVP_Jitter_Abs: "",
      MDVP_RAP: "",
      MDVP_PPQ: "",
      Jitter_DDP: "",
      MDVP_Shimmer: "",
      MDVP_Shimmer_dB: "",
      Shimmer_APQ3: "",
      Shimmer_APQ5: "",
      MDVP_APQ: "",
      Shimmer_DDA: "",
      NHR: "",
      HNR: "",
      RPDE: "",
      DFA: "",
      spread1: "",
      spread2: "",
      D2: "",
      PPE: "",
    },
  },
  reducers: {
    changeMDVP_fo_HZ: (state, action) => {
      state.value.MDVP_fo_HZ = action.payload;
    },
    changeMDVP_Fhi_HZ: (state, action) => {
      state.value.MDVP_Fhi_HZ = action.payload;
    },
    changeMDVP_Flo_HZ: (state, action) => {
      state.value.MDVP_Flo_HZ = action.payload;
    },
    changeMDVP_Jitter_percentage: (state, action) => {
      state.value.MDVP_Jitter_percentage = action.payload;
    },
    changeMDVP_Jitter_Abs: (state, action) => {
      state.value.MDVP_Jitter_Abs = action.payload;
    },
    changeMDVP_RAP: (state, action) => {
      state.value.MDVP_RAP = action.payload;
    },
    changeMDVP_PPQ: (state, action) => {
      state.value.MDVP_PPQ = action.payload;
    },
    changeJitter_DDP: (state, action) => {
      state.value.Jitter_DDP = action.payload;
    },
    changeMDVP_Shimmer: (state, action) => {
      state.value.MDVP_Shimmer = action.payload;
    },
    changeMDVP_Shimmer_dB: (state, action) => {
      state.value.MDVP_Shimmer_dB = action.payload;
    },
    changeShimmer_APQ3: (state, action) => {
      state.value.Shimmer_APQ3 = action.payload;
    },
    changeShimmer_APQ5: (state, action) => {
      state.value.Shimmer_APQ5 = action.payload;
    },
    changeMDVP_APQ: (state, action) => {
      state.value.MDVP_APQ = action.payload;
    },
    changeShimmer_DDA: (state, action) => {
      state.value.Shimmer_DDA = action.payload;
    },
    changeNHR: (state, action) => {
      state.value.NHR = action.payload;
    },
    changeHNR: (state, action) => {
      state.value.HNR = action.payload;
    },
    changeRPDE: (state, action) => {
      state.value.RPDE = action.payload;
    },
    changeDFA: (state, action) => {
      state.value.DFA = action.payload;
    },
    changeSpread1: (state, action) => {
      state.value.spread1 = action.payload;
    },
    changeSpread2: (state, action) => {
      state.value.spread2 = action.payload;
    },
    changeD2: (state, action) => {
      state.value.D2 = action.payload;
    },
    changePPE: (state, action) => {
      state.value.PPE = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  changeD2,
  changeDFA,
  changeHNR,
  changeJitter_DDP,
  changeMDVP_APQ,
  changeMDVP_Fhi_HZ,
  changeMDVP_Flo_HZ,
  changeMDVP_Jitter_Abs,
  changeMDVP_Jitter_percentage,
  changeMDVP_PPQ,
  changeMDVP_RAP,
  changeMDVP_Shimmer,
  changeMDVP_Shimmer_dB,
  changeMDVP_fo_HZ,
  changeNHR,
  changePPE,
  changeRPDE,
  changeShimmer_APQ3,
  changeShimmer_APQ5,
  changeShimmer_DDA,
  changeSpread1,
  changeSpread2,
} = parkinson_InputsSlice.actions;

export default parkinson_InputsSlice.reducer;
