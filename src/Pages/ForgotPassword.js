import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CircularProgress from "@mui/material/CircularProgress";
import pattern1 from "../assets/images/pattern1.png";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import logo from "../assets/images/logo2.png";

const ForgotPassword = () => {
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();
  const [spinner, setSpinner] = useState(false);
  const [requestResponse, setRequestResponse] = useState(false);

  //================================================================

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
        setUserEmail("");
        setRequestResponse(!requestResponse);
        toast.error(responseResult.msg);
      } catch (err) {
        toast.error(err.message);
      }
    } else {
      toast.error("There Are Empty Fields ");
    }
  };

  useEffect(() => {
    setSpinner(false);
  }, [requestResponse]);

  //================================================================

  return (
    <MainSection>
      <div className="medicare-page-logo">
        <img src={logo} alt="MediCare" />
        <h3>MediCare</h3>
      </div>
      <Toaster />
      {spinner && (
        <div className="spinner-container">
          <CircularProgress className="spinner" />
        </div>
      )}

      {/* //================================================================ */}

      <div className="Container">
        <div className="ContainerRightLeft">
          <div className="right">
            <div className="right-container">
              <h2>Welcome Back !</h2>
              <h6>Don't have an account ? ... You Can Register Now</h6>
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
                <h2>Reset Password</h2>
              </div>
              {/* //========================================================= */}
              <p>Type Your Email To Receive A Reset Password Link</p>
              {/* //========================================================= */}
              <div className="inputs">
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
              </div>
              <Button
                className="SignUp-button"
                variant="contained"
                onClick={() => {
                  fetchApi();
                }}
              >
                Reset
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainSection>
  );
};

export default ForgotPassword;

const MainSection = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  place-content: center;
  position: relative;

  .medicare-page-logo {
    position: fixed;
    top: 0;
    left: 0;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    img {
      height: 37px;
      object-fit: cover;
    }
    h3 {
      font-family: myFont;
      font-weight: 900;
      color: rgba(35, 150, 250);
    }
  }

  .go3958317564 {
    font-size: small;
    font-family: myFont;
    font-weight: 600;
    letter-spacing: 1px;
  }

  .spinner-container {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: grid;
    place-content: center;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 10000;
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
    @media (max-width: 710px) {
      border: none;
    }
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
      @media (max-width: 710px) {
        display: none;
      }

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
