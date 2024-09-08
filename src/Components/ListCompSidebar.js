import React from "react";
import styled from "styled-components";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import InfoIcon from "@mui/icons-material/Info";
import QuizIcon from "@mui/icons-material/Quiz";
import PeopleIcon from "@mui/icons-material/People";

const ListComponent = () => {
  //================================================

  return (
    <MainSection>
      <li>
        <PeopleIcon className="icon PeopleIcon" />
        Profile
      </li>
      <li>
        <MonitorHeartIcon className="icon MonitorHeartIcon" />
        Diagnosis
      </li>
      <li>
        <SettingsSuggestIcon className="icon Settings" />
        Settings
      </li>
      <li>
        <InfoIcon className="icon InfoIcon" />
        About
      </li>
      <li className="QuizIcon-li">
        <QuizIcon className="icon QuizIcon" />
        Help
      </li>
    </MainSection>
  );
};

export default ListComponent;

//================================================

const MainSection = styled.ul`
  list-style-type: none;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 15px;
  padding: 10px 50px;
  li {
    display: flex;
    gap: 15px;
    color: white;
    cursor: pointer;
    align-items: center;
    margin-bottom: 35px;
    font-family: myFont;

    .icon {
      padding-top: 2px;
      color: white;
    }
  }
  .QuizIcon-li {
    margin-bottom: 10px;
  }
`;

//================================================
