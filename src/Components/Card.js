import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { showApp } from "../features/show_app/show_appSlice";

const Card = ({ icon, title, description }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const show_app = useSelector((state) => state.show_app.value);

  return (
    <MainSection>
      <div className="container-one">
        <div className="icon-container">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <Button
        className="card-button"
        variant="contained"
        onClick={() => {
          if (title === "First Aids" || title === "Health") {
            navigate("/help");
          } else {
            dispatch(showApp());
          }
        }}
      >
        Learn More
      </Button>
    </MainSection>
  );
};

export default Card;

const MainSection = styled.div`
  min-height: 270px;
  max-width: 500px;
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
  box-shadow: -5px 4px 12px -6px rgba(128, 128, 128, 0.75);
  transition: all ease 250ms;

  &:hover {
    transform: scale(105%);
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

  .card-button {
    background-color: rgba(35, 150, 250);
    width: fit-content;
    font-family: myfont;
  }

  @media (max-width: 930px) {
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
          font-size: 20px;
        }
      }
      p {
        font-size: 10px;
        color: grey;
      }
    }
    .card-button {
      background-color: rgba(35, 150, 250);
      width: fit-content;
      font-family: myfont;
      font-size: 10px;
    }
  }

  @media (max-width: 744px) {
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
        font-size: 15px;
        color: grey;
      }
    }
    .card-button {
      background-color: rgba(35, 150, 250);
      width: fit-content;
      font-family: myfont;
      font-size: 15px;
    }
  }
`;
