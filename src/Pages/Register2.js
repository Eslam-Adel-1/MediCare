import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Photo from "../assets/images/photo.jpg";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [accept, setAccept] = useState(false);
  const [requestResponse, setRequestResponse] = useState(false);
  const [apiResponse, setApiResponse] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const navigate = useNavigate();

  const register = () => {
    setAccept(!accept);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  //=========================================================

  const fetchApi = async () => {
    if (name !== "" && email !== "" && password !== "" && passwordR !== "") {
      setSpinner(true);
      try {
        const response = await fetch(
          "https://clinicserver-production.up.railway.app/api/users/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              Name: `${name}`,
              email: `${email}`,
              password: `${password}`,
              confirmPassword: `${passwordR}`,
            }),
          }
        );
        const responseResult = await response.json();
        console.log(responseResult);
        setApiResponse(responseResult);
        setRequestResponse(!requestResponse);
      } catch (err) {
        console.error(err);
      }
    } else {
      setApiResponse("There Are Empty Fields");
      setRequestResponse(!requestResponse);
    }
  };

  useEffect(() => {
    setSpinner(false);
  }, [apiResponse]);

  //====================================================================
  return (
    <MainSection>
      {spinner ? (
        <div className="spinner-container">
          <CircularProgress className="spinner" />
        </div>
      ) : (
        <></>
      )}
      {requestResponse ? (
        <div className="request-response">
          <div className="request-response-container">
            <h1>Information</h1>
            {apiResponse?.msg ? <p>{apiResponse.msg}</p> : <p>{apiResponse}</p>}
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
      <div className="container-login">
        <div className="login-empty">
          <h1> WELCOME</h1>
          <p> Fill Out the form carefully for registration</p>
          <button
            className="signup"
            onClick={() => {
              navigate("/login");
            }}
          >
            LogIn
          </button>
        </div>

        <div className="form-login ">
          <div className="body-login">
            <div className="title-content">
              <h2>Create an account</h2>
            </div>
            <div className="login">
              <div className="input-icons-container">
                <i className="fas fa-user"> </i>
                <input
                  className="space"
                  type="text"
                  placeholder=" Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input-icons-container">
                <i className="fas fa-envelope"></i>

                <input
                  className="space"
                  type="email"
                  placeholder=" email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input-icons-container">
                <i className="fas fa-lock"></i>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder=" password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <IconButton
                  className="Visibility"
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </div>
              <div className="input-icons-container">
                <i className="fas fa-lock"></i>
                <input
                  type={showPassword2 ? "text" : "password"}
                  placeholder="Confirm password"
                  value={passwordR}
                  onChange={(e) => setPasswordR(e.target.value)}
                />
                <IconButton
                  className="Visibility"
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword2}
                >
                  {showPassword2 ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </div>
              <button
                className="click"
                onClick={() => {
                  fetchApi();
                  register();
                }}
              >
                Register
              </button>
              <button
                className="register-button"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Log-In
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainSection>
  );
}

const MainSection = styled.div`
  display: grid;
  place-content: center;
  min-height: 100vh;
  font-family: myFont;

  .spinner-container {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: grid;
    place-content: center;
    background-color: rgba(0, 0, 0, 0.4);
    .spinner {
      color: white;
    }
  }

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
      padding: 30px 50px;
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

  .container-login {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
    background: #fff;
    min-height: 480px;
    max-width: 768px;
    border-radius: 15px;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3);
    overflow: hidden;
    .Visibility {
      width: fit-content;
      height: fit-content;
      background: transparent;
      padding: 0px;
      border: 0px;
      color: grey;
    }
    @media (max-width: 600px) {
      box-shadow: none;
    }
    .click {
      margin-top: 15px;
    }
  }
  .container-login .login-empty {
    flex: 0.4;
    height: 100%;
    border-radius: 5px;
    background-image: ${`url(${Photo})`};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    padding: 0px 15px;
    @media (max-width: 600px) {
      display: none;
    }
  }
  .container-login .form-login {
    flex: 0.6;
    height: 100%;
    display: grid;
    place-content: center;
    .body-login {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 30px;
      .register-button {
        display: none;
        @media (max-width: 600px) {
          display: inline;
          border: 2px solid rgb(35, 150, 250);
          margin-top: 20px;
          background-color: white;
          border-color: rgb(35, 150, 250);
          color: rgb(35, 150, 250);
        }
      }
    }
    @media (max-width: 600px) {
      width: 100%;
      flex: 1;
    }
  }
  .title-content {
    h2 {
      text-align: center;
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  .container-login h2 {
    color: rgb(40, 160, 260);
    font-size: 35px;
  }
  input {
    outline: none;
    border: none;
    background: transparent;
    flex-grow: 1;
  }
  i {
    color: gray;
  }
  button {
    border-radius: 15px;
    border: 1px solid;
    cursor: pointer;
  }
  form button {
    width: 160px;
    height: 45px;
    border: none;
    border-radius: 50px;
    background: rgb(8, 121, 261);
    color: white;
    font-weight: 600;
    border: 2px solid white;
  }
  form button:hover {
    background: rgb(4, 110, 172);
  }

  .login {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    .input-icons-container {
      background: #eee;
      width: 100%;
      height: 50px;
      border-radius: 20px;
      border: 1px solid rgb(199, 197, 197);
      margin-left: 25px;
      margin-right: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: 12px 30px;
      gap: 10px;
      @media (max-width: 350px) {
        width: 80%;
      }
    }
  }
  .login-empty h1 {
    color: white;
    letter-spacing: 2px;
  }
  .login-empty p {
    color: white;
    letter-spacing: 2px;
    text-align: center;
  }
  button {
    width: 160px;
    height: 45px;
    border: none;
    border-radius: 50px;
    background: rgb(8, 121, 261);
    color: white;
    font-weight: 600;
    border: 1px solid white;
  }
  button:hover {
    background: rgb(4, 110, 172);
  }
  #error {
    display: grid;
    place-content: center;
    background-color: aliceblue;
    color: red;
    height: 100%;
    width: 100%;
    border: 1px solid red;
    border-radius: 15px;
    box-sizing: border-box;
    padding: 10px;
  }
`;
