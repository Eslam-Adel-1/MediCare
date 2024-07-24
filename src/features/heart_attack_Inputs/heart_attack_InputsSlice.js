import { createSlice } from "@reduxjs/toolkit";

export const heart_attack_InputsSlice = createSlice({
  name: "heart_attack_Inputs",
  initialState: {
    value: {
      Age: "",
      Sex: "",
      Cp: "",
      Trestbps: "",
      Chol: "",
      Fbs: "",
      Restecg: "",
      Thalach: "",
      Exang: "",
      Oldpeak: "",
      Slope: "",
      Ca: "",
      Thal: "",
    },
  },
  reducers: {
    changeSex: (state, action) => {
      state.value.Sex = action.payload;
    },
    changeAge: (state, action) => {
      state.value.Age = action.payload;
    },
    changeCp: (state, action) => {
      state.value.Cp = action.payload;
    },
    changeChol: (state, action) => {
      state.value.Chol = action.payload;
    },
    changeTrestbps: (state, action) => {
      state.value.Trestbps = action.payload;
    },
    changeCa: (state, action) => {
      state.value.Ca = action.payload;
    },
    changeThal: (state, action) => {
      state.value.Thal = action.payload;
    },
    changeSlope: (state, action) => {
      state.value.Slope = action.payload;
    },
    changeOldpeak: (state, action) => {
      state.value.Oldpeak = action.payload;
    },
    changeExang: (state, action) => {
      state.value.Exang = action.payload;
    },
    changeThalach: (state, action) => {
      state.value.Thalach = action.payload;
    },
    changeRestecg: (state, action) => {
      state.value.Restecg = action.payload;
    },
    changeFbs: (state, action) => {
      state.value.Fbs = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  changeAge,
  changeCa,
  changeChol,
  changeCp,
  changeExang,
  changeFbs,
  changeOldpeak,
  changeRestecg,
  changeSex,
  changeThal,
  changeSlope,
  changeThalach,
  changeTrestbps,
} = heart_attack_InputsSlice.actions;

export default heart_attack_InputsSlice.reducer;
