import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "../Components/Card";
import doctorMain from "../assets/images/doctorMain.png";
import Button from "@mui/material/Button";
import card_info from "../Arrays/CardsArray";
import Section from "../Components/Section";
import section_info from "../Arrays/SectionArray";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Downloads from "../Components/Downloads";
import Footer from "../Components/Footer";

const HomePage = ({ showSideBar }) => {
  const user = useSelector((state) => state.user.value);
  const show_app = useSelector((state) => state.show_app.value);
  const sectionRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainSection showSideBar={showSideBar}>
      {show_app && <Downloads />}
      <FirstSection>
        <Left>
          <div className="left-container">
            <h1>
              Welcome To <span>MediCare</span>
            </h1>
            <p>
              Hi .. Welcome to MediCare Website the future of medical treatment
              .
            </p>
            {!user ? (
              <div className="LeftSectionButtons">
                <Button
                  variant="text"
                  className="nav-buttons nav-button1"
                  onClick={() => {
                    sectionRef.current.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Learn More
                </Button>
                <Button
                  className="nav-buttons nav-buttons2"
                  variant="contained"
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Join Us
                </Button>
              </div>
            ) : (
              <div className="LeftSectionButtons">
                <Button
                  variant="text"
                  className="nav-buttons nav-button1"
                  onClick={() => {
                    sectionRef.current.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Learn More
                </Button>
              </div>
            )}
          </div>
        </Left>
        <Right>
          <img src={doctorMain} alt="DoctorMain" />
        </Right>
      </FirstSection>
      {/* //=================================================== */}
      <SecondSection>
        {card_info.map((element, index) => {
          return (
            <Card
              key={index}
              icon={element.icon}
              title={element.title}
              description={element.description}
            />
          );
        })}
      </SecondSection>
      <ThirdSection ref={sectionRef}>
        {section_info.map((element, index) => {
          return (
            <Section
              key={index}
              image={element.image}
              title={element.title}
              description={element.description}
              number={element.number}
            />
          );
        })}
      </ThirdSection>
      <Section_Four>
        <div className="footer-container">
          <Footer />
        </div>
        <div class="custom-shape-divider-top-1712724646">
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
      </Section_Four>
    </MainSection>
  );
};

export default HomePage;

const MainSection = styled.div`
  overflow: hidden;
  .appContainer {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgb(0, 0, 0, 0.3);
    display: grid;
    place-content: center;
    z-index: 898989;
    font-family: myFont;
    .AppCont {
      position: relative;
      padding: 25px;
      min-height: 400px;
      margin: 50px;
      background-color: white;
      border-radius: 30px 10px 30px 10px;
      border: 2px solid rgb(35, 150, 250);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 15px;
      box-sizing: border-box;
      @media (max-width: 900px) {
        overflow-y: scroll;
      }
      @media (max-width: 600px) {
        margin: 20px;
      }
      @media (max-width: 300px) {
        margin: 10px;
      }
      @media (max-width: 720px) {
        gap: 30px;
      }

      .icon {
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 40px;
        cursor: pointer;
      }
      .theAppContainer {
        .downloads {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 25px;
          img {
            height: 40px;
            object-fit: contain;
            cursor: pointer;
            transition: all ease 250ms;

            &:hover {
              transform: scale(105%);
            }
          }
        }
      }
      .qr-code {
        height: 200px;
      }
      img {
        height: 350px;
        object-fit: contain;
      }
      h1 {
        color: rgb(35, 150, 250);
        margin-bottom: 20px;
      }
      p {
        color: grey;
        max-width: 400px;
      }
    }
  }
`;

const FirstSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 100px;
  @media (max-width: 930px) {
    flex-wrap: wrap;
  }
`;

const Right = styled.div`
  flex: 0.5;
  img {
    max-height: 440px;
    object-fit: contain;
  }
`;

const Left = styled.div`
  flex: 0.5;
  font-family: myFont;
  display: flex;
  align-items: end;
  justify-content: end;
  flex-direction: column;
  padding-bottom: 50px;

  .left-container {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 35px;

    h1 {
      @media (max-width: 260px) {
        font-size: 12px;
      }
    }

    @media (max-width: 930px) {
      margin-top: 40px;
      margin-bottom: -30px;
    }
    .LeftSectionButtons {
      .nav-buttons {
        width: 40%;
        font-family: myFont;
      }
      .nav-button1 {
        border: 1px rgba(35, 150, 250) solid;
        margin-right: 15px;
      }

      .nav-buttons2 {
        background-color: rgba(35, 150, 250);
      }
    }
    p {
      color: grey;
    }

    h1 {
      font-size: 28px;
      span {
        color: rgba(35, 150, 250);
        font-size: 50px;
      }
    }
  }
`;

const SecondSection = styled.div`
  margin-top: -40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-bottom: 25px;
  box-sizing: border-box;
  padding: 0px 100px;
  @media (max-width: 744px) {
    flex-wrap: wrap;
  }
  @media (max-width: 900px) {
    padding: 0px 40px;
  }
`;

const ThirdSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
  box-sizing: border-box;
`;

const Section_Four = styled.div`
  position: relative;
  min-height: 320px;
  display: grid;
  place-content: center;
  padding-top: 15px;
  background: radial-gradient(
    circle,
    rgba(35, 150, 250, 1) 0%,
    rgba(35, 150, 250, 1) 48%,
    rgba(30, 30, 30, 1) 100%
  );
  @media (max-width: 798px) {
    padding: 0px 50px;
    padding-top: 70px;
    padding-bottom: 25px;
  }
  @media (max-width: 500px) {
    padding: 0px 50px;
    padding-top: 70px;
    padding-bottom: 25px;
  }

  .custom-shape-divider-top-1712724646 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-top-1712724646 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 46px;
    transform: rotateY(180deg);
  }

  .custom-shape-divider-top-1712724646 .shape-fill {
    fill: #ffffff;
  }
  //=============================================================
  .footer-container {
  }
`;
