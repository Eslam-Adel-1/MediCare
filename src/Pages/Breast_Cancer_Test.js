import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import input_breast_cancer from "../Arrays/Inputs_Breast_Cancer";
import BreastCancerInfoComponent from "../Components/BreastCancerInfoComponent";
import UserRatingComponent from "../Components/UserRatingComponent";
import ResultComponent from "../Components/ResultComponent";
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

const Diabetes_Test = () => {
  const [showRating, setShowRating] = useState(false);
  const [counter, setCounter] = useState(1);
  const [apiResponse, setApiResponse] = useState("");
  const [showEmptyFieldsError, setShowEmptyFiledsError] = useState(false);

  const breast_cancer_inputs = useSelector(
    (state) => state.breast_cancer_Inputs.value
  );
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //==================================================================================

  const fetchApi = async () => {
    if (
      breast_cancer_inputs.clump_thickness !== (0 || "") &&
      breast_cancer_inputs.uniform_cell_shape !== (0 || "") &&
      breast_cancer_inputs.uniform_cell_size !== (0 || "") &&
      breast_cancer_inputs.marginal_adhesion !== (0 || "") &&
      breast_cancer_inputs.single_epithelial_size !== (0 || "") &&
      breast_cancer_inputs.bare_nuclei !== (0 || "") &&
      breast_cancer_inputs.bland_chromatin !== (0 || "") &&
      breast_cancer_inputs.normal_nucleoli !== (0 || "") &&
      breast_cancer_inputs.mitoses !== (0 || "")
    ) {
      try {
        const resposne = await fetch(process.env.REACT_APP_API_BREAST_CANCER, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            clump_thickness: `${breast_cancer_inputs.clump_thickness}`,
            uniform_cell_size: `${breast_cancer_inputs.uniform_cell_size}`,
            uniform_cell_shape: `${breast_cancer_inputs.uniform_cell_shape}`,
            marginal_adhesion: `${breast_cancer_inputs.marginal_adhesion}`,
            single_epithelial_size: `${breast_cancer_inputs.single_epithelial_size}`,
            bare_nuclei: `${breast_cancer_inputs.bare_nuclei}`,
            bland_chromatin: `${breast_cancer_inputs.bland_chromatin}`,
            normal_nucleoli: `${breast_cancer_inputs.normal_nucleoli}`,
            mitoses: `${breast_cancer_inputs.mitoses}`,
          }),
        });
        const responseResult = await resposne.json();
        console.log(responseResult);
        setApiResponse(responseResult);
        dispatch(changeBare_nuclei(""));
        dispatch(changeBland_chromatin(""));
        dispatch(changeClump_thickness(""));
        dispatch(changeMarginal_adhesion(""));
        dispatch(changeMitoses(""));
        dispatch(changeNormal_nucleoli(""));
        dispatch(changeSingle_epithelial_size(""));
        dispatch(changeUniform_cell_shape(""));
        dispatch(changeUniform_cell_size(""));
      } catch (err) {
        console.console(err);
      }
    } else {
      setShowEmptyFiledsError(!showEmptyFieldsError);
    }
  };

  //==================================================================================

  useEffect(() => {
    const checkCounter = () => {
      if (counter > 1) {
        setTimeout(() => {
          setShowRating(!showRating);
        }, 1000);
      } else {
        return;
      }
    };
    checkCounter();
  }, [apiResponse]);

  return (
    <MainSection>
      {showEmptyFieldsError ? (
        <div className="Empty-Fields">
          <div className="Empty-Fields-Container">
            <h1> Empty Fields </h1>
            <p>Please Fill All The Empty Fileds </p>
            <Button
              className="button"
              variant="contained"
              onClick={() => {
                setShowEmptyFiledsError(!showEmptyFieldsError);
              }}
            >
              Close
            </Button>
          </div>
        </div>
      ) : (
        <></>
      )}
      {apiResponse.length !== 0 ? (
        <div className="result">
          <div className="result-container">
            <ResultComponent
              counter={counter}
              setCounter={setCounter}
              setApiResponse={setApiResponse}
              apiResponse={apiResponse}
            />
          </div>
        </div>
      ) : showRating ? (
        <div className="result">
          <div className="result-container">
            <UserRatingComponent
              setShowRating={setShowRating}
              showRating={showRating}
            />
          </div>
        </div>
      ) : (
        <></>
      )}

      {/* //============================================================== */}

      <div className="Container">
        <h1>
          Breast Cancer <span>Diagnosis</span>
        </h1>
        {input_breast_cancer.map((element, index) => {
          return (
            <BreastCancerInfoComponent
              name={element.name}
              information={element.information}
              key={index}
            />
          );
        })}
        <div className="predict-button">
          <Button
            className="button"
            variant="contained"
            onClick={() => {
              fetchApi();
            }}
          >
            Predict
          </Button>
        </div>
      </div>
      <div class="custom-shape-divider-bottom-1712619373">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div class="custom-shape-divider-top-1712619556">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </MainSection>
  );
};

export default Diabetes_Test;

const MainSection = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  display: grid;
  place-content: center;
  background-color: rgb(35, 150, 250);
  overflow: hidden;
  padding-top: 50px;
  padding-bottom: 50px;

  .Empty-Fields {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: grid;
    place-content: center;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 10000;
    .Empty-Fields-Container {
      max-width: 400px;
      padding: 50px;
      border: 1px solid black;
      border-radius: 15px;
      background-color: white;
      font-family: myFont;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 15px;
      h1 {
        color: red;
        text-align: center;
      }
      p {
        color: grey;
        text-align: center;
        margin-top: -5px;
        margin-bottom: 5px;
      }
    }
  }

  .result {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: grid;
    place-content: center;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 5000;
    font-family: myFont;

    .result-container {
      background-color: white;
      gap: 15px;
      padding: 40px;
      border: 2px rgb(35, 150, 250) solid;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        .bad-result {
          color: #e34234;
          margin-bottom: 10px;
          text-transform: uppercase;
        }
        .good-result {
          color: #02ec88;
          margin-bottom: 10px;
          text-transform: uppercase;
        }
        p {
          color: grey;
          word-spacing: 2px;
        }
      }
      img {
        height: 125px;
        object-fit: contain;
      }
      h2 {
        span {
          color: green;
        }
      }
    }
  }

  .custom-shape-divider-bottom-1712619373 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-bottom-1712619373 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 231px;
    transform: rotateY(180deg);
  }

  .custom-shape-divider-bottom-1712619373 .shape-fill {
    fill: #ffa7c2;
  }
  //==================================================================================

  .custom-shape-divider-top-1712619556 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-top-1712619556 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 500px;
    transform: rotateY(180deg);
  }

  .custom-shape-divider-top-1712619556 .shape-fill {
    fill: #ffa7c2;
  }

  //==================================================================================

  .Container {
    background-color: white;
    margin-left: 20px;
    margin-right: 20px;
    padding: 50px 70px;
    border-radius: 15px;
    display: grid;
    place-content: center;
    font-family: myFont;
    z-index: 100;
    @media (max-width: 520px) {
      padding: 50px 40px;
    }
    @media (max-width: 350px) {
      padding: 50px 20px;
    }
    .predict-button {
      display: flex;
      align-items: center;
      justify-content: center;
      .button {
        margin-bottom: 10px;
        background-color: #ff82a9;
        font-family: myFont;
        width: fit-content;
        padding: 5px 40px;
      }
    }
    .TextFieldNumbers {
      margin-bottom: 15px;
      font-family: myFont;
    }
    h1 {
      text-align: center;
      margin-top: 20px;
      margin-bottom: 20px;
      span {
        color: #ff82a9;
      }
    }
  }
`;