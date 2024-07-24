import React from "react";
import styled from "styled-components";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Avatar from "@mui/material/Avatar";
import ListComponent from "./ListComponent";
import Button from "@mui/material/Button";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import { useSelector } from "react-redux";

const Sidebar = ({}) => {
  const user = useSelector((state) => state.user.value);

  return (
    <MainSection>
      <SectionOne>
        <div>
          <HighlightOffIcon className="closeIcon" />
        </div>
      </SectionOne>
      <SecondSection>
        <Avatar className="Avatar" src={user.userPhoto} />
        <div className="Avatar-Info">
          <p className="Info-Name">{user.name}</p>
          <p className="Info-Email">{user.email}</p>
        </div>
      </SecondSection>
      <ThirdSection>
        <ListComponent />
      </ThirdSection>

      <Button variant="outlined" className="LogOutButton">
        <MeetingRoomIcon />
        <p>LogOut</p>
      </Button>
    </MainSection>
  );
};

export default Sidebar;

const MainSection = styled.div`
  position: fixed;
  z-index: 1001;
  top: 0px;
  left: 0;
  bottom: 0px;
  width: 250px;
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  color: rgb(35, 150, 250);
  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-track {
  }
  &::-webkit-scrollbar-thumb {
    background: white;
  }
  .LogOutButton {
    color: white;
    font-family: myFont;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding: 0px;
    margin: 0px 15px 15px 15px;
    border: 1px solid white;
    padding: 10px;
    &:hover {
      border: 1px solid #d93232;
    }
  }
`;

const SectionOne = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  margin: 15px -10px;
  div {
    .closeIcon {
      height: 32px;
      width: 32px;
      color: white;
      cursor: pointer;
      transition: all ease 250ms;
      &:hover {
        transform: rotate(30deg);
      }
    }
  }
`;

const SecondSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid white;
  margin-bottom: 5px;

  .Avatar {
    height: 50px;
    width: 50px;
  }

  .Avatar-Info {
    display: flex;
    gap: 3px;
    justify-content: center;
    flex-direction: column;
    color: white;
    font-family: myFont;
    .Info-Email {
      margin: 0px;
      font-size: 12px;
      font-family: myFont;
    }
    .Info-Name {
      margin: 0px;
      font-size: 15px;
      font-weight: 900;
      font-family: myFont;
    }
  }
`;

const ThirdSection = styled.div`
  margin: 10px 0px;
`;
