import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styled from "styled-components";

const Question = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  //================================================

  return (
    <MainSection showAnswer={showAnswer}>
      <div className="title" onClick={() => setShowAnswer(!showAnswer)}>
        <ArrowForwardIosIcon className="icon-title" />
        <h2>{question}</h2>
      </div>
      <div className="description">
        <p>{answer}</p>
      </div>
    </MainSection>
  );
};

export default Question;

//================================================

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  font-family: myFont;
  margin-bottom: 20px;

  .title {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    color: rgba(35, 150, 250);
    border-bottom: 1px solid grey;
    padding-bottom: 12px;
    cursor: pointer;
    h2 {
      margin-left: 15px;
      @media (max-width: 400px) {
        font-size: 20px;
      }
    }

    .icon-title {
      transform: ${(props) =>
        props.showAnswer ? `rotate(90deg)` : `rotate(0deg)`};
      transition: all ease 250ms;
    }
  }

  .description {
    display: ${(props) => (props.showAnswer ? `block` : `none`)};
    transition: all ease 250ms;
    p {
      color: grey;
      font-size: 16px;
      padding: 2px 25px;
      @media (max-width: 400px) {
        padding: 2px 10px;
      }
    }
  }
`;

//================================================
