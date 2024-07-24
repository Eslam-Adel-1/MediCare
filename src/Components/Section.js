import React from "react";
import styled from "styled-components";

const Section = ({ image, title, description, number }) => {
  return (
    <MainSection number={number} title={title}>
      <div className="image-title">
        <img src={image} alt="Doctors" />
        <div className="title-text">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
      <div class="wave">
        {title !== "You can do a lot with us" ? (
          <div class="custom-shape-divider-top-1712756670">
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
        ) : (
          <></>
        )}
        {title !== "Medi ChatBot" ? (
          <div class="custom-shape-divider-bottom-1712756750">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        ) : (
          <></>
        )}
      </div>
    </MainSection>
  );
};

export default Section;

const MainSection = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => (props.number === 2 ? "row-reverse" : "")};
  flex-direction: column;
  font-family: myFont;
  gap: 2px;
  background-color: ${(props) =>
    props.number === 2 ? "rgba(35,150,250,0.8)" : ""};
  padding: 50px 40px 70px 40px;

  @media (max-width: 770px) {
    box-sizing: border-box;
    padding: 50px 100px 70px 100px;
  }
  .button {
    font-family: myFont;
    padding: 10px 20px;
    margin-top: -20px;
    background-color: ${(props) =>
      props.number === 2 ? "white" : "rgb(35,150,250)"};
    color: ${(props) => (props.number === 1 ? "white" : "rgb(35,150,250)")};
    word-spacing: 4px;

    &:hover {
      background-color: ${(props) =>
        props.number === 2 ? "white" : "rgb(35,150,250)"};
      color: ${(props) => (props.number === 1 ? "white" : "rgb(35,150,250)")};
    }
  }

  img {
    height: ${(props) =>
      props.title === "Heart Attack" ||
      "Parkinson" ||
      "Breast Cancer" ||
      "Diabetes"
        ? "200px"
        : "320px"};
    object-fit: contain;
    z-index: 20;
    padding: 25px 0px;
  }
  .image-title {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
    .title-text {
      max-width: 500px;
      h1 {
        color: ${(props) =>
          props.number === 1 ? "rgba(35,150,250,1)" : "white"};
        margin-bottom: 15px;
      }
      p {
        color: ${(props) => (props.number === 1 ? "grey" : "white")};
      }
    }
  }

  //======================================================================
  .custom-shape-divider-top-1712756670 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-top-1712756670 svg {
    position: relative;
    display: block;
    width: calc(119% + 1.3px);
    height: 44px;
    transform: rotateY(180deg);
  }

  .custom-shape-divider-top-1712756670 .shape-fill {
    fill: #ffffff;
  }
  //======================================================================
  .custom-shape-divider-bottom-1712756750 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-bottom-1712756750 svg {
    position: relative;
    display: block;
    width: calc(119% + 1.3px);
    height: 44px;
    transform: rotateY(180deg);
  }

  .custom-shape-divider-bottom-1712756750 .shape-fill {
    fill: #ffffff;
  }
`;
