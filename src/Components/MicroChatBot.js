import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Small_Window_ChatBot from "../Pages/Small_Window_ChatBot";
import ChatBotLogo from "../assets/images/ChatBotLogo.png";
import Button from "@mui/material/Button";

//================================================

const MicroChatBot = () => {
  const [chatBotStatus, setChatBotStatus] = useState(false);

  //================================================

  return (
    <MainSection>
      <FirstSection>
        {chatBotStatus && <Small_Window_ChatBot></Small_Window_ChatBot>}
        <Button className="buttonForOptions">
          <img
            style={{ color: "blue", cursor: "pointer" }}
            src={ChatBotLogo}
            onClick={() => setChatBotStatus(!chatBotStatus)}
          />
        </Button>
      </FirstSection>
    </MainSection>
  );
};

export default MicroChatBot;

//================================================

const MainSection = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  z-index: 2000;

  .openChat {
    color: white;
    font-family: myFont;
    font-size: 15px;
    font-weight: 900;
    background-color: rgba(35, 150, 250, 1);
    border-radius: 30px;
    box-shadow: -3px 5px 3px -2px rgba(0, 0, 0, 0.43);
    transition: all ease 500ms;

    &:hover {
      color: rgba(35, 150, 250, 1);
      font-family: myFont;
      font-size: 15px;
      font-weight: 900;
      background-color: white;
      border: 1.5px grey solid;
    }
  }
`;

const FirstSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  place-content: center;
  gap: 20px;
  z-index: 1000;
  padding: 5px 12px;
  height: 50px;
  border-radius: 35px;
  border: 2px solid rgb(35, 150, 250);
  background-color: whitesmoke;
  font-family: myFont;

  @media (max-width: 720px) {
    display: none;
  }
  .buttonForOptions {
    cursor: pointer;
  }
  .MuiButtonBase-root {
    width: fit-content;
    min-width: 0px;
  }
  .Microphone-image {
    display: none;
  }
  img {
    object-fit: contain;
    height: 40px;
    border-radius: 15px;
  }
  &:hover {
    color: black;
    background-color: rgba(131, 215, 240, 0.5);
    .Microphone-image {
      display: block;
      cursor: pointer;
    }
  }
`;

//================================================
