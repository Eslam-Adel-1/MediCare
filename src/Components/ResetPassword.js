import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);
  const [userPassword, setUserPassword] = useState("");
  const [userPassword2, setUserPassword2] = useState("");
  const [userPassword3, setUserPassword3] = useState("");
  const [requestResponse, setRequestResponse] = useState(false);
  const [apiResponse, setApiResponse] = useState("");
  const [spinner, setSpinner] = useState(false);

  const user = useSelector((state) => state.user.value);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
  const handleClickShowPassword3 = () => setShowPassword3((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  console.log(userPassword);
  console.log(user);
  //======================================================================
  const fetchApi = async () => {
    if (
      userPassword !== "" &&
      userPassword2 !== "" &&
      userPassword3 !== "" &&
      userPassword2 === userPassword3
    ) {
      setSpinner(true);
      try {
        const response = await fetch(
          `https://clinicserver-production.up.railway.app/api/users/${user.id}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              oldPassword: `${userPassword}`,
              password: `${userPassword2}`,
            }),
          }
        );
        const responseResult = await response.json();
        console.log(responseResult);
        setApiResponse(responseResult);
        setRequestResponse(!requestResponse);
        setUserPassword("");
        setShowPassword2("");
        setShowPassword3("");
      } catch (err) {
        console.error(err);
      }
    } else {
      if (userPassword2 !== userPassword3) {
        setRequestResponse(!requestResponse);
        setApiResponse("Passwords Don't Match");
      } else {
        setRequestResponse(!requestResponse);
        setApiResponse("There Are Empty Fields");
      }
    }
  };

  useEffect(() => {
    setSpinner(false);
  }, [apiResponse]);

  //================================================================================

  return (
    <MainSection>
      {spinner ? (
        <div className="spinner-container">
          <CircularProgress />
        </div>
      ) : (
        <></>
      )}
      {requestResponse ? (
        <div className="request-response">
          <div className="request-response-container">
            <h1>Information</h1>
            {apiResponse?.message ? (
              <p>{apiResponse.message}</p>
            ) : (
              <p>{apiResponse}</p>
            )}
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
      <div className="reset-password">
        <h1>Reset Password</h1>
        <div className="reset-password-inputs">
          <p> Type Your Old Password</p>
          <FormControl sx={{ m: 1, width: "20ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Old Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={userPassword}
              onChange={(e) => {
                setUserPassword(e.target.value);
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Old Password"
            />
          </FormControl>
        </div>
        {/* //=============================================================== */}
        <div className="reset-password-inputs">
          <p>Type Your New Password</p>
          <FormControl sx={{ m: 1, width: "20ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              New Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword2 ? "text" : "password"}
              value={userPassword2}
              onChange={(e) => {
                setUserPassword2(e.target.value);
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword2}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword2 ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="New Password"
            />
          </FormControl>
        </div>
        {/* //============================================================================ */}
        <div className="reset-password-inputs">
          <p>Type New Password Again</p>
          <FormControl sx={{ m: 1, width: "20ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Confirn Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword3 ? "text" : "password"}
              value={userPassword3}
              onChange={(e) => {
                setUserPassword3(e.target.value);
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword3}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword3 ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirm New Password"
            />
          </FormControl>
        </div>
        <Button
          className="container-sidebar-buttons"
          variant="contained"
          onClick={() => {
            fetchApi();
          }}
        >
          Confirm
        </Button>
      </div>
    </MainSection>
  );
};

export default ResetPassword;

const MainSection = styled.div`
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
`;
