import React from "react";
import styled from "styled-components";
import logo2 from "../assets/images/logo2.png";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  changeUserEmail,
  changeUserId,
  changeUserName,
  changeUserPhoto,
} from "../features/user/userSlice";
import MenuIcon from "@mui/icons-material/Menu";

//====================================================================

const Navbar = ({ showSideBar, setShowSideBar }) => {
  const user = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //====================================================================

  return (
    <MainSection>
      <Left>
        <div className="Logo-name">
          <MenuIcon
            className="menu-icon"
            onClick={() => {
              setShowSideBar(!showSideBar);
            }}
          />
          <img
            src={logo2}
            alt="Logo"
            onClick={() => {
              navigate("/");
            }}
          />
          <h2
            onClick={() => {
              navigate("/");
            }}
          >
            MediCare
          </h2>
        </div>
        <div className="list-menu">
          <ul>
            <li
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                navigate("/help");
              }}
            >
              Help
            </li>
            <li
              onClick={() => {
                navigate("/settings");
              }}
            >
              Settings
            </li>
            <li
              onClick={() => {
                navigate("/diagnosis");
              }}
            >
              Diagnosis
            </li>
          </ul>
        </div>
      </Left>
      <Right>
        {user.email !== "" ? (
          <>
            <Avatar
              src={user.userPhoto}
              className="avatar-navbar"
              onClick={() => {
                navigate("/settings");
              }}
            />
            <Button
              className="nav-buttons nav-buttons3"
              variant="outlined"
              onClick={() => {
                dispatch(changeUserEmail(""));
                dispatch(changeUserName(""));
                dispatch(changeUserId(""));
                dispatch(changeUserPhoto(""));
                navigate("/login");
              }}
            >
              Log Out
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="text"
              className="nav-buttons nav-button1"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </Button>
            <Button
              className="nav-buttons nav-buttons2"
              variant="contained"
              onClick={() => {
                navigate("/register");
              }}
            >
              Join Us
            </Button>
          </>
        )}
      </Right>
    </MainSection>
  );
};

export default Navbar;

//====================================================================

const MainSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: transparent;
  height: 55px;
  font-family: myFont;
  color: rgba(35, 150, 250);
  padding: 10px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .Logo-name {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;

    .menu-icon {
      font-size: 35px;
      @media (min-width: 720px) {
        display: none;
      }
    }

    img {
      height: 40px;
      object-fit: contain;
      @media (max-width: 300px) {
        display: none;
      }
    }
  }

  .list-menu {
    @media (max-width: 720px) {
      display: none;
    }
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style-type: none;
      gap: 20px;
      li {
        position: relative;
        transition: all ease 250ms;
        cursor: pointer;
        &::after {
          content: "";
          height: 1px;
          position: absolute;
          bottom: -5px;
          right: 0;
          left: 0;
          width: 0;
          background-color: rgba(35, 150, 250);
          transition: all ease 250ms;
        }
        &:hover::after {
          content: "";
          height: 1px;
          position: absolute;
          bottom: -5px;
          right: 0;
          left: 0;
          width: 100%;
          background-color: rgba(35, 150, 250);
        }
      }
    }
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  .avatar-navbar {
    height: 39px;
    width: 39px;
    border: 2px rgba(35, 150, 250) solid;
    cursor: pointer;
    @media (max-width: 320px) {
      display: none;
    }
  }
  .nav-buttons {
    font-family: myFont;
    @media (max-width: 450px) {
      display: none;
    }
  }
  .nav-buttons2 {
    background-color: rgba(35, 150, 250);
    margin-left: 15px;
  }
  .nav-buttons3 {
    color: red;
    border: 1px red solid;
    &:hover {
      border: 1px grey solid;
    }
  }
`;

//====================================================================
