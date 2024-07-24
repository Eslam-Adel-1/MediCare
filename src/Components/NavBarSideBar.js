import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  changeUserEmail,
  changeUserId,
  changeUserName,
  changeUserPhoto,
} from "../features/user/userSlice";
import ListComponentNavBar from "./ListComponentNavBar";

const NavBarSideBar = ({ showSideBar, setShowSideBar }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  return (
    <MainSection showSideBar={showSideBar}>
      <CancelIcon
        className="Close-Icon"
        onClick={() => {
          setShowSideBar(!showSideBar);
        }}
      />
      {user.email !== "" ? (
        <SecondSection>
          <Avatar className="Avatar" src={user.userPhoto} />
          <div className="Avatar-Info">
            <p className="Info-Name">{user.name}</p>
            <p className="Info-Email">{user.email}</p>
          </div>
        </SecondSection>
      ) : (
        <h1 className="title-no-login"> MediCare </h1>
      )}

      <ThirdSection>
        <ListComponentNavBar
          showSideBar={showSideBar}
          setShowSideBar={setShowSideBar}
        />
      </ThirdSection>
      {user.email !== "" ? (
        <Button variant="outlined" className="LogOutButton">
          <MeetingRoomIcon />
          <p
            onClick={() => {
              dispatch(changeUserEmail(""));
              dispatch(changeUserName(""));
              dispatch(changeUserId(""));
              dispatch(changeUserPhoto(""));
              navigate("/login");
            }}
          >
            LogOut
          </p>
        </Button>
      ) : (
        <div className="buttons-no-login">
          <Button
            variant="outlined"
            className="LogInButton"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            className="RegisterButton"
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </Button>
        </div>
      )}
    </MainSection>
  );
};

export default NavBarSideBar;

const MainSection = styled.div`
  flex: 0.25;
  background-color: #34a1ff;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  height: 100%;
  transition: all ease 250ms;
  @media (min-width: 721px) {
    display: none;
  }

  @media (max-width: 720px) {
    flex: 0;
    width: 300px;
    min-height: auto;
    position: fixed;
    left: 0;
    bottom: 0;
    top: 0;
    border: 0;
    z-index: 999999999;
    left: ${(props) => (props.showSideBar ? "0" : "-100%")};

    transform: ${(props) =>
      props.showSideBar ? "translateX(0%)" : "translateX(-100%)"};
  }
  @media (max-width: 400px) {
    flex: 0;
    width: 300px;
    min-height: auto;
    position: fixed;
    top: 0;
    bottom: 0;
    border: 0;
    z-index: 999999999;
    left: ${(props) => (props.showSideBar ? "0" : "-100%")};

    transform: ${(props) =>
      props.showSideBar ? "translateX(0%)" : "translateX(-100%)"};
  }
  @media (max-width: 300px) {
    flex: 0;
    width: 250px;
    min-height: auto;
    position: absolute;
    top: 0;
    border: 0;
    z-index: 999999999;
    left: ${(props) => (props.showSideBar ? "0" : "-100%")};

    transform: ${(props) =>
      props.showSideBar ? "translateX(0%)" : "translateX(-100%)"};
  }
  .title-no-login {
    font-family: myFont;
    color: white;
    margin-top: 100px;
    margin-bottom: 50px;
    margin-left: 35px;
  }
  .Close-Icon {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 40px;
    color: white;
  }

  &::-webkit-scrollbar {
    width: 2px;
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
      color: #d93232;
    }
  }
  .buttons-no-login {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    .LogInButton {
      width: 70%;
      color: white;
      font-family: myFont;
      margin: 0px 15px 15px 15px;
      border: 2px solid white;
      padding: 10px;
      border-radius: 10px;
    }
    .RegisterButton {
      width: 70%;
      color: white;
      font-family: myFont;
      margin: 0px 15px 15px 15px;
      border: 2px solid white;
      padding: 10px;
      border-radius: 10px;
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
  margin: 15px 0px;
  flex: 0.2;
  @media (max-width: 830px) {
    flex-direction: column;
  }

  .Avatar {
    height: 90px;
    width: 90px;
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
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    }
    .Info-Name {
      margin: 0px;
      font-size: 15px;
      font-weight: 900;
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    }
  }
`;

const ThirdSection = styled.div`
  margin: 10px 0px;
  flex: 0.8;
`;
