import React, { useEffect } from "react";
import styled from "styled-components";
import FemaleDoctorParkinson from "../assets/images/FemaleDoctorParkinson.png";
import ReactPlayer from "react-player";
import Button from "@mui/material/Button";
import ParkinsonLogo from "../assets/images/ParkinsonLogo.png";
import { useNavigate } from "react-router-dom";
import DiseasesPagesInfo from "../Components/DiseasesPagesInfo";

const DiabetesPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainSection>
      <FirstSection>
        <div className="title-description">
          <h1>Parkinson Overview</h1>
          <p>
            Parkinson mellitus refers to a group of diseases that affect how the
            body uses blood sugar (glucose). Glucose is an important source of
            energy for the cells that make up the muscles and tissues. It's also
            the brain's main source of fuel.
          </p>
        </div>
        <img src={FemaleDoctorParkinson} alt="Female Doctor" />
        <div class="custom-shape-divider-bottom-1712597414">
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
      </FirstSection>
      <SecondSection>
        <h1>
          Quick overview on <span>Parkinson</span>
        </h1>
        <div className="video-container">
          <ReactPlayer
            className="Video"
            url="https://www.youtube.com/watch?v=ckn9zybpYZ8"
            width="100%"
            height="100%"
          />
        </div>
      </SecondSection>
      <DiseasesPagesInfo path="/diagnosis/parkinson/test" />
      <SectionEight>
        <div className="footer-container">
          <img src={ParkinsonLogo} alt="diabetes-device" />
          <div className="footer-text">
            <h1>Start The Diagnosis</h1>
            <p>
              Take our quick and easy diagnostic test to better understand your
              symptoms and receive personalized recommendations for treatment.
            </p>
            <Button
              className="test-button"
              variant="outlined"
              onClick={() => {
                navigate("/diagnosis/parkinson/test");
              }}
            >
              Start The Diagnosis
            </Button>
          </div>
        </div>
        <div class="custom-shape-divider-top-1712606964">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </SectionEight>
    </MainSection>
  );
};

export default DiabetesPage;

const MainSection = styled.div``;

const FirstSection = styled.div`
  position: relative;
  padding: 0px 100px;
  min-height: 420px;
  background: linear-gradient(
    265deg,
    rgba(255, 187, 89, 1) 0%,
    rgba(35, 150, 250, 1) 26%,
    rgba(35, 150, 250, 1) 51%,
    rgba(35, 150, 250, 1) 71%,
    rgba(255, 187, 89, 1) 100%
  );

  display: flex;
  align-items: center;
  justify-content: space-around;
  /* gap: 10px; */
  @media (max-width: 885px) {
    flex-wrap: wrap;
  }
  @media (max-width: 580px) {
    flex-wrap: wrap;
    padding: 0px 40px;
  }
  @media (max-width: 425px) {
    flex-wrap: wrap;
    padding: 0px 30px;
  }
  //===================================================

  .custom-shape-divider-bottom-1712597414 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-bottom-1712597414 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 120px;
    transform: rotateY(180deg);
  }

  .custom-shape-divider-bottom-1712597414 .shape-fill {
    fill: #ffffff;
  }
  //=============================================================

  .custom-shape-divider-bottom-1712590839 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-bottom-1712590839 svg {
    position: relative;
    display: block;
    width: calc(203% + 1.3px);
    height: 120px;
    transform: rotateY(180deg);
  }

  .custom-shape-divider-bottom-1712590839 .shape-fill {
    fill: #ffffff;
  }
  .title-description {
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;
    font-family: myFont;
    gap: 20px;
    @media (max-width: 885px) {
      margin-top: 45px;
      margin-bottom: 30px;
    }
    h1 {
      color: white;
      letter-spacing: 2px;
    }
    p {
      text-align: start;
      color: white;
      letter-spacing: 1px;
      max-width: 650px;
    }
  }
  img {
    height: 340px;
    @media (max-width: 400px) {
      height: 250px;
    }
  }
`;

const SecondSection = styled.div`
  display: grid;
  place-content: center;
  color: grey;
  font-family: myFont;
  h1 {
    text-align: center;
    margin-bottom: 10px;
    letter-spacing: 2px;
    margin-left: 20px;
    margin-right: 20px;
    @media (max-width: 460px) {
      font-size: 25px;
    }

    span {
      color: #ffbb59;
    }
  }
  .video-container {
    min-height: 360px;
    min-width: 200px;
    border-radius: 20px;
    overflow: hidden;
    margin: 10px 20px 40px 20px;

    @media (max-width: 2560px) and (min-width: 950px) {
      height: 450px;
      width: 850px;
    }

    @media (max-width: 950px) and (min-width: 770px) {
      height: 450px;
      width: 750px;
    }

    @media (max-width: 770px) and (min-width: 650px) {
      height: 450px;
      width: 650px;
    }

    .custom-shape-divider-bottom-1712590839 {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
      line-height: 0;
      transform: rotate(180deg);
    }

    .custom-shape-divider-bottom-1712590839 svg {
      position: relative;
      display: block;
      width: calc(203% + 1.3px);
      height: 149px;
      transform: rotateY(180deg);
    }

    .custom-shape-divider-bottom-1712590839 .shape-fill {
      fill: #ffffff;
    }
  }

  .Video {
  }
`;

const SectionEight = styled.div`
  position: relative;
  padding: 0px 100px;
  height: 320px;
  display: grid;
  place-content: center;
  padding-top: 50px;
  @media (max-width: 900px) and (min-width: 800px) {
    padding-top: 100px;
  }
  @media (max-width: 640px) {
    padding: 0px 30px;
  }
  background: radial-gradient(
    circle,
    rgba(35, 150, 250, 1) 0%,
    rgba(35, 150, 250, 1) 48%,
    rgba(255, 187, 89, 1) 100%
  );

  .custom-shape-divider-top-1712606964 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .custom-shape-divider-top-1712606964 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 121px;
  }

  .custom-shape-divider-top-1712606964 .shape-fill {
    fill: #ffffff;
  }
  //=============================================================
  .footer-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;
    @media (max-width: 640px) {
      padding-top: 50px;
    }
    @media (max-width: 450px) {
      padding-top: 100px;
    }
    img {
      height: 200px;
      @media (max-width: 450px) {
        display: none;
      }
    }
  }
  .footer-text {
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;
    font-family: myFont;
    gap: 20px;
    padding-right: 50px;

    @media (max-width: 450px) {
      align-items: center;
      justify-content: center;
    }
    .test-button {
      border-color: white;
      color: white;
      font-family: myFont;
    }
    h1 {
      color: white;
      letter-spacing: 2px;
      @media (max-width: 450px) {
        text-align: center;
      }
    }
    p {
      text-align: start;
      color: white;
      letter-spacing: 2px;
      @media (max-width: 800px) {
        display: none;
      }
    }
  }
`;
