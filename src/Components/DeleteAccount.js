import Button from "@mui/material/Button";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector, useDispatch } from "react-redux";
import {
  changeUserEmail,
  changeUserId,
  changeUserName,
  changeUserPhoto,
} from "../features/user/userSlice";
import { useState } from "react";
import React, { useEffect } from "react";

const DeleteAccount = () => {
  const userInfo = useSelector((state) => state.user.value);
  const [apiResponse, setApiResponse] = useState("");
  const [requestResponse, setRequestResponse] = useState(false);

  const [spinner, setSpinner] = useState(false);
  const dispatch = useDispatch();

  const fetchApi = async () => {
    try {
      setSpinner(true);
      const response = await fetch(
        `https://clinicserver-production.up.railway.app/api/users/${userInfo.id}`,
        {
          method: "DELETE",
        }
      );
      const responseResult = await response.json();
      console.log(responseResult);
      setApiResponse(responseResult);
      dispatch(changeUserEmail(""));
      dispatch(changeUserId(""));
      dispatch(changeUserName(""));
      dispatch(changeUserPhoto(""));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    setSpinner(false);
  }, [apiResponse]);

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
            {apiResponse ? <p>{apiResponse.msg}</p> : <></>}
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
      <div className="delete-account">
        <h1>Warning</h1>
        <p>
          Before proceeding with deleting your account, please be aware that
          this action is permanent and cannot be undone. All of your data,
          including profile information, contacts, and any content you have
          posted, will be permanently deleted
        </p>
        <Button
          className="delete-account-button"
          variant="contained"
          onClick={() => {
            fetchApi();
          }}
        >
          Delete Account
        </Button>
      </div>
    </MainSection>
  );
};

export default DeleteAccount;

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
`;
