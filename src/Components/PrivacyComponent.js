import React from "react";
import styled from "styled-components";
import privacy_array from "../Arrays/Privacy";
import Question from "./Question";

const PrivacyComponent = () => {
  return (
    <MainSection>
      {privacy_array.map((element, index) => {
        return (
          <Question
            key={index}
            question={element.condition}
            answer={element.answer}
          />
        );
      })}
    </MainSection>
  );
};

export default PrivacyComponent;

const MainSection = styled.div`
  margin-left: 40px;
  margin-bottom: 40px;
  margin-top: 50px;
  overflow-y: scroll;
`;
