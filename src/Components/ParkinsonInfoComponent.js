import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";
import { useSelector } from "react-redux";
import { HandleChangeParkinson } from "../customHooks/parkinson/ParkinsonHooks";

const ParkinsonInfoComponent = ({ name, information }) => {
  const parkinson_inputs = useSelector((state) => state.parkinson_Inputs.value);
  const [showInfo, setShowInfo] = useState(false);
  const { validationFunction, validationFunction2 } = HandleChangeParkinson();

  //======================================================================

  const handleChange = (e) => {
    const handleChangeEvent = validationFunction(name);
    handleChangeEvent.forEach((item) => {
      if (item.condition) {
        item.action(e);
      }
    });
  };

  const handleChange2 = () => {
    const handleChangeEvent = validationFunction2();
    handleChangeEvent.forEach((item) => {
      if (item.condition) {
        item.action();
      }
    });
  };

  const checkValue = () => {
    const changeValue = validationFunction(name);
    for (let i = 0; i < changeValue.length; i++) {
      if (changeValue[i]?.condition) {
        return changeValue[i]?.action2;
      }
    }
  };

  useEffect(() => {
    handleChange2();
  }, [parkinson_inputs]);

  //======================================================================

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
          value={checkValue()}
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

//======================================================================

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

//======================================================================
