import React from "react";
import styled from "styled-components";

const Attention = () => {
  return (
    <MainSection>
      <div className="attention-section">
        <h1>Attention</h1>
        <ul>
          <li>
            {" "}
            "Warning : Medi doesn't ask you about personal information like
            password or credit card outside the application . "
          </li>
          <li>"Please don't share your information with anyone,"</li>
          <li>
            "Beware of the dangers posed by hackers and take proactive measures
            to protect your personal information and online accounts.",
          </li>
        </ul>
      </div>
    </MainSection>
  );
};

export default Attention;

const MainSection = styled.div`
  @media (max-width: 950px) {
    margin-top: 20px;
  }
`;
