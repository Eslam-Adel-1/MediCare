import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";
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
} from "../features/breast_cancer_Inputs/breast_cancer_InputsSlice";

const BreastCancerInfoComponent = ({ name, information }) => {
  const breast_cancer_inputs = useSelector(
    (state) => state.breast_cancer_Inputs.value
  );
  const [showInfo, setShowInfo] = useState(false);
  const dispatch = useDispatch();

  console.log(breast_cancer_inputs);

  const handleChange = (e) => {
    if (name === "clump_thickness") {
      dispatch(changeClump_thickness(Math.floor(e.target.value)));
    } else if (name === "uniform_cell_size") {
      dispatch(changeUniform_cell_size(Math.floor(e.target.value)));
    } else if (name === "uniform_cell_shape") {
      dispatch(changeUniform_cell_shape(Math.floor(e.target.value)));
    } else if (name === "marginal_adhesion") {
      dispatch(changeMarginal_adhesion(Math.floor(e.target.value)));
    } else if (name === "single_epithelial_size") {
      dispatch(changeSingle_epithelial_size(Math.floor(e.target.value)));
    } else if (name === "bare_nuclei") {
      dispatch(changeBare_nuclei(Math.floor(e.target.value)));
    } else if (name === "bland_chromatin") {
      dispatch(changeBland_chromatin(Math.floor(e.target.value)));
    } else if (name === "normal_nucleoli") {
      dispatch(changeNormal_nucleoli(Math.floor(e.target.value)));
    } else if (name === "mitoses") {
      dispatch(changeMitoses(Math.floor(e.target.value)));
    }
  };
  const handleChange2 = () => {
    if (breast_cancer_inputs.clump_thickness > 999) {
      dispatch(changeClump_thickness(999));
    } else if (breast_cancer_inputs.uniform_cell_size > 999) {
      dispatch(changeUniform_cell_size(999));
    } else if (breast_cancer_inputs.uniform_cell_shape > 999) {
      dispatch(changeUniform_cell_shape(999));
    } else if (breast_cancer_inputs.marginal_adhesion > 999) {
      dispatch(changeMarginal_adhesion(999));
    } else if (breast_cancer_inputs.single_epithelial_size > 999) {
      dispatch(changeSingle_epithelial_size(999));
    } else if (breast_cancer_inputs.bare_nuclei > 999) {
      dispatch(changeBare_nuclei(999));
    } else if (breast_cancer_inputs.bland_chromatin > 999) {
      dispatch(changeBland_chromatin(999));
    } else if (breast_cancer_inputs.normal_nucleoli > 999) {
      dispatch(changeNormal_nucleoli(999));
    } else if (breast_cancer_inputs.mitoses > 999) {
      dispatch(changeMitoses(999));
    }
  };

  useEffect(() => {
    handleChange2();
  }, [breast_cancer_inputs]);

  return (
    <MainSection showInfo={showInfo}>
      <div className="input-container">
        <TextField
          className="TextFieldNumbers"
          label={name}
          id="fullwidth"
          defaultValue=""
          size="small"
          type="number"
          min="0"
          max="3"
          step="1"
          onInput={() => {
            handleChange2();
          }}
          onChange={(e) => handleChange(e)}
          value={
            name === "clump_thickness" ? (
              breast_cancer_inputs.clump_thickness
            ) : name === "uniform_cell_shape" ? (
              breast_cancer_inputs.uniform_cell_shape
            ) : name === "uniform_cell_size" ? (
              breast_cancer_inputs.uniform_cell_size
            ) : name === "marginal_adhesion" ? (
              breast_cancer_inputs.marginal_adhesion
            ) : name === "single_epithelial_size" ? (
              breast_cancer_inputs.single_epithelial_size
            ) : name === "bare_nuclei" ? (
              breast_cancer_inputs.bare_nuclei
            ) : name === "bland_chromatin" ? (
              breast_cancer_inputs.bland_chromatin
            ) : name === "normal_nucleoli" ? (
              breast_cancer_inputs.normal_nucleoli
            ) : name === "mitoses" ? (
              breast_cancer_inputs.mitoses
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

export default BreastCancerInfoComponent;

const MainSection = styled.div`
  height: fit-content;
  align-self: center;
  .input-container {
    position: relative;
    display: flex;
    justify-content: center;
    .TextFieldNumbers {
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
