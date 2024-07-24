import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import inputs_parkinson from "../Arrays/Inputs_Parkinson";
import UserRatingComponent from "../Components/UserRatingComponent";
import ResultComponent from "../Components/ResultComponent";
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
import ParkinsonInfoComponent from "../Components/ParkinsonInfoComponent";

const Parkinson_Test = () => {
  const [showRating, setShowRating] = useState(false);
  const [counter, setCounter] = useState(1);
  const [apiResponse, setApiResponse] = useState("");
  const [showEmptyFieldsError, setShowEmptyFiledsError] = useState(false);

  const parkinson_inputs = useSelector((state) => state.parkinson_Inputs.value);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //==================================================================================
  const fetchApi = async () => {
    if (
      parkinson_inputs.MDVP_fo_HZ !== (0 || "") &&
      parkinson_inputs.MDVP_Fhi_HZ !== (0 || "") &&
      parkinson_inputs.MDVP_Flo_HZ !== (0 || "") &&
      parkinson_inputs.MDVP_Jitter_percentage !== (0 || "") &&
      parkinson_inputs.MDVP_Jitter_Abs !== (0 || "") &&
      parkinson_inputs.MDVP_RAP !== (0 || "") &&
      parkinson_inputs.MDVP_PPQ !== (0 || "") &&
      parkinson_inputs.Jitter_DDP !== (0 || "") &&
      parkinson_inputs.MDVP_Shimmer !== (0 || "") &&
      parkinson_inputs.MDVP_Shimmer_dB !== (0 || "") &&
      parkinson_inputs.Shimmer_APQ3 !== (0 || "") &&
      parkinson_inputs.Shimmer_APQ5 !== (0 || "") &&
      parkinson_inputs.MDVP_APQ !== (0 || "") &&
      parkinson_inputs.Shimmer_DDA !== (0 || "") &&
      parkinson_inputs.NHR !== (0 || "") &&
      parkinson_inputs.HNR !== (0 || "") &&
      parkinson_inputs.RPDE !== (0 || "") &&
      parkinson_inputs.DFA !== (0 || "") &&
      parkinson_inputs.spread1 !== (0 || "") &&
      parkinson_inputs.spread2 !== (0 || "") &&
      parkinson_inputs.D2 !== (0 || "") &&
      parkinson_inputs.PPE !== (0 || "")
    ) {
      try {
        const resposne = await fetch(process.env.REACT_APP_API_PARKINSON, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
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
          }),
        });
        const responseResult = await resposne.json();
        console.log(responseResult);
        setApiResponse(responseResult);
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
      } catch (err) {
        console.error(err);
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
          Parkinson <span>Diagnosis</span>
        </h1>
        {inputs_parkinson.map((element, index) => {
          return (
            <ParkinsonInfoComponent
              name={element.name}
              information={element.information}
              key={index}
              className={
                element.name === "MDVP_fo_HZ" || element.name === "MDVP_Fhi_HZ"
                  ? "float-inputs"
                  : ""
              }
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

export default Parkinson_Test;

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
        /* flex-direction: column; */
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
    fill: #ffd599;
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
    fill: #ffd599;
  }

  //==================================================================================

  .Container {
    background-color: white;
    margin-left: 70px;
    margin-right: 70px;
    padding: 50px 70px;
    border-radius: 15px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px 20px;
    font-family: myFont;
    z-index: 100;
    @media (max-width: 1000px) {
      margin-left: 20px;
      margin-right: 20px;
    }
    @media (max-width: 750px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 580px) {
      grid-template-columns: repeat(1, 1fr);
    }
    @media (max-width: 490px) {
      grid-template-columns: repeat(1, 1fr);
      padding: 50px 30px;
    }
    @media (max-width: 490px) and (min-width: 400px) {
      grid-template-columns: repeat(1, 1fr);
      padding: 50px 50px;
    }
    @media (max-width: 340px) {
      grid-template-columns: repeat(1, 1fr);
      /* padding: 50px 15px; */
      padding-top: 50px;
      padding-left: 15px;
      padding-right: 5px;
    }
    .predict-button {
      display: flex;
      align-items: center;
      justify-content: center;

      .button {
        margin-bottom: 10px;
        background-color: #ffc46f;
        width: fit-content;
        padding: 5px 40px;
        font-family: myFont;
      }
    }
    .TextField {
      margin-bottom: 15px;
      font-family: myFont;
    }
    h1 {
      text-align: center;
      margin-top: 20px;
      margin-bottom: 20px;
      color: grey;
      span {
        color: #ffc46f;
      }
    }
  }
`;
