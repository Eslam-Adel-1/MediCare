import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

const ResultComponent = ({
  counter,
  setCounter,
  setApiResponse,
  apiResponse,
}) => {
  return (
    <MainSection>
      <div>
        <div>
          {apiResponse?.includes("Congratulations") ? (
            <h1 className="good-result">Good News</h1>
          ) : (
            <h1 className="bad-result">unfortunately</h1>
          )}
          <p className="result-answer">{apiResponse}</p>
        </div>
      </div>
      <Button
        className="button"
        variant="contained"
        onClick={() => {
          setApiResponse("");
          setCounter(counter + 1);
        }}
      >
        Close
      </Button>
    </MainSection>
  );
};

export default ResultComponent;

const MainSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    text-align: center;
  }
  .bad-result {
    @media (max-width: 350px) {
      font-size: 22px;
    }
  }

  .result-answer {
    text-align: center;
  }

  .button {
    margin-top: 15px;
    background-color: rgb(35, 150, 250);
  }
`;
