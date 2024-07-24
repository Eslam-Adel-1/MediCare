import React from "react";
import styled from "styled-components";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import QuizIcon from "@mui/icons-material/Quiz";
import ChatIcon from "@mui/icons-material/Chat";
import HouseIcon from "@mui/icons-material/House";
import { useNavigate } from "react-router-dom";

const ListComponentNavBar = ({ showSideBar, setShowSideBar }) => {
  const navigate = useNavigate();

  return (
    <MainSection>
      <li
        onClick={() => {
          navigate("/");
          setShowSideBar(!showSideBar);
        }}
      >
        <HouseIcon className="icon PeopleIcon" />
        Home
      </li>
      <li
        onClick={() => {
          navigate("/diagnosis");
          setShowSideBar(!showSideBar);
        }}
      >
        <MonitorHeartIcon className="icon MonitorHeartIcon" />
        Diagnosis
      </li>
      <li
        onClick={() => {
          navigate("/settings");
          setShowSideBar(!showSideBar);
        }}
      >
        <SettingsSuggestIcon className="icon Settings" />
        Settings
      </li>
      <li
        onClick={() => {
          navigate("/chatbot");
          setShowSideBar(!showSideBar);
        }}
      >
        <ChatIcon className="icon Settings" />
        ChatBot
      </li>
      <li
        className="QuizIcon-li"
        onClick={() => {
          navigate("/help");
          setShowSideBar(!showSideBar);
        }}
      >
        <QuizIcon className="icon QuizIcon" />
        Help
      </li>
    </MainSection>
  );
};

export default ListComponentNavBar;

const MainSection = styled.ul`
  list-style-type: none;
  font-family: myFont;
  letter-spacing: 1px;
  font-size: 15px;
  padding: 10px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 750px) {
    padding: 10px 30px;
  }
  li {
    display: flex;
    gap: 15px;
    color: white;
    cursor: pointer;
    align-items: center;
    margin-bottom: 45px;
    font-family: myFont;
    padding-left: 20px;
    .PeopleIcon {
      font-size: 26px;
    }

    .icon {
      padding-top: 2px;
      color: white;
    }
  }
  .QuizIcon-li {
    margin-bottom: 10px;
    font-family: myFont;
  }
`;
