import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Photo from "../assets/images/photo.jpg";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  changeUserEmail,
  changeUserId,
  changeUserName,
  changeUserPhoto,
  changeUserToken,
} from "../features/user/userSlice";

const LoginPage2 = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [requestResponse, setRequestResponse] = useState(false);
  const [apiResponse, setApiResponse] = useState("");
  const [spinner, setSpinner] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [accept, setAccept] = useState(false);

  const logIn = () => {
    setAccept(!accept);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  //=============================================================

  const fetchApi = async () => {
    if (userEmail !== "" && userPassword !== "") {
      setSpinner(true);
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

        if (responseResult.msg === "The success of the login process") {
          dispatch(changeUserEmail(responseResult.email));
          dispatch(changeUserName(responseResult.name));
          dispatch(changeUserId(responseResult._id));
          dispatch(changeUserToken(responseResult.token));
          dispatch(changeUserPhoto(responseResult.profilePhoto));
          setApiResponse(responseResult);
          setUserEmail("");
          setUserPassword("");
          navigate("/");
        } else {
          setApiResponse(responseResult);
          setRequestResponse(!requestResponse);
        }
      } catch (err) {
        console.error(err);
        setUserEmail("");
        setUserPassword("");
      }
    } else {
      setApiResponse("There Are Empty Fields");
      setRequestResponse(!requestResponse);
    }
  };

  useEffect(() => {
    setSpinner(false);
  }, [apiResponse]);

  //============================================================================

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
      <div className="container">
        <div className="overlay-container">
          <div className="overlay">
            <h2 className="overlay-title">Welcome Back ! </h2>
            <p>
              This is medicare a website for loving learning and knowing about
              you diagnosis
            </p>
            <button
              onClick={() => {
                navigate("/register");
              }}
            >
              {" "}
              Register
            </button>
          </div>
        </div>

        <div className="signin-signup">
          <div className="form-sign">
            <h2>Login To Your Account</h2>
            <div className="icons">
              <i id="link" className="fa-brands fa-x-twitter"></i>
              <i id="link" className="fa-brands fa-facebook "></i>
              <i id="link" className="fa-brands fa-google"></i>
            </div>
            <div className="inputs">
              <span> or use your email for registration</span>
              <div className="input-container">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="email"
                  value={userEmail}
                  onChange={(e) => {
                    setUserEmail(e.target.value);
                    setAccept(false);
                  }}
                />
              </div>
              <div className="input-container">
                <i className="fas fa-lock"></i>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  value={userPassword}
                  onChange={(e) => {
                    setUserPassword(e.target.value);
                    setAccept(false);
                  }}
                />
                <IconButton
                  className="Visibility"
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </div>
            </div>
            <a
              className="forgot"
              onClick={() => {
                navigate("/forgotpassword");
              }}
            >
              Forgot password ?
            </a>

            <button
              onClick={() => {
                logIn();
                fetchApi();
              }}
            >
              {" "}
              LogIn
            </button>
            <button
              className="register-button"
              onClick={() => {
                navigate("/register");
              }}
            >
              {" "}
              Register
            </button>
          </div>
        </div>
      </div>
    </MainSection>
  );
};

export default LoginPage2;

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
    z-index: 999999999999999999999;
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
      max-width: 400px;
      h1 {
        color: rgb(35, 150, 250);
        letter-spacing: 1px;
        margin-bottom: 0px;
      }
      p {
        color: grey;
        letter-spacing: 1px;
        text-align: center;
      }
    }
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    min-height: 480px;
    max-width: 768px;
    margin-left: 25px;
    margin-right: 25px;
    border-radius: 15px;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3);
    overflow: hidden;
    flex-wrap: wrap;
    @media (max-width: 600px) {
      box-shadow: none;
    }
  }

  .overlay-container {
    flex: 0.4;
    height: 100%;
    border-radius: 5px;
    background-image: ${`url(${Photo})`};
    display: grid;
    place-content: center;
    padding: 15px;
    @media (max-width: 600px) {
      display: none;
    }
    .overlay {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 25px;
    }
  }
  .overlay-container h2 {
    text-align: center;
    transform: translateY(10px);
    font-size: 34px;
    color: white;
  }
  .overlay-container p {
    color: white;
    text-align: center;
    font-weight: 300;
    letter-spacing: 1px;
  }
  button {
    width: 160px;
    height: 45px;
    border: none;
    border-radius: 50px;
    background: rgb(8, 121, 261);
    color: white;
    font-weight: 600;
    border: 2px solid white;
    cursor: pointer;
  }
  button:hover {
    background: rgb(4, 110, 172);
  }

  .signin-signup {
    flex: 0.7;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 600px) {
      width: 100%;
      flex: 1;
    }
  }
  .signin-signup .form-sign {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    .register-button {
      display: none;
      @media (max-width: 600px) {
        display: inline;
        margin-top: 20px;
        background-color: white;
        border-color: rgb(35, 150, 250);
        color: rgb(35, 150, 250);
      }
    }
    .forgot {
      color: rgba(35, 150, 250);
      cursor: pointer;
      text-decoration: underline;
    }
    .inputs {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1px;
    }
    .input-container {
      background: #eee;
      border: none;
      padding: 13px;
      margin: 6px;
      width: 100%;
      height: 50px;
      outline: none;
      border-radius: 20px;
      float: none;
      text-align: center;
      border: 1px solid rgb(199, 197, 197);
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      gap: 10px;
      padding-left: 25px;
      overflow: none;
      @media (max-width: 500px) and(min-width: 300px) {
        width: 80%;
      }

      .Visibility {
        width: fit-content;
        height: fit-content;
        background: transparent;
        padding: 0px;
        border: 0px;
        color: grey;
      }
    }
    .icons {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
    }
  }

  .form-sign h2 {
    color: rgb(35, 150, 250);
    text-align: center;
  }

  input {
    flex-grow: 1;
    outline: none;
    background: transparent;
    border: none;
  }

  i {
    color: gray;
  }
  span {
    color: grey;
    text-align: center;
  }

  #link {
    text-align: center;
    color: gray;
    font-size: 25px;
    padding: 4px;
  }
  #link:hover {
    top: 0;
    left: 0;
    color: rgb(8, 121, 261);
  }
  form button {
    width: 160px;
    height: 45px;
    border: none;
    border-radius: 50px;
    background: rgb(8, 121, 261);
    color: white;
    font-weight: 600;
    margin: 110px;
    text-transform: uppercase;
    margin-bottom: 30px;
    margin-top: 50px;
  }
  .form-sign button:hover {
    background: rgb(4, 110, 172);
  }
`;
