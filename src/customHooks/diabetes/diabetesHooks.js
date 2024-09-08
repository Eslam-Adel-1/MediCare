import { useSelector, useDispatch } from "react-redux";
import {
  changeAge,
  changeBMI,
  changeBloodPressure,
  changeDiabetesPedigreeFunction,
  changeGlucose,
  changeInsulin,
  changePregnancies,
  changeSkinThickness,
} from "../../features/diabetes_Inputs/diabetes_InputsSlice";

//================================================================

export const ValidInputs = () => {
  const diabetes_inputs = useSelector((state) => state.diabetes_Inputs.value);

  const allInputsAreValid = [
    diabetes_inputs.Pregnancies,
    diabetes_inputs.Age,
    diabetes_inputs.BloodPressure,
    diabetes_inputs.SkinThickness,
    diabetes_inputs.Insulin,
    diabetes_inputs.BMI,
    diabetes_inputs.Glucose,
    diabetes_inputs.DiabetesPedigreeFunction,
  ].every((value) => {
    return value !== (0 || "");
  });

  return allInputsAreValid;
};

//================================================================

export const ApiData = () => {
  const diabetes_inputs = useSelector((state) => state.diabetes_Inputs.value);

  const fetchData = {
    Pregnancies: `${diabetes_inputs.Pregnancies}`,
    Glucose: `${diabetes_inputs.Glucose}`,
    BloodPressure: `${diabetes_inputs.BloodPressure}`,
    SkinThickness: `${diabetes_inputs.SkinThickness}`,
    Insulin: `${diabetes_inputs.Insulin}`,
    BMI: `${diabetes_inputs.BMI}`,
    DiabetesPedigreeFunction: `${diabetes_inputs.DiabetesPedigreeFunction}`,
    Age: `${diabetes_inputs.Age}`,
  };

  return fetchData;
};

//================================================================

export const ChangeVariables = () => {
  const dispatch = useDispatch();
  const changeVariables = () => {
    dispatch(changeAge(""));
    dispatch(changeBloodPressure(""));
    dispatch(changeGlucose(""));
    dispatch(changeSkinThickness(""));
    dispatch(changePregnancies(""));
    dispatch(changeInsulin(""));
    dispatch(changeDiabetesPedigreeFunction(""));
    dispatch(changeBMI(""));
  };
  return changeVariables;
};

//================================================================

export const HandleChangeDiabetes = () => {
  const dispatch = useDispatch();
  const diabetes_inputs = useSelector((state) => state.diabetes_Inputs.value);

  const validationFunction = (name) => {
    const validBreastCancerInput = [
      {
        condition: name === "Pregnancies",
        action: (e) => dispatch(changePregnancies(Math.floor(e.target.value))),
        action2: diabetes_inputs.Pregnancies,
      },
      {
        condition: name === "Glucose",
        action: (e) => dispatch(changeGlucose(Math.floor(e.target.value))),
        action2: diabetes_inputs.Glucose,
      },
      {
        condition: name === "BloodPressure",
        action: (e) =>
          dispatch(changeBloodPressure(Math.floor(e.target.value))),
        action2: diabetes_inputs.BloodPressure,
      },
      {
        condition: name === "SkinThickness",
        action: (e) =>
          dispatch(changeSkinThickness(Math.floor(e.target.value))),
        action2: diabetes_inputs.SkinThickness,
      },
      {
        condition: name === "Insulin",
        action: (e) => dispatch(changeInsulin(Math.floor(e.target.value))),
        action2: diabetes_inputs.Insulin,
      },
      {
        condition: name === "BMI",
        action: (e) => dispatch(changeBMI(Math.floor(e.target.value))),
        action2: diabetes_inputs.BMI,
      },
      {
        condition: name === "DiabetesPedigreeFunction",
        action: (e) =>
          dispatch(changeDiabetesPedigreeFunction(Math.floor(e.target.value))),
        action2: diabetes_inputs.DiabetesPedigreeFunction,
      },
      {
        condition: name === "Age",
        action: (e) => dispatch(changeAge(Math.floor(e.target.value))),
        action2: diabetes_inputs.Age,
      },
    ];

    return validBreastCancerInput;
  };

  const validationFunction2 = () => {
    const validBreastCancerInput = [
      {
        condition: diabetes_inputs.Pregnancies > 999,
        action: () => dispatch(changePregnancies(999)),
      },
      {
        condition: diabetes_inputs.Glucose > 999,
        action: () => dispatch(changeGlucose(999)),
      },
      {
        condition: diabetes_inputs.BloodPressure > 999,
        action: () => dispatch(changeBloodPressure(999)),
      },
      {
        condition: diabetes_inputs.SkinThickness > 999,
        action: () => dispatch(changeSkinThickness(999)),
      },
      {
        condition: diabetes_inputs.Insulin > 999,
        action: () => dispatch(changeInsulin(999)),
      },
      {
        condition: diabetes_inputs.BMI > 999,
        action: () => dispatch(changeBMI(999)),
      },
      {
        condition: diabetes_inputs.DiabetesPedigreeFunction > 999,
        action: () => dispatch(changeDiabetesPedigreeFunction(999)),
      },
      {
        condition: diabetes_inputs.Age > 100,
        action: () => dispatch(changeAge(100)),
      },
    ];

    return validBreastCancerInput;
  };

  return { validationFunction, validationFunction2 };
};

//================================================================
