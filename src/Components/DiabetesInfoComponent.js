import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";
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
} from "../features/diabetes_Inputs/diabetes_InputsSlice";

const DiabetesInfoComponent = ({ name, information }) => {
  const diabetes_inputs = useSelector((state) => state.diabetes_Inputs.value);
  const [showInfo, setShowInfo] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (name === "Pregnancies") {
      dispatch(changePregnancies(Math.floor(e.target.value)));
    } else if (name === "Glucose") {
      dispatch(changeGlucose(Math.floor(e.target.value)));
    } else if (name === "BloodPressure") {
      dispatch(changeBloodPressure(Math.floor(e.target.value)));
    } else if (name === "SkinThickness") {
      dispatch(changeSkinThickness(Math.floor(e.target.value)));
    } else if (name === "Insulin") {
      dispatch(changeInsulin(Math.floor(e.target.value)));
    } else if (name === "BMI") {
      dispatch(changeBMI(Math.floor(e.target.value)));
    } else if (name === "DiabetesPedigreeFunction") {
      dispatch(changeDiabetesPedigreeFunction(Math.floor(e.target.value)));
    } else if (name === "Age") {
      dispatch(changeAge(Math.floor(e.target.value)));
    }
  };

  const handleChange2 = () => {
    if (diabetes_inputs.Pregnancies > 999) {
      dispatch(changePregnancies(999));
    } else if (diabetes_inputs.Glucose > 999) {
      dispatch(changeGlucose(999));
    } else if (diabetes_inputs.BloodPressure > 999) {
      dispatch(changeBloodPressure(999));
    } else if (diabetes_inputs.SkinThickness > 999) {
      dispatch(changeSkinThickness(999));
    } else if (diabetes_inputs.Insulin > 999) {
      dispatch(changeInsulin(999));
    } else if (diabetes_inputs.BMI > 999) {
      dispatch(changeBMI(999));
    } else if (diabetes_inputs.DiabetesPedigreeFunction > 999) {
      dispatch(changeDiabetesPedigreeFunction(999));
    } else if (diabetes_inputs.Age > 100) {
      dispatch(changeAge(100));
    }
  };

  useEffect(() => {
    handleChange2();
  }, [diabetes_inputs]);

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
            name === "Pregnancies"
              ? diabetes_inputs.Pregnancies
              : name === "Glucose"
              ? diabetes_inputs.Glucose
              : name === "BloodPressure"
              ? diabetes_inputs.BloodPressure
              : name === "SkinThickness"
              ? diabetes_inputs.SkinThickness
              : name === "Insulin"
              ? diabetes_inputs.Insulin
              : name === "BMI"
              ? diabetes_inputs.BMI
              : name === "DiabetesPedigreeFunction"
              ? diabetes_inputs.DiabetesPedigreeFunction
              : name === "Age"
              ? diabetes_inputs.Age
              : ""
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

export default DiabetesInfoComponent;

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
