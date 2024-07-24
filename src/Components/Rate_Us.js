import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

const Rate_Us = () => {
  const [opinion, setOpinion] = useState("");
  const [showOpinion, setShowOpinion] = useState(false);

  return (
    <MainSection>
      {showOpinion ? (
        <div className="request-response">
          <div className="request-response-container">
            <h1>Thank You</h1>
            <p>
              {" "}
              Thank you for your feedback your opinion matters so much for us
            </p>
            <Button
              className="SignUp-button"
              variant="contained"
              onClick={() => {
                setShowOpinion(!showOpinion);
              }}
            >
              Close
            </Button>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="Rate-Us">
        <h1>Rate Us</h1>
        <p>
          We value your feedback and believe that your opinion is crucial in
          helping us improve our medical website
        </p>
        <p>
          Please take a moment to share your thoughts, suggestions, and any
          concerns you may have. Your input is truly appreciated and will help
          us continue to provide quality healthcare resources for all our users.
          Thank you for helping us make our website the best it can be.
        </p>
        <textarea
          placeholder="Give us your feedback"
          onChange={(e) => {
            setOpinion(e.target.value);
          }}
          value={opinion}
        ></textarea>
        <Button
          className="container-sidebar-buttons"
          variant="contained"
          onClick={() => {
            setShowOpinion(!showOpinion);
            setOpinion("");
          }}
        >
          Send
        </Button>
      </div>
    </MainSection>
  );
};

export default Rate_Us;

const MainSection = styled.div`
  .request-response {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: grid;
    place-content: center;
    z-index: 99999999;
    .request-response-container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background-color: white;
      padding: 20px;
      border-radius: 15px;
      gap: 10px;
      font-family: myFont;
      max-width: 400px;
      h1 {
        color: rgb(35, 150, 250);
        letter-spacing: 1px;
        margin-bottom: 0px;
      }
      p {
        color: grey;
        letter-spacing: 1px;
        text-align: center;
      }
    }
  }
  @media (max-width: 950px) {
    margin-top: 20px;
  }
`;
