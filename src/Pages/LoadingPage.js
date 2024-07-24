import React from "react";
import styled from "styled-components";
import Logo from "../assets/images/logo2.png";

const LoadingPage = () => {
  return (
    <MainSection>
      <div className="SectionOne">
        <img src={Logo} alt="logo" />
        <h1>
          Medi<span>Care</span>
        </h1>
      </div>
      <div class="loader">
        <span class="loader__element"></span>
        <span class="loader__element"></span>
        <span class="loader__element"></span>
      </div>
    </MainSection>
  );
};

export default LoadingPage;

const MainSection = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
  display: grid;
  place-content: center;
  .BoxLoading {
    margin-left: auto;
    margin-top: 20px;
  }
  .SectionOne {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    font-family: myFont;
    .LoadingBar {
      background-color: black;
      z-index: 1000;
    }

    img {
      height: 55px;
      object-fit: contain;
    }
    h1 {
      color: rgb(35, 150, 250);
    }
  }

  .loader {
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
  }

  .loader__element {
    border-radius: 100%;
    border: 3px solid rgb(35, 150, 250);
    margin: calc(5px * 2);
  }

  .loader__element:nth-child(1) {
    animation: preloader 0.6s ease-in-out alternate infinite;
  }
  .loader__element:nth-child(2) {
    animation: preloader 0.6s ease-in-out alternate 0.2s infinite;
  }

  .loader__element:nth-child(3) {
    animation: preloader 0.6s ease-in-out alternate 0.4s infinite;
  }

  @keyframes preloader {
    100% {
      transform: scale(2);
    }
  }
`;
