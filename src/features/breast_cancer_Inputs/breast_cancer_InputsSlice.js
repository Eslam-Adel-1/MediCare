import { createSlice } from "@reduxjs/toolkit";

export const breast_cancer_InputsSlice = createSlice({
  name: "heart_attack_Inputs",
  initialState: {
    value: {
      clump_thickness: "",
      uniform_cell_size: "",
      uniform_cell_shape: "",
      marginal_adhesion: "",
      single_epithelial_size: "",
      bare_nuclei: "",
      bland_chromatin: "",
      normal_nucleoli: "",
      mitoses: "",
    },
  },
  reducers: {
    changeClump_thickness: (state, action) => {
      state.value.clump_thickness = action.payload;
    },
    changeUniform_cell_size: (state, action) => {
      state.value.uniform_cell_size = action.payload;
    },
    changeUniform_cell_shape: (state, action) => {
      state.value.uniform_cell_shape = action.payload;
    },
    changeMarginal_adhesion: (state, action) => {
      state.value.marginal_adhesion = action.payload;
    },
    changeSingle_epithelial_size: (state, action) => {
      state.value.single_epithelial_size = action.payload;
    },
    changeBare_nuclei: (state, action) => {
      state.value.bare_nuclei = action.payload;
    },
    changeBland_chromatin: (state, action) => {
      state.value.bland_chromatin = action.payload;
    },
    changeNormal_nucleoli: (state, action) => {
      state.value.normal_nucleoli = action.payload;
    },
    changeMitoses: (state, action) => {
      state.value.mitoses = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  changeBare_nuclei,
  changeBland_chromatin,
  changeClump_thickness,
  changeMarginal_adhesion,
  changeMitoses,
  changeNormal_nucleoli,
  changeSingle_epithelial_size,
  changeUniform_cell_shape,
  changeUniform_cell_size,
} = breast_cancer_InputsSlice.actions;

export default breast_cancer_InputsSlice.reducer;
