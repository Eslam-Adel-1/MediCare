import React, { useEffect } from "react";
import styled from "styled-components";
import Heart_Attack_Circle from "../assets/images/Heart_Attack_Circle.png";
import Parkinson_Circle from "../assets/images/Parkinson_Circle.png";
import Breast_Cancer_Circle from "../assets/images/Breast_Cancer_Circle.png";
import Diabetes_Device_Circle from "../assets/images/Diabetes_Device_Circle.png";
import { useNavigate } from "react-router-dom";

const UserHomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainSection>
      <FirstSection></FirstSection>
      {/* //=================================================== */}

      <ThirdSection>
        <h1 className="h1-title">
          Diseases <span>Section</span>
        </h1>
        <p className="h1-title-description">
          Explore our comprehensive guide to all diseases, which covers
          symptoms, causes, risk factors, diagnosis, and treatment options.
          Learn more about this condition and how you can manage it effectively
          to improve your health and quality of life.
        </p>
        <div className="Circles-Container">
          <div
            className="Diabetes-circle-container"
            onClick={() => {
              navigate("/diagnosis/diabetes");
            }}
          >
            <img src={Diabetes_Device_Circle} alt="Diabetes Device Circle" />
            <h1>Diabetes</h1>
            <p>Check your diagnosis for diabetes </p>
          </div>
          <div
            className="Parkinson-circle-container"
            onClick={() => {
              navigate("/diagnosis/parkinson");
            }}
          >
            <img src={Parkinson_Circle} alt="Parkinson Circle" />
            <h1>Parkinson</h1>
            <p>Check your diagnosis for parkinson </p>
          </div>
          <div
            className="Heart-Attack-circle-container"
            onClick={() => {
              navigate("/diagnosis/heart_attack");
            }}
          >
            <img src={Heart_Attack_Circle} alt="Heart Attack Circle" />
            <h1>Heart Attack</h1>
            <p>Check your diagnosis for heart attack </p>
          </div>
          <div
            className="Breast-Cancer-circle-container"
            onClick={() => {
              navigate("/diagnosis/breast_cancer");
            }}
          >
            <img src={Breast_Cancer_Circle} alt="Breast Cancer Circle" />
            <h1>Breast Cancer</h1>
            <p>Check your diagnosis for breast cancer</p>
          </div>
        </div>
      </ThirdSection>
    </MainSection>
  );
};

export default UserHomePage;

const MainSection = styled.div`
  width: 100vw;
`;

const FirstSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 100px;
`;

const ThirdSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 65px;
  box-sizing: border-box;
  margin-bottom: 105px;
  font-family: myFont;

  .h1-title-description {
    color: grey;
    margin: 0px 200px;
    text-align: center;
    margin-bottom: 50px;
    line-height: 25px;
    max-width: 900px;
    min-width: 300px;
  }

  .h1-title {
    font-size: 50px;
    margin-bottom: 10px;
    letter-spacing: 1px;
    margin-left: 20px;
    margin-right: 20px;
    color: grey;
    text-align: center;
    span {
      color: rgb(35, 150, 250);
    }
  }
  .Circles-Container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
    margin-left: 20px;
    margin-right: 20px;

    .Diabetes-circle-container,
    .Parkinson-circle-container,
    .Heart-Attack-circle-container,
    .Breast-Cancer-circle-container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-family: myFont;
      gap: 15px;
      h1 {
        letter-spacing: 1px;
        cursor: pointer;
        color: rgb(35, 150, 250);
        font-size: 27px;
      }

      p {
        text-align: center;
        width: 200px;
        color: grey;
        cursor: pointer;
        font-size: 15px;
      }
    }

    .Diabetes-circle-container {
      h1 {
        color: black;
      }
    }

    .Heart-Attack-circle-container {
      h1 {
        color: #ff3333;
      }
    }

    .Parkinson-circle-container {
      h1 {
        color: #ffb54c;
      }
    }

    .Breast-Cancer-circle-container {
      h1 {
        color: #ff82a9;
      }
    }

    img {
      height: 150px;
      object-fit: contain;
      cursor: pointer;
    }
  }
`;
