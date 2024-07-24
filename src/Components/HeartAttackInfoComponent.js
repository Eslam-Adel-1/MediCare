import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";
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
} from "../features/heart_attack_Inputs/heart_attack_InputsSlice";

const HeartAttackInfoComponent = ({ name, information }) => {
  const heart_attack_inputs = useSelector(
    (state) => state.heart_attack_Inputs.value
  );
  const [showInfo, setShowInfo] = useState(false);
  const dispatch = useDispatch();

  console.log(heart_attack_inputs);

  const handleChange = (e) => {
    if (name === "Age") {
      dispatch(changeAge(Math.floor(e.target.value)));
    } else if (name === "Sex") {
      dispatch(changeSex(Math.floor(e.target.value)));
    } else if (name === "Cp") {
      dispatch(changeCp(Math.floor(e.target.value)));
    } else if (name === "Trestbps") {
      dispatch(changeTrestbps(Math.floor(e.target.value)));
    } else if (name === "Chol") {
      dispatch(changeChol(Math.floor(e.target.value)));
    } else if (name === "Fbs") {
      dispatch(changeFbs(Math.floor(e.target.value)));
    } else if (name === "Restecg") {
      dispatch(changeRestecg(Math.floor(e.target.value)));
    } else if (name === "Thalach") {
      dispatch(changeThalach(Math.floor(e.target.value)));
    } else if (name === "Exang") {
      dispatch(changeExang(Math.floor(e.target.value)));
    } else if (name === "Oldpeak") {
      dispatch(changeOldpeak(Math.floor(e.target.value)));
    } else if (name === "Slope") {
      dispatch(changeSlope(Math.floor(e.target.value)));
    } else if (name === "Ca") {
      dispatch(changeCa(Math.floor(e.target.value)));
    } else if (name === "Thal") {
      dispatch(changeThal(Math.floor(e.target.value)));
    }
  };

  const handleChange2 = () => {
    if (heart_attack_inputs.Age > 100) {
      dispatch(changeAge(100));
    } else if (heart_attack_inputs.Sex > 1 || heart_attack_inputs.Age.Sex < 0) {
      dispatch(changeSex(1));
    } else if (heart_attack_inputs.Cp > 999) {
      dispatch(changeCp(999));
    } else if (heart_attack_inputs.Trestbps > 999) {
      dispatch(changeTrestbps(999));
    } else if (heart_attack_inputs.Chol > 999) {
      dispatch(changeChol(999));
    } else if (heart_attack_inputs.Fbs > 999) {
      dispatch(changeFbs(999));
    } else if (heart_attack_inputs.Restecg > 999) {
      dispatch(changeRestecg(999));
    } else if (heart_attack_inputs.Thalach > 999) {
      dispatch(changeThalach(999));
    } else if (heart_attack_inputs.Exang > 999) {
      dispatch(changeExang(999));
    } else if (heart_attack_inputs.Oldpeak > 999) {
      dispatch(changeOldpeak(999));
    } else if (heart_attack_inputs.Slope > 999) {
      dispatch(changeSlope(999));
    } else if (heart_attack_inputs.Ca > 999) {
      dispatch(changeCa(999));
    } else if (heart_attack_inputs.Thal > 999) {
      dispatch(changeThal(999));
    }
  };

  useEffect(() => {
    handleChange2();
  }, [heart_attack_inputs]);

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
            name === "Age" ? (
              heart_attack_inputs.Age
            ) : name === "Sex" ? (
              heart_attack_inputs.Sex
            ) : name === "Cp" ? (
              heart_attack_inputs.Cp
            ) : name === "Trestbps" ? (
              heart_attack_inputs.Trestbps
            ) : name === "Chol" ? (
              heart_attack_inputs.Chol
            ) : name === "Fbs" ? (
              heart_attack_inputs.Fbs
            ) : name === "Restecg" ? (
              heart_attack_inputs.Restecg
            ) : name === "Thalach" ? (
              heart_attack_inputs.Thalach
            ) : name === "Exang" ? (
              heart_attack_inputs.Exang
            ) : name === "Oldpeak" ? (
              heart_attack_inputs.Oldpeak
            ) : name === "Slope" ? (
              heart_attack_inputs.Slope
            ) : name === "Ca" ? (
              heart_attack_inputs.Ca
            ) : name === "Thal" ? (
              heart_attack_inputs.Thal
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

export default HeartAttackInfoComponent;

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
