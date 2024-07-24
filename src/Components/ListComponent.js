import React from "react";
import styled from "styled-components";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import QuizIcon from "@mui/icons-material/Quiz";
import HouseIcon from "@mui/icons-material/House";
import { useNavigate } from "react-router-dom";

const ListComponent = ({ showSideBar, setShowSideBar }) => {
  const navigate = useNavigate();

  return (
    <MainSection>
      <li
        onClick={() => {
          navigate("/");
        }}
      >
        <HouseIcon className="icon PeopleIcon" />
        Home
      </li>
      <li
        onClick={() => {
          navigate("/diagnosis");
        }}
      >
        <MonitorHeartIcon className="icon MonitorHeartIcon" />
        Diagnosis
      </li>
      <li
        onClick={() => {
          navigate("/settings");
        }}
      >
        <SettingsSuggestIcon className="icon Settings" />
        Settings
      </li>
      <li
        className="QuizIcon-li"
        onClick={() => {
          navigate("/help");
        }}
      >
        <QuizIcon className="icon QuizIcon" />
        Help
      </li>
    </MainSection>
  );
};

export default ListComponent;

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
    margin-bottom: 35px;
    font-family: myFont;
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
