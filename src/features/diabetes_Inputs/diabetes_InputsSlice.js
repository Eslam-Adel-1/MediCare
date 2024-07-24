import { createSlice } from "@reduxjs/toolkit";

export const diabetes_InputsSlice = createSlice({
  name: "diabetes_Inputs",
  initialState: {
    value: {
      Pregnancies: "",
      Glucose: "",
      BloodPressure: "",
      SkinThickness: "",
      Insulin: "",
      BMI: "",
      DiabetesPedigreeFunction: "",
      Age: "",
    },
  },
  reducers: {
    changePregnancies: (state, action) => {
      state.value.Pregnancies = action.payload;
    },
    changeAge: (state, action) => {
      state.value.Age = action.payload;
    },
    changeBMI: (state, action) => {
      state.value.BMI = action.payload;
    },
    changeBloodPressure: (state, action) => {
      state.value.BloodPressure = action.payload;
    },
    changeDiabetesPedigreeFunction: (state, action) => {
      state.value.DiabetesPedigreeFunction = action.payload;
    },
    changeGlucose: (state, action) => {
      state.value.Glucose = action.payload;
    },
    changeInsulin: (state, action) => {
      state.value.Insulin = action.payload;
    },
    changeSkinThickness: (state, action) => {
      state.value.SkinThickness = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  changeAge,
  changeBMI,
  changeBloodPressure,
  changeDiabetesPedigreeFunction,
  changeGlucose,
  changeInsulin,
  changePregnancies,
  changeSkinThickness,
} = diabetes_InputsSlice.actions;

export default diabetes_InputsSlice.reducer;
