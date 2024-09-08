import React from "react";
import RatingComponent from "../Components/RatingComponent";
import styled from "styled-components";
import Button from "@mui/material/Button";

//================================================

const UserRatingComponent = ({ setShowRating, showRating }) => {
  return (
    <MainSection>
      <h2>Rate Us</h2>
      <p>
        We value your feedback! By rating our medical website, you can help us
        improve and better cater to your needs.
      </p>
      <RatingComponent />
      <Button
        className="button"
        variant="contained"
        onClick={() => {
          setShowRating(!showRating);
        }}
      >
        Close
      </Button>
    </MainSection>
  );
};

export default UserRatingComponent;

//================================================

const MainSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  h2 {
    color: rgb(35, 150, 250);
  }
  p {
    max-width: 300px;
    font-size: 14px;
  }
  .button {
    background-color: rgb(35, 150, 250);
  }
`;

//================================================
