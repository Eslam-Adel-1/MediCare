import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";
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
} from "../features/parkinson_Inputs/parkinson_InputsSlice";

const ParkinsonInfoComponent = ({ name, information }) => {
  const parkinson_inputs = useSelector((state) => state.parkinson_Inputs.value);
  const [showInfo, setShowInfo] = useState(false);
  const dispatch = useDispatch();

  console.log(parkinson_inputs);

  const handleChange = (e) => {
    if (name === "MDVP_fo_HZ") {
      dispatch(changeMDVP_fo_HZ(Math.floor(e.target.value)));
    } else if (name === "MDVP_Fhi_HZ") {
      dispatch(changeMDVP_Fhi_HZ(Math.floor(e.target.value)));
    } else if (name === "MDVP_Flo_HZ") {
      dispatch(changeMDVP_Flo_HZ(Math.floor(e.target.value)));
    } else if (name === "MDVP_Jitter_percentage") {
      dispatch(changeMDVP_Jitter_percentage(Math.floor(e.target.value)));
    } else if (name === "MDVP_Jitter_Abs") {
      dispatch(changeMDVP_Jitter_Abs(Math.floor(e.target.value)));
    } else if (name === "MDVP_RAP") {
      dispatch(changeMDVP_RAP(Math.floor(e.target.value)));
    } else if (name === "MDVP_PPQ") {
      dispatch(changeMDVP_PPQ(Math.floor(e.target.value)));
    } else if (name === "Jitter_DDP") {
      dispatch(changeJitter_DDP(Math.floor(e.target.value)));
    } else if (name === "MDVP_Shimmer") {
      dispatch(changeMDVP_Shimmer(Math.floor(e.target.value)));
    } else if (name === "MDVP_Shimmer_dB") {
      dispatch(changeMDVP_Shimmer_dB(Math.floor(e.target.value)));
    } else if (name === "Shimmer_APQ3") {
      dispatch(changeShimmer_APQ3(Math.floor(e.target.value)));
    } else if (name === "Shimmer_APQ5") {
      dispatch(changeShimmer_APQ5(Math.floor(e.target.value)));
    } else if (name === "MDVP_APQ") {
      dispatch(changeMDVP_APQ(Math.floor(e.target.value)));
    } else if (name === "Shimmer_DDA") {
      dispatch(changeShimmer_DDA(Math.floor(e.target.value)));
    } else if (name === "NHR") {
      dispatch(changeNHR(Math.floor(e.target.value)));
    } else if (name === "HNR") {
      dispatch(changeHNR(Math.floor(e.target.value)));
    } else if (name === "RPDE") {
      dispatch(changeRPDE(Math.floor(e.target.value)));
    } else if (name === "DFA") {
      dispatch(changeDFA(Math.floor(e.target.value)));
    } else if (name === "spread1") {
      dispatch(changeSpread1(Math.floor(e.target.value)));
    } else if (name === "spread2") {
      dispatch(changeSpread2(Math.floor(e.target.value)));
    } else if (name === "D2") {
      dispatch(changeD2(Math.floor(e.target.value)));
    } else if (name === "PPE") {
      dispatch(changePPE(Math.floor(e.target.value)));
    }
  };

  const handleChange2 = () => {
    if (parkinson_inputs.MDVP_fo_HZ > 999) {
      dispatch(changeMDVP_fo_HZ(999));
    } else if (parkinson_inputs.MDVP_Fhi_HZ > 999) {
      dispatch(changeMDVP_Fhi_HZ(999));
    } else if (parkinson_inputs.MDVP_Flo_HZ > 999) {
      dispatch(changeMDVP_Flo_HZ(999));
    } else if (parkinson_inputs.MDVP_Jitter_percentage > 999) {
      dispatch(changeMDVP_Jitter_percentage(999));
    } else if (parkinson_inputs.MDVP_Jitter_Abs > 999) {
      dispatch(changeMDVP_Jitter_Abs(999));
    } else if (parkinson_inputs.MDVP_RAP > 999) {
      dispatch(changeMDVP_RAP(999));
    } else if (parkinson_inputs.MDVP_PPQ > 999) {
      dispatch(changeMDVP_PPQ(999));
    } else if (parkinson_inputs.Jitter_DDP > 999) {
      dispatch(changeJitter_DDP(999));
    } else if (parkinson_inputs.MDVP_Shimmer > 999) {
      dispatch(changeMDVP_Shimmer(999));
    } else if (parkinson_inputs.MDVP_Shimmer_dB > 999) {
      dispatch(changeMDVP_Shimmer_dB(999));
    } else if (parkinson_inputs.Shimmer_APQ3 > 999) {
      dispatch(changeShimmer_APQ3(999));
    } else if (parkinson_inputs.Shimmer_APQ5 > 999) {
      dispatch(changeShimmer_APQ5(999));
    } else if (parkinson_inputs.MDVP_APQ > 999) {
      dispatch(changeMDVP_APQ(999));
    } else if (parkinson_inputs.Shimmer_DDA > 999) {
      dispatch(changeShimmer_DDA(999));
    } else if (parkinson_inputs.NHR > 999) {
      dispatch(changeNHR(999));
    } else if (parkinson_inputs.HNR > 999) {
      dispatch(changeHNR(999));
    } else if (parkinson_inputs.RPDE > 999) {
      dispatch(changeRPDE(999));
    } else if (parkinson_inputs.DFA > 999) {
      dispatch(changeDFA(999));
    } else if (parkinson_inputs.spread1 > 999) {
      dispatch(changeSpread1(999));
    } else if (parkinson_inputs.spread2 > 999) {
      dispatch(changeSpread2(999));
    } else if (parkinson_inputs.D2 > 999) {
      dispatch(changeD2(999));
    } else if (parkinson_inputs.PPE > 999) {
      dispatch(changePPE(999));
    }
  };

  useEffect(() => {
    handleChange2();
  }, [parkinson_inputs]);

  return (
    <MainSection showInfo={showInfo}>
      <div className="input-container">
        <TextField
          className="TextField"
          label={name}
          id="fullwidth"
          defaultValue=""
          size="small"
          type="number"
          min="0"
          step="1"
          onInput={() => {
            handleChange2();
          }}
          onChange={(e) => handleChange(e)}
          value={
            name === "MDVP_fo_HZ" ? (
              parkinson_inputs.MDVP_fo_HZ
            ) : name === "MDVP_Fhi_HZ" ? (
              parkinson_inputs.MDVP_Fhi_HZ
            ) : name === "MDVP_Flo_HZ" ? (
              parkinson_inputs.MDVP_Flo_HZ
            ) : name === "MDVP_Jitter_percentage" ? (
              parkinson_inputs.MDVP_Jitter_percentage
            ) : name === "MDVP_Jitter_Abs" ? (
              parkinson_inputs.MDVP_Jitter_Abs
            ) : name === "MDVP_RAP" ? (
              parkinson_inputs.MDVP_RAP
            ) : name === "MDVP_PPQ" ? (
              parkinson_inputs.MDVP_PPQ
            ) : name === "Jitter_DDP" ? (
              parkinson_inputs.Jitter_DDP
            ) : name === "MDVP_Shimmer" ? (
              parkinson_inputs.MDVP_Shimmer
            ) : name === "MDVP_Shimmer_dB" ? (
              parkinson_inputs.MDVP_Shimmer_dB
            ) : name === "Shimmer_APQ3" ? (
              parkinson_inputs.Shimmer_APQ3
            ) : name === "Shimmer_APQ5" ? (
              parkinson_inputs.Shimmer_APQ5
            ) : name === "MDVP_APQ" ? (
              parkinson_inputs.MDVP_APQ
            ) : name === "Shimmer_DDA" ? (
              parkinson_inputs.Shimmer_DDA
            ) : name === "HNR" ? (
              parkinson_inputs.HNR
            ) : name === "RPDE" ? (
              parkinson_inputs.RPDE
            ) : name === "DFA" ? (
              parkinson_inputs.DFA
            ) : name === "spread1" ? (
              parkinson_inputs.spread1
            ) : name === "spread2" ? (
              parkinson_inputs.spread2
            ) : name === "D2" ? (
              parkinson_inputs.D2
            ) : name === "PPE" ? (
              parkinson_inputs.PPE
            ) : name === "NHR" ? (
              parkinson_inputs.NHR
            ) : (
              <></>
            )
          }
        />

        <Button
          className="info-button"
          onClick={() => {
            setShowInfo(!showInfo);
          }}
        >
          <InfoIcon className="info-icon" />
        </Button>
        {showInfo ? (
          <>
            <div className="info-info">
              <p>{information}</p>
            </div>
            <div className="info-container">
              <div className="info-info2">
                <p>{information}</p>
                <Button
                  onClick={() => {
                    setShowInfo(!showInfo);
                  }}
                >
                  Close
                </Button>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </MainSection>
  );
};

export default ParkinsonInfoComponent;

const MainSection = styled.div`
  height: fit-content;
  align-self: center;
  .input-container {
    position: relative;
    display: flex;
    justify-content: center;
    .TextField {
      flex-grow: 1;
    }
    .info-info {
      position: absolute;
      top: -70px;
      right: -120px;
      font-size: 12px;
      min-height: fit-content;
      width: 100px;
      padding: 15px;
      background-color: white;
      border: 1px grey solid;
      border-radius: 10px;
      font-family: myFont;
      z-index: 1000;
      @media (max-width: 570px) {
        display: none;
      }
    }
    .info-container {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      display: grid;
      place-content: center;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 5000;
      font-family: myFont;

      @media (min-width: 570px) {
        display: none;
      }
      .info-info2 {
        font-size: 12px;
        min-height: fit-content;
        max-width: 300px;
        padding: 25px;
        background-color: white;
        border: 1px grey solid;
        border-radius: 10px;
        font-family: myFont;
        z-index: 1000;
      }
    }
    .info-button {
      height: fit-content;
      color: ${(props) => (props.showInfo ? `#15e554` : `#b7b7b7`)};
    }
  }
`;
