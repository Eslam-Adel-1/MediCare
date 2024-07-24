import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Person2Icon from "@mui/icons-material/Person2";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import pattern1 from "../assets/images/pattern1.png";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  const [requestResponse, setRequestResponse] = useState(false);
  const [apiResponse, setApiResponse] = useState("");

  console.log(userName);
  console.log(userPassword);
  console.log(userConfirmPassword);
  console.log(userEmail);

  const fetchApi = async () => {
    if (userName !== "" || userEmail !== "" || userPassword !== "") {
      try {
        const response = await fetch(
          "https://clinicserver-production.up.railway.app/api/users/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              Name: `${userName}`,
              email: `${userEmail}`,
              password: `${userPassword}`,
              confirmPassword: `${userConfirmPassword}`,
            }),
          }
        );
        const responseResult = await response.json();
        console.log(responseResult);
        setUserEmail("");
        setUserPassword("");
        setUserName("");
        setUserConfirmPassword("");
        setApiResponse(responseResult);
        setRequestResponse(!requestResponse);
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
            <h1>Information</h1>
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
                  navigate("/login");
                }}
              >
                Login
              </Button>
            </div>
          </div>

          <div className="left">
            <div className="left-container">
              <div className="one-left">
                {/* //========================================================= */}
                <h2>Create An Account</h2>
                <div className="one-left-icons">
                  <XIcon className="icon" />
                  <FacebookIcon className="icon" />
                  <LinkedInIcon className="icon" />
                </div>
              </div>
              {/* //========================================================= */}
              <p>Or Use Your Email For Registeration</p>
              {/* //========================================================= */}
              <div className="inputs">
                <div className="input-s">
                  <label htmlFor="name">
                    <Person2Icon className="icon-form" />
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    id="name"
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                    value={userName}
                  />
                </div>
                {/* //============================================================= */}
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
                <div className="input-s">
                  <label htmlFor="passwordConfirm">
                    <LockOpenIcon className="icon-form" />
                  </label>

                  <input
                    type="password"
                    placeholder="Confirm Password"
                    id="passwordConfirm"
                    onChange={(e) => {
                      setUserConfirmPassword(e.target.value);
                    }}
                    value={userConfirmPassword}
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
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainSection>
  );
};

export default RegisterPage;

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
    z-index: 1000000000000;
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
      h1 {
        color: rgb(35, 150, 250);
        letter-spacing: 1px;
      }
      p {
        color: grey;
        letter-spacing: 1px;
      }
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
        }
      }
    }
    .left {
      flex: 0.6;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      color: rgba(35, 150, 250);
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
