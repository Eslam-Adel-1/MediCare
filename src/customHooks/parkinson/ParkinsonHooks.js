import { useSelector, useDispatch } from "react-redux";
import {
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
} from "../../features/parkinson_Inputs/parkinson_InputsSlice";

//================================================================

export const ValidInputs = () => {
  const parkinson_inputs = useSelector((state) => state.parkinson_Inputs.value);
  const allInputsAreValid = [
    parkinson_inputs.MDVP_fo_HZ,
    parkinson_inputs.MDVP_Fhi_HZ,
    parkinson_inputs.MDVP_Flo_HZ,
    parkinson_inputs.MDVP_Jitter_percentage,
    parkinson_inputs.MDVP_Jitter_Abs,
    parkinson_inputs.MDVP_RAP,
    parkinson_inputs.MDVP_PPQ,
    parkinson_inputs.Jitter_DDP,
    parkinson_inputs.MDVP_Shimmer,
    parkinson_inputs.MDVP_Shimmer_dB,
    parkinson_inputs.Shimmer_APQ3,
    parkinson_inputs.Shimmer_APQ5,
    parkinson_inputs.MDVP_APQ,
    parkinson_inputs.Shimmer_DDA,
    parkinson_inputs.NHR,
    parkinson_inputs.HNR,
    parkinson_inputs.RPDE,
    parkinson_inputs.DFA,
    parkinson_inputs.spread1,
    parkinson_inputs.spread2,
    parkinson_inputs.D2,
    parkinson_inputs.PPE,
  ].every((value) => {
    return value !== (0 || "");
  });

  return allInputsAreValid;
};

//================================================================

export const ApiData = () => {
  const parkinson_inputs = useSelector((state) => state.parkinson_Inputs.value);

  const fetchData = {
    MDVP_fo_HZ: `${parkinson_inputs.MDVP_fo_HZ}`,
    MDVP_Fhi_HZ: `${parkinson_inputs.MDVP_Fhi_HZ}`,
    MDVP_Flo_HZ: `${parkinson_inputs.MDVP_Flo_HZ}`,
    MDVP_Jitter_percentage: `${parkinson_inputs.MDVP_Jitter_percentage}`,
    MDVP_Jitter_Abs: `${parkinson_inputs.MDVP_Jitter_Abs}`,
    MDVP_RAP: `${parkinson_inputs.MDVP_RAP}`,
    MDVP_PPQ: `${parkinson_inputs.MDVP_PPQ}`,
    Jitter_DDP: `${parkinson_inputs.Jitter_DDP}`,
    MDVP_Shimmer: `${parkinson_inputs.MDVP_Shimmer}`,
    MDVP_Shimmer_dB: `${parkinson_inputs.MDVP_Shimmer_dB}`,
    Shimmer_APQ3: `${parkinson_inputs.Shimmer_APQ3}`,
    Shimmer_APQ5: `${parkinson_inputs.Shimmer_APQ5}`,
    MDVP_APQ: `${parkinson_inputs.MDVP_APQ}`,
    Shimmer_DDA: `${parkinson_inputs.Shimmer_DDA}`,
    NHR: `${parkinson_inputs.NHR}`,
    HNR: `${parkinson_inputs.HNR}`,
    RPDE: `${parkinson_inputs.RPDE}`,
    DFA: `${parkinson_inputs.DFA}`,
    spread1: `${parkinson_inputs.spread1}`,
    spread2: `${parkinson_inputs.spread2}`,
    D2: `${parkinson_inputs.D2}`,
    PPE: `${parkinson_inputs.PPE}`,
  };

  return fetchData;
};

//================================================================

export const ChangeVariables = () => {
  const dispatch = useDispatch();
  const changeVariables = () => {
    dispatch(changeD2(""));
    dispatch(changeDFA(""));
    dispatch(changeHNR(""));
    dispatch(changeJitter_DDP(""));
    dispatch(changeMDVP_APQ(""));
    dispatch(changeMDVP_Fhi_HZ(""));
    dispatch(changeMDVP_Flo_HZ(""));
    dispatch(changeMDVP_Jitter_Abs(""));
    dispatch(changeMDVP_Jitter_percentage(""));
    dispatch(changeMDVP_PPQ(""));
    dispatch(changeMDVP_RAP(""));
    dispatch(changeMDVP_Shimmer(""));
    dispatch(changeMDVP_Shimmer_dB(""));
    dispatch(changeMDVP_fo_HZ(""));
    dispatch(changeNHR(""));
    dispatch(changePPE(""));
    dispatch(changeRPDE(""));
    dispatch(changeShimmer_APQ3(""));
    dispatch(changeShimmer_APQ5(""));
    dispatch(changeShimmer_DDA(""));
    dispatch(changeSpread1(""));
    dispatch(changeSpread2(""));
  };
  return changeVariables;
};

//================================================================

export const HandleChangeParkinson = () => {
  const dispatch = useDispatch();
  const parkinson_inputs = useSelector((state) => state.parkinson_Inputs.value);

  const validationFunction = (name) => {
    const validBreastCancerInput = [
      {
        condition: name === "MDVP_fo_HZ",
        action: (e) => dispatch(changeMDVP_fo_HZ(Math.floor(e.target.value))),
        action2: parkinson_inputs.MDVP_fo_HZ,
      },
      {
        condition: name === "MDVP_Fhi_HZ",
        action: (e) => dispatch(changeMDVP_Fhi_HZ(Math.floor(e.target.value))),
        action2: parkinson_inputs.MDVP_Fhi_HZ,
      },
      {
        condition: name === "MDVP_Flo_HZ",
        action: (e) => dispatch(changeMDVP_Flo_HZ(Math.floor(e.target.value))),
        action2: parkinson_inputs.MDVP_Flo_HZ,
      },
      {
        condition: name === "MDVP_Jitter_percentage",
        action: (e) =>
          dispatch(changeMDVP_Jitter_percentage(Math.floor(e.target.value))),
        action2: parkinson_inputs.MDVP_Jitter_percentage,
      },
      {
        condition: name === "MDVP_Jitter_Abs",
        action: (e) =>
          dispatch(changeMDVP_Jitter_Abs(Math.floor(e.target.value))),
        action2: parkinson_inputs.MDVP_Jitter_Abs,
      },
      {
        condition: name === "MDVP_RAP",
        action: (e) => dispatch(changeMDVP_RAP(Math.floor(e.target.value))),
        action2: parkinson_inputs.MDVP_RAP,
      },
      {
        condition: name === "MDVP_PPQ",
        action: (e) => dispatch(changeMDVP_PPQ(Math.floor(e.target.value))),
        action2: parkinson_inputs.MDVP_PPQ,
      },
      {
        condition: name === "Jitter_DDP",
        action: (e) => dispatch(changeJitter_DDP(Math.floor(e.target.value))),
        action2: parkinson_inputs.Jitter_DDP,
      },
      {
        condition: name === "MDVP_Shimmer",
        action: (e) => dispatch(changeMDVP_Shimmer(Math.floor(e.target.value))),
        action2: parkinson_inputs.MDVP_Shimmer,
      },
      {
        condition: name === "MDVP_Shimmer_dB",
        action: (e) =>
          dispatch(changeMDVP_Shimmer_dB(Math.floor(e.target.value))),
        action2: parkinson_inputs.MDVP_Shimmer_dB,
      },
      {
        condition: name === "Shimmer_APQ3",
        action: (e) => dispatch(changeShimmer_APQ3(Math.floor(e.target.value))),
        action2: parkinson_inputs.Shimmer_APQ3,
      },
      {
        condition: name === "Shimmer_APQ5",
        action: (e) => dispatch(changeShimmer_APQ5(Math.floor(e.target.value))),
        action2: parkinson_inputs.Shimmer_APQ5,
      },
      {
        condition: name === "MDVP_APQ",
        action: (e) => dispatch(changeMDVP_APQ(Math.floor(e.target.value))),
        action2: parkinson_inputs.MDVP_APQ,
      },
      {
        condition: name === "Shimmer_DDA",
        action: (e) => dispatch(changeShimmer_DDA(Math.floor(e.target.value))),
        action2: parkinson_inputs.Shimmer_DDA,
      },
      {
        condition: name === "NHR",
        action: (e) => dispatch(changeNHR(Math.floor(e.target.value))),
        action2: parkinson_inputs.NHR,
      },
      {
        condition: name === "HNR",
        action: (e) => dispatch(changeHNR(Math.floor(e.target.value))),
        action2: parkinson_inputs.HNR,
      },
      {
        condition: name === "RPDE",
        action: (e) => dispatch(changeRPDE(Math.floor(e.target.value))),
        action2: parkinson_inputs.RPDE,
      },
      {
        condition: name === "DFA",
        action: (e) => dispatch(changeDFA(Math.floor(e.target.value))),
        action2: parkinson_inputs.DFA,
      },
      {
        condition: name === "spread1",
        action: (e) => dispatch(changeSpread1(Math.floor(e.target.value))),
        action2: parkinson_inputs.spread1,
      },
      {
        condition: name === "spread2",
        action: (e) => dispatch(changeSpread2(Math.floor(e.target.value))),
        action2: parkinson_inputs.spread2,
      },
      {
        condition: name === "D2",
        action: (e) => dispatch(changeD2(Math.floor(e.target.value))),
        action2: parkinson_inputs.D2,
      },
      {
        condition: name === "PPE",
        action: (e) => dispatch(changePPE(Math.floor(e.target.value))),
        action2: parkinson_inputs.PPE,
      },
    ];

    return validBreastCancerInput;
  };

  const validationFunction2 = () => {
    const validBreastCancerInput = [
      {
        condition: parkinson_inputs.MDVP_fo_HZ > 999,
        action: () => dispatch(changeMDVP_fo_HZ(999)),
      },
      {
        condition: parkinson_inputs.MDVP_Fhi_HZ > 999,
        action: () => dispatch(changeMDVP_Fhi_HZ(999)),
      },
      {
        condition: parkinson_inputs.MDVP_Flo_HZ > 999,
        action: () => dispatch(changeMDVP_Flo_HZ(999)),
      },
      {
        condition: parkinson_inputs.MDVP_Jitter_percentage > 999,
        action: () => dispatch(changeMDVP_Jitter_percentage(999)),
      },
      {
        condition: parkinson_inputs.MDVP_Jitter_Abs > 999,
        action: () => dispatch(changeMDVP_Jitter_Abs(999)),
      },
      {
        condition: parkinson_inputs.MDVP_RAP > 999,
        action: () => dispatch(changeMDVP_RAP(999)),
      },
      {
        condition: parkinson_inputs.MDVP_PPQ > 999,
        action: () => dispatch(changeMDVP_PPQ(999)),
      },
      {
        condition: parkinson_inputs.Jitter_DDP > 999,
        action: () => dispatch(changeJitter_DDP(999)),
      },
      {
        condition: parkinson_inputs.MDVP_Shimmer > 999,
        action: () => dispatch(changeMDVP_Shimmer(999)),
      },
      {
        condition: parkinson_inputs.MDVP_Shimmer_dB > 999,
        action: () => dispatch(changeMDVP_Shimmer_dB(999)),
      },
      {
        condition: parkinson_inputs.Shimmer_APQ3 > 999,
        action: () => dispatch(changeShimmer_APQ3(999)),
      },
      {
        condition: parkinson_inputs.Shimmer_APQ5 > 999,
        action: () => dispatch(changeShimmer_APQ5(999)),
      },
      {
        condition: parkinson_inputs.MDVP_APQ > 999,
        action: () => dispatch(changeMDVP_APQ(999)),
      },
      {
        condition: parkinson_inputs.Shimmer_DDA > 999,
        action: () => dispatch(changeShimmer_DDA(999)),
      },
      {
        condition: parkinson_inputs.NHR > 999,
        action: () => dispatch(changeNHR(999)),
      },
      {
        condition: parkinson_inputs.HNR > 999,
        action: () => dispatch(changeHNR(999)),
      },
      {
        condition: parkinson_inputs.RPDE > 999,
        action: () => dispatch(changeRPDE(999)),
      },
      {
        condition: parkinson_inputs.DFA > 999,
        action: () => dispatch(changeDFA(999)),
      },
      {
        condition: parkinson_inputs.spread1 > 999,
        action: () => dispatch(changeSpread1(999)),
      },
      {
        condition: parkinson_inputs.spread2 > 999,
        action: () => dispatch(changeSpread2(999)),
      },
      {
        condition: parkinson_inputs.D2 > 999,
        action: () => dispatch(changeD2(999)),
      },
      {
        condition: parkinson_inputs.PPE > 999,
        action: () => dispatch(changePPE(999)),
      },
    ];

    return validBreastCancerInput;
  };

  return { validationFunction, validationFunction2 };
};

//================================================================
