import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import pattern1 from "../assets/images/pattern1.png";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  changeUserEmail,
  changeUserId,
  changeUserName,
  changeUserToken,
} from "../features/user/userSlice";

const LoginPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [requestResponse, setRequestResponse] = useState(false);
  const [apiResponse, setApiResponse] = useState("");

  const userInfo = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchApi = async () => {
    if (userEmail !== "" || userPassword !== "") {
      try {
        const response = await fetch(
          "https://clinicserver-production.up.railway.app/api/users/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: `${userEmail}`,
              password: `${userPassword}`,
            }),
          }
        );
        const responseResult = await response.json();
        console.log(responseResult);
        setUserEmail("");
        setUserPassword("");
        if (responseResult.msg === "The success of the login process") {
          dispatch(changeUserEmail(responseResult.email));
          dispatch(changeUserName(responseResult.name));
          dispatch(changeUserId(responseResult._id));
          dispatch(changeUserToken(responseResult.token));
          setApiResponse(responseResult);
          navigate("/");
        } else {
          setApiResponse(responseResult);
          setRequestResponse(!requestResponse);
          setUserEmail("");
          setUserPassword("");
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log("Empty Fields Here");
    }
  };

  return (
    <MainSection>
      {requestResponse ? (
        <div className="request-response">
          <div className="request-response-container">
            <h1>Warning</h1>
            <p>{apiResponse.msg}</p>
            <Button
              className="SignUp-button"
              variant="contained"
              onClick={() => {
                setRequestResponse(!requestResponse);
              }}
            >
              Close
            </Button>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="Container">
        <div className="ContainerRightLeft">
          <div className="right">
            <div className="right-container">
              <h2>Welcome Back !</h2>
              <h6>
                This is MediCare a Website for loving learning and knowing about
                your diagnosis{" "}
              </h6>
              <Button
                className="login-button"
                variant="outlined"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Register
              </Button>
            </div>
          </div>

          <div className="left">
            <div className="left-container">
              <div className="one-left">
                {/* //========================================================= */}
                <h2>Login To Your Account</h2>
                <div className="one-left-icons">
                  <XIcon className="icon" />
                  <FacebookIcon className="icon" />
                  <LinkedInIcon className="icon" />
                </div>
              </div>
              {/* //========================================================= */}
              <p>Login To Your Account To Start The Diagnosis</p>
              {/* //========================================================= */}
              <div className="inputs">
                <div className="input-s">
                  <label htmlFor="email">
                    <MailOutlineIcon className="icon-form" />
                  </label>

                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    onChange={(e) => {
                      setUserEmail(e.target.value);
                    }}
                    value={userEmail}
                  />
                </div>
                {/* //============================================================= */}
                <div className="input-s">
                  <label htmlFor="password">
                    <LockOpenIcon className="icon-form" />
                  </label>

                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    onChange={(e) => {
                      setUserPassword(e.target.value);
                    }}
                    value={userPassword}
                  />
                </div>
                {/* //============================================================= */}
              </div>
              <Button
                className="SignUp-button"
                variant="contained"
                onClick={() => {
                  fetchApi();
                }}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainSection>
  );
};

export default LoginPage;

const MainSection = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  place-content: center;
  position: relative;

  .request-response {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: grid;
    place-content: center;
    z-index: 99999999;
    .request-response-container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background-color: white;
      padding: 20px;
      border-radius: 15px;
      gap: 10px;
      font-family: myFont;
    }
  }

  .Logo {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 30px 0px 0px 30px;
    img {
      height: 40px;
      object-fit: contain;
    }
    h2 {
      color: rgba(35, 150, 250);
      font-family: myFont;
    }
  }

  .LoginDoctor {
    height: 320px;
    object-fit: contain;
    position: absolute;
    left: 30px;
    bottom: 50px;
  }

  .ContainerRightLeft {
    height: 420px;
    width: 700px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
    overflow: hidden;
    border: 1px solid grey;
    .right {
      flex: 0.4;
      display: grid;
      place-content: center;
      height: 100%;
      background-color: #61c7e6;
      background-image: linear-gradient(
          180deg,
          rgba(35, 150, 250, 0.7151612108126997) 0%,
          rgba(35, 150, 250, 0.6736276644868211) 100%
        ),
        url(${pattern1});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;

      .right-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        padding: 15px;
        color: white;
        text-align: center;
        gap: 20px;

        .login-button {
          color: white;
          border: 1px solid white;
          border-radius: 30px;
          width: 150px;
          font-family: myFont;
        }
        h2 {
          font-weight: 900;
          font-family: myFont;
        }
        h6 {
          padding: 0px 20px;
          margin-bottom: 15px;
          font-family: myFont;
          font-size: 13px;
        }
      }
    }
    .left {
      flex: 0.6;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      color: #14a3ce;
      background-color: white;
      height: 100%;
      display: grid;
      place-content: center;
      .SignUp-button {
        background-color: rgba(35, 150, 250);
        border-radius: 30px;
        width: 150px;
        font-family: myFont;
      }
      .left-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;

        .inputs {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 12px;
          .input-s {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            background-color: #ecf1f2;
            padding: 3px 15px;
            border-radius: 15px;
            .icon-form {
              color: #b2b2b2;
            }
            input {
              outline: none;
              border: none;
              background: transparent;
            }
          }
        }
        p {
          font-size: 12px;
          color: grey;
          font-family: myFont;
        }
        .one-left {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 20px;
          h2 {
            font-family: myFont;
            color: rgba(35, 150, 250);
          }

          .one-left-icons {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            .icon {
              color: #b2b2b2;
              border: 1px solid #b2b2b2;
              padding: 2px;
              border-radius: 50%;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
`;