import React, { useEffect } from "react";
import styled from "styled-components";
import HelpCards from "../Components/HelpCards";
import card_info from "../Arrays/CardsArray";
import faq_health from "../Arrays/FagHealth";
import Question from "../Components/Question";
import faq_first_aid from "../Arrays/FaqFirstAids";
import { useSelector } from "react-redux";
import helpDoctors from "../assets/images/HelpDoctors.png";

const FagPage = () => {
  const showHealth = useSelector((state) => state.fag_health_card_show.value);
  const showAid = useSelector((state) => state.fag_aid_card_show.value);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //==================================================================================
  return (
    <MainSection>
      <FirstSection>
        <div className="firstSection-container">
          <h1>Get Help</h1>
          <p>
            Our help page offers a comprehensive guide to common health issues
            and first aid emergencies. From proper wound care to recognizing
            symptoms of heart attacks, we provide answers to your urgent medical
            questions in an easy-to-understand format. Feel confident in
            handling medical emergencies with our informative resources.
          </p>
          <div className="get-help-image">
            <img src={helpDoctors} alt="Help Doctors" />
          </div>
          <div class="custom-shape-divider-bottom-1712580969">
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
        </div>
      </FirstSection>
      <SecondSection>
        <div className="cards-container">
          <div className="cards">
            {card_info.map((element, index) => {
              return (
                index !== 2 && (
                  <HelpCards
                    key={index}
                    icon={element.icon}
                    title={element.title}
                    description={element.description}
                  />
                )
              );
            })}
          </div>
        </div>
      </SecondSection>
      <ThirdSection>
        {showAid ? (
          faq_first_aid.map((element, index) => {
            return (
              <Question
                key={index}
                question={element.question}
                answer={element.answer}
              />
            );
          })
        ) : showHealth ? (
          faq_health.map((element, index) => {
            return (
              <Question
                key={index}
                question={element.question}
                answer={element.answer}
              />
            );
          })
        ) : (
          <></>
        )}
      </ThirdSection>
    </MainSection>
  );
};

export default FagPage;

const MainSection = styled.div``;

const FirstSection = styled.div`
  position: relative;
  background-color: rgba(35, 150, 250);
  height: 600px;
  display: grid;
  place-content: center;
  z-index: -2;
  .custom-shape-divider-bottom-1712580969 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
    z-index: -2;
  }

  .custom-shape-divider-bottom-1712580969 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 80px;
  }

  .custom-shape-divider-bottom-1712580969 .shape-fill {
    fill: #ffffff;
  }
  .firstSection-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 35px;
    min-height: 100px;

    .get-help-image {
      height: 250px;
      object-fit: contain;
      margin-top: 25px;
    }
    p {
      color: white;
      font-family: myFont;
      font-size: 20px;
      padding: 0px 150px;
      text-align: center;
      @media (max-width: 570px) {
        padding: 0px 200px;
      }
      @media (max-width: 570px) {
        font-size: 15px;
      }
      @media (max-width: 460px) {
        padding: 0px 300px;
      }
    }
    h1 {
      font-family: myFont;
      font-size: 60px;
      color: white;
      margin-top: 50px;
      @media (max-width: 460px) {
        font-size: 50px;
      }
      @media (max-width: 570px) {
        margin-top: 70px;
      }
    }
    .imput-class {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: white;
      border-radius: 10px;
      min-width: 650px;
      min-height: 42px;
      box-sizing: border-box;
      padding: 0px 25px;
      gap: 10px;
      input {
        outline: none;
        border: none;
        flex-grow: 1;
        color: grey !important;
      }
      .icon-help {
        font-size: 25px;
        color: grey;
      }
    }
  }
`;

const SecondSection = styled.div`
  padding: 50px 80px;
  font-family: myFont;
  color: rgba(35, 150, 250);
  margin-top: 150px;
  h1 {
    margin-bottom: 25px;
  }

  .cards-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .cards {
      flex: 0.3;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
      box-sizing: border-box;
      @media (max-width: 640px) {
        flex-wrap: wrap;
      }
    }

    .fag-container {
      flex: 0.7;
    }
  }
`;

const ThirdSection = styled.div`
  padding: 20px 80px;
`;
