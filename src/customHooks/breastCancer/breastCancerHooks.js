import { useSelector, useDispatch } from "react-redux";
import {
  changeBare_nuclei,
  changeBland_chromatin,
  changeClump_thickness,
  changeMarginal_adhesion,
  changeMitoses,
  changeNormal_nucleoli,
  changeSingle_epithelial_size,
  changeUniform_cell_shape,
  changeUniform_cell_size,
} from "../../features/breast_cancer_Inputs/breast_cancer_InputsSlice";

//================================================================

export const ValidInputs = () => {
  const breast_cancer_inputs = useSelector(
    (state) => state.breast_cancer_Inputs.value
  );

  const allInputsAreValid = [
    breast_cancer_inputs.clump_thickness,
    breast_cancer_inputs.uniform_cell_shape,
    breast_cancer_inputs.uniform_cell_size,
    breast_cancer_inputs.marginal_adhesion,
    breast_cancer_inputs.single_epithelial_size,
    breast_cancer_inputs.bare_nuclei,
    breast_cancer_inputs.bland_chromatin,
    breast_cancer_inputs.normal_nucleoli,
    breast_cancer_inputs.mitoses,
  ].every((value) => {
    return value !== (0 || "");
  });

  return allInputsAreValid;
};

//================================================================

export const ApiData = () => {
  const breast_cancer_inputs = useSelector(
    (state) => state.breast_cancer_Inputs.value
  );

  const fetchData = {
    clump_thickness: `${breast_cancer_inputs.clump_thickness}`,
    uniform_cell_size: `${breast_cancer_inputs.uniform_cell_size}`,
    uniform_cell_shape: `${breast_cancer_inputs.uniform_cell_shape}`,
    marginal_adhesion: `${breast_cancer_inputs.marginal_adhesion}`,
    single_epithelial_size: `${breast_cancer_inputs.single_epithelial_size}`,
    bare_nuclei: `${breast_cancer_inputs.bare_nuclei}`,
    bland_chromatin: `${breast_cancer_inputs.bland_chromatin}`,
    normal_nucleoli: `${breast_cancer_inputs.normal_nucleoli}`,
    mitoses: `${breast_cancer_inputs.mitoses}`,
  };

  return fetchData;
};

//================================================================

export const ChangeVariables = () => {
  const dispatch = useDispatch();
  const changeVariables = () => {
    dispatch(changeBare_nuclei(""));
    dispatch(changeBland_chromatin(""));
    dispatch(changeClump_thickness(""));
    dispatch(changeMarginal_adhesion(""));
    dispatch(changeMitoses(""));
    dispatch(changeNormal_nucleoli(""));
    dispatch(changeSingle_epithelial_size(""));
    dispatch(changeUniform_cell_shape(""));
    dispatch(changeUniform_cell_size(""));
  };
  return changeVariables;
};

//================================================================

export const HandleChangeBreastCancer = () => {
  const dispatch = useDispatch();
  const breast_cancer_inputs = useSelector(
    (state) => state.breast_cancer_Inputs.value
  );

  const validationFunction = (name) => {
    const validBreastCancerInput = [
      {
        condition: name === "clump_thickness",
        action: (e) =>
          dispatch(changeClump_thickness(Math.floor(e.target.value))),
        action2: breast_cancer_inputs.clump_thickness,
      },
      {
        condition: name === "uniform_cell_size",
        action: (e) =>
          dispatch(changeUniform_cell_size(Math.floor(e.target.value))),
        action2: breast_cancer_inputs.uniform_cell_size,
      },
      {
        condition: name === "uniform_cell_shape",
        action: (e) =>
          dispatch(changeUniform_cell_shape(Math.floor(e.target.value))),
        action2: breast_cancer_inputs.uniform_cell_shape,
      },
      {
        condition: name === "marginal_adhesion",
        action: (e) =>
          dispatch(changeMarginal_adhesion(Math.floor(e.target.value))),
        action2: breast_cancer_inputs.marginal_adhesion,
      },
      {
        condition: name === "single_epithelial_size",
        action: (e) =>
          dispatch(changeSingle_epithelial_size(Math.floor(e.target.value))),
        action2: breast_cancer_inputs.single_epithelial_size,
      },
      {
        condition: name === "bare_nuclei",
        action: (e) => dispatch(changeBare_nuclei(Math.floor(e.target.value))),
        action2: breast_cancer_inputs.bare_nuclei,
      },
      {
        condition: name === "bland_chromatin",
        action: (e) =>
          dispatch(changeBland_chromatin(Math.floor(e.target.value))),
        action2: breast_cancer_inputs.bland_chromatin,
      },
      {
        condition: name === "normal_nucleoli",
        action: (e) =>
          dispatch(changeNormal_nucleoli(Math.floor(e.target.value))),
        action2: breast_cancer_inputs.normal_nucleoli,
      },
      {
        condition: name === "mitoses",
        action: (e) => dispatch(changeMitoses(Math.floor(e.target.value))),
        action2: breast_cancer_inputs.mitoses,
      },
    ];

    return validBreastCancerInput;
  };

  const validationFunction2 = () => {
    const validBreastCancerInput = [
      {
        condition: breast_cancer_inputs.clump_thickness > 999,
        action: () => dispatch(changeClump_thickness(999)),
      },
      {
        condition: breast_cancer_inputs.uniform_cell_size > 999,
        action: () => dispatch(changeUniform_cell_size(999)),
      },
      {
        condition: breast_cancer_inputs.uniform_cell_shape > 999,
        action: () => dispatch(changeUniform_cell_shape(999)),
      },
      {
        condition: breast_cancer_inputs.marginal_adhesion > 999,
        action: () => dispatch(changeMarginal_adhesion(999)),
      },
      {
        condition: breast_cancer_inputs.single_epithelial_size > 999,
        action: () => dispatch(changeSingle_epithelial_size(999)),
      },
      {
        condition: breast_cancer_inputs.bare_nuclei > 999,
        action: () => dispatch(changeBare_nuclei(999)),
      },
      {
        condition: breast_cancer_inputs.bland_chromatin > 999,
        action: () => dispatch(changeBland_chromatin(999)),
      },
      {
        condition: breast_cancer_inputs.normal_nucleoli > 999,
        action: () => dispatch(changeNormal_nucleoli(999)),
      },
      {
        condition: breast_cancer_inputs.mitoses > 999,
        action: () => dispatch(changeMitoses(999)),
      },
    ];

    return validBreastCancerInput;
  };

  return { validationFunction, validationFunction2 };
};

//================================================================
