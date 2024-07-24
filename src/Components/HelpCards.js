import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  closeAid,
  switchAid,
} from "../features/fag_aid_card_show/fag_aid_card_showSlice";
import {
  closeHealth,
  switchHealth,
} from "../features/fag_health_card_show/fag_health_card_showSlice";

const Card = ({ icon, title, description }) => {
  const dispatch = useDispatch();

  const ShowVisibility = () => {
    if (title === "First Aids") {
      dispatch(switchAid());
      dispatch(closeHealth());
    } else {
      dispatch(switchHealth());
      dispatch(closeAid());
    }
  };

  return (
    <MainSection>
      <div className="container-one" onClick={ShowVisibility}>
        <div className="icon-container">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </MainSection>
  );
};

export default Card;

const MainSection = styled.div`
  width: 300px;
  min-height: 150px;
  max-width: 400px;
  border: 1.5px solid rgba(35, 150, 250);
  border-radius: 5px;
  background-color: white;
  font-family: myFont;
  padding: 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;
  box-shadow: -5px 4px 12px -6px rgba(128, 128, 128, 0.75);
  transition: all ease 250ms;

  @media (max-width: 370px) {
  }
  &:hover {
    transform: scale(105%);
  }

  .changeColorShowAid {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: rgba(35, 150, 250);
    .icon-container {
      border-radius: 50%;
      background-color: rgba(35, 150, 250);
      width: fit-content;
      padding: 10px;
      display: grid;
      place-content: center;
      .icon {
        color: white;
        font-size: 30px;
      }
    }
    p {
      font-size: 13px;
      color: grey;
    }
  }

  .container-one {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .icon-container {
      border-radius: 50%;
      background-color: rgba(35, 150, 250);
      width: fit-content;
      padding: 10px;
      display: grid;
      place-content: center;
      .icon {
        color: white;
        font-size: 30px;
      }
    }
    p {
      font-size: 13px;
      color: grey;
    }
  }
`;
