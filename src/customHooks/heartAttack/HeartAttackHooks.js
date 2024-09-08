import { useSelector, useDispatch } from "react-redux";
import {
  changeAge,
  changeCa,
  changeChol,
  changeCp,
  changeExang,
  changeFbs,
  changeOldpeak,
  changeRestecg,
  changeSex,
  changeSlope,
  changeThal,
  changeThalach,
  changeTrestbps,
} from "../../features/heart_attack_Inputs/heart_attack_InputsSlice";

//================================================================

export const ValidInputs = () => {
  const heart_attack_inputs = useSelector(
    (state) => state.heart_attack_Inputs.value
  );

  const allInputsAreValid = [
    heart_attack_inputs.Age,
    heart_attack_inputs.Sex,
    heart_attack_inputs.Cp,
    heart_attack_inputs.Trestbps,
    heart_attack_inputs.Chol,
    heart_attack_inputs.Fbs,
    heart_attack_inputs.Restecg,
    heart_attack_inputs.Thalach,
    heart_attack_inputs.Exang,
    heart_attack_inputs.Oldpeak,
    heart_attack_inputs.Slope,
    heart_attack_inputs.Ca,
    heart_attack_inputs.Thal,
  ].every((value) => {
    return value !== (0 || "");
  });

  return allInputsAreValid;
};

//================================================================

export const ApiData = () => {
  const heart_attack_inputs = useSelector(
    (state) => state.heart_attack_Inputs.value
  );

  const fetchData = {
    Age: `${heart_attack_inputs.Age}`,
    Sex: `${heart_attack_inputs.Sex}`,
    Cp: `${heart_attack_inputs.Cp}`,
    Trestbps: `${heart_attack_inputs.Trestbps}`,
    Chol: `${heart_attack_inputs.Chol}`,
    Fbs: `${heart_attack_inputs.Fbs}`,
    Restecg: `${heart_attack_inputs.Restecg}`,
    Thalach: `${heart_attack_inputs.Thalach}`,
    Exang: `${heart_attack_inputs.Exang}`,
    Oldpeak: `${heart_attack_inputs.Oldpeak}`,
    Slope: `${heart_attack_inputs.Slope}`,
    Ca: `${heart_attack_inputs.Ca}`,
    Thal: `${heart_attack_inputs.Thal}`,
  };

  return fetchData;
};

//================================================================

export const ChangeVariables = () => {
  const dispatch = useDispatch();
  const changeVariables = () => {
    dispatch(changeAge(""));
    dispatch(changeCa(""));
    dispatch(changeChol(""));
    dispatch(changeCp(""));
    dispatch(changeExang(""));
    dispatch(changeFbs(""));
    dispatch(changeOldpeak(""));
    dispatch(changeRestecg(""));
    dispatch(changeSex(""));
    dispatch(changeSlope(""));
    dispatch(changeThal(""));
    dispatch(changeThalach(""));
  };
  return changeVariables;
};

//================================================================

export const HandleChangeHeartAttack = () => {
  const dispatch = useDispatch();
  const heart_attack_inputs = useSelector(
    (state) => state.heart_attack_Inputs.value
  );

  const validationFunction = (name) => {
    const validBreastCancerInput = [
      {
        condition: name === "Age",
        action: (e) => dispatch(changeAge(Math.floor(e.target.value))),
        action2: heart_attack_inputs.Age,
      },
      {
        condition: name === "Sex",
        action: (e) => dispatch(changeSex(Math.floor(e.target.value))),
        action2: heart_attack_inputs.Sex,
      },
      {
        condition: name === "Cp",
        action: (e) => dispatch(changeCp(Math.floor(e.target.value))),
        action2: heart_attack_inputs.Cp,
      },
      {
        condition: name === "Trestbps",
        action: (e) => dispatch(changeTrestbps(Math.floor(e.target.value))),
        action2: heart_attack_inputs.Trestbps,
      },
      {
        condition: name === "Chol",
        action: (e) => dispatch(changeChol(Math.floor(e.target.value))),
        action2: heart_attack_inputs.Chol,
      },
      {
        condition: name === "Fbs",
        action: (e) => dispatch(changeFbs(Math.floor(e.target.value))),
        action2: heart_attack_inputs.Fbs,
      },
      {
        condition: name === "Restecg",
        action: (e) => dispatch(changeRestecg(Math.floor(e.target.value))),
        action2: heart_attack_inputs.Restecg,
      },
      {
        condition: name === "Thalach",
        action: (e) => dispatch(changeThalach(Math.floor(e.target.value))),
        action2: heart_attack_inputs.Thalach,
      },
      {
        condition: name === "Exang",
        action: (e) => dispatch(changeExang(Math.floor(e.target.value))),
        action2: heart_attack_inputs.Exang,
      },
      {
        condition: name === "Oldpeak",
        action: (e) => dispatch(changeOldpeak(Math.floor(e.target.value))),
        action2: heart_attack_inputs.Oldpeak,
      },
      {
        condition: name === "Slope",
        action: (e) => dispatch(changeSlope(Math.floor(e.target.value))),
        action2: heart_attack_inputs.Slope,
      },
      {
        condition: name === "Ca",
        action: (e) => dispatch(changeCa(Math.floor(e.target.value))),
        action2: heart_attack_inputs.Ca,
      },
      {
        condition: name === "Thal",
        action: (e) => dispatch(changeThal(Math.floor(e.target.value))),
        action2: heart_attack_inputs.Thal,
      },
    ];

    return validBreastCancerInput;
  };

  const validationFunction2 = () => {
    const validBreastCancerInput = [
      {
        condition: heart_attack_inputs.Age > 100,
        action: () => dispatch(changeAge(100)),
      },
      {
        condition:
          heart_attack_inputs.Sex > 1 || heart_attack_inputs.Age.Sex < 0,
        action: () => dispatch(changeSex(1)),
      },
      {
        condition: heart_attack_inputs.Cp > 999,
        action: () => dispatch(changeCp(999)),
      },
      {
        condition: heart_attack_inputs.Trestbps > 999,
        action: () => dispatch(changeTrestbps(999)),
      },
      {
        condition: heart_attack_inputs.Chol > 999,
        action: () => dispatch(changeChol(999)),
      },
      {
        condition: heart_attack_inputs.Fbs > 999,
        action: () => dispatch(changeFbs(999)),
      },
      {
        condition: heart_attack_inputs.Restecg > 999,
        action: () => dispatch(changeRestecg(999)),
      },
      {
        condition: heart_attack_inputs.Thalach > 999,
        action: () => dispatch(changeThalach(999)),
      },
      {
        condition: heart_attack_inputs.Exang > 999,
        action: () => dispatch(changeExang(999)),
      },
      {
        condition: heart_attack_inputs.Oldpeak > 999,
        action: () => dispatch(changeOldpeak(999)),
      },
      {
        condition: heart_attack_inputs.Slope > 999,
        action: () => dispatch(changeSlope(999)),
      },
      {
        condition: heart_attack_inputs.Ca > 999,
        action: () => dispatch(changeCa(999)),
      },
      {
        condition: heart_attack_inputs.Thal > 999,
        action: () => dispatch(changeThal(999)),
      },
    ];

    return validBreastCancerInput;
  };

  return { validationFunction, validationFunction2 };
};

//================================================================
