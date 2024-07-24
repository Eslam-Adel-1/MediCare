import React, { useEffect } from "react";
import styled from "styled-components";
import Photo from "../assets/images/photo.jpg";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword2() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [requestResponse, setRequestResponse] = useState(false);
  const [apiResponse, setApiResponse] = useState("");
  const [spinner, setSpinner] = useState(false);

  console.log(userEmail);
  //======================================================================
  const fetchApi = async () => {
    if (userEmail !== "") {
      setSpinner(true);

      try {
        const response = await fetch(
          "https://clinicserver-production.up.railway.app/api/users/forgot-password",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: `${userEmail}`,
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
  //=======================================================================

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
      <div className="container-email">
        <div className="form-container">
          <div className=" container-body">
            <div className="sub-container-body">
              <h3>Forgot Your Password ?</h3>
              <p>
                {" "}
                Please enter your email address. We will send you an email to
                reset your password .
              </p>

              <div id="email">
                <i class="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email address"
                  onChange={(e) => {
                    setUserEmail(e.target.value);
                  }}
                  value={userEmail}
                />
              </div>
              <button
                className="submit"
                onClick={() => {
                  fetchApi();
                }}
              >
                Reset Password
              </button>
              <button
                className="login-goToLogin"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
            </div>
          </div>
          <div className="page-empty">
            <div className="page">
              <div className="pages2">
                <p>
                  {" "}
                  You may need to verify your identity through
                  <br />
                  email or security questions in order
                  <br />
                  to create a new password.
                </p>
              </div>
              <button
                className="Login"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
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
    z-index: 9999999999999999999;
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
      padding: 20px;
      border-radius: 15px;
      gap: 10px;
      font-family: myFont;
      h1 {
        color: rgb(35, 150, 250);
        letter-spacing: 1px;
        margin-bottom: 0px;
      }
      p {
        color: grey;
        letter-spacing: 1px;
      }
    }
  }

  .container-email {
    background: #fff;
    min-height: 480px;
    max-width: 768px;
    border-radius: 15px;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3);
    overflow: hidden;
    font-family: myFont;
    margin-left: 25px;
    margin-right: 25px;
    @media (max-width: 600px) {
      box-shadow: none;
    }
  }
  .container-email .form-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-family: myFont;
  }

  .container-email .container-body {
    flex: 0.6;
    z-index: 1;
    border-radius: 5px;
    height: 100%;
    display: grid;
    place-content: center;
    padding: 15px;
    box-sizing: border-box;
    font-family: myFont;

    .sub-container-body {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 10px;
      font-family: myFont;
      .login-goToLogin {
        display: none;
        @media (max-width: 600px) {
          display: inline;
          border: 2px solid rgb(35, 150, 250);
          background-color: white;
          color: rgb(35, 150, 250);
          font-family: myFont;
        }
      }

      h3 {
        width: 100%;
        margin-left: 25px;
        font-family: myFont;
      }
      #email {
        background: #eee;
        border: none;
        padding: 14px 20px;
        outline: none;
        border-radius: 20px;
        text-align: center;
        border: 1px solid rgb(206, 188, 202);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        font-family: myFont;

        .fa-envelope {
          color: grey;
        }
      }
    }
  }
  .container-email .page-empty {
    flex: 0.4;
    border-radius: 5px;
    background-image: ${`url(${Photo})`};
    height: 100%;
    display: grid;
    place-content: center;
    padding: 15px;
    font-family: myFont;
    @media (max-width: 600px) {
      display: none;
      /* flex: 0; */
    }

    .page {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 20px;
      font-family: myFont;
      .Login {
        font-size: 15px;
      }
    }
  }

  button {
    border: 1px solid;
    width: 160px;
    height: 45px;
    border-radius: 50px;
    background: rgb(8, 121, 261);
    color: white;
    font-weight: 600;
    font-size: 12px;
    cursor: pointer;
    font-family: myFont;
    margin-top: 15px;
  }
  .container-email p {
    color: gray;
    margin: 15px;
    font-size: 15px;
    font-family: myFont;
  }
  input {
    border: none;
    outline: none;
    background: transparent;
    font-family: myFont;
  }

  i {
  }

  .sub-container-body button:hover {
    background: rgb(4, 110, 172);
  }
  .page-empty p {
    color: white;
    margin: 7px;
    text-align: center;
    font-size: 15px;
    letter-spacing: 1px;
    font-family: myFont;
  }
`;
