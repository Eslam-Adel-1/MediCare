import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { changeUserName, changeUserPhoto } from "../features/user/userSlice";
import toast, { Toaster } from "react-hot-toast";

const Profile = () => {
  //===========================================================

  const user = useSelector((state) => state.user.value);
  const [showChangeName, setShowChangeName] = useState(false);
  const [newName, setNewName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [requestResponse, setRequestResponse] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const dispatch = useDispatch();

  //===========================================================

  const fetchApi = async () => {
    if (newName !== "") {
      setSpinner(true);
      try {
        const response = await fetch(
          `https://clinicserver-production.up.railway.app/api/users/${user.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              Name: `${newName}`,
            }),
          }
        );
        const responseResult = await response.json();
        setRequestResponse(!requestResponse);
        if (responseResult.msg === "update succesfully") {
          toast.success(responseResult.msg);
          dispatch(changeUserName(newName));
        }
        toast.error(responseResult.msg);
        setNewName("");
      } catch (err) {
        toast.error(err.message);
      }
    } else {
      toast.error("The Field Is Empty");
    }
  };

  //=======================================================================
  const fetchApiPhoto = async () => {
    if (photo) {
      setSpinner(true);
      try {
        const formData = new FormData();
        formData.append("image", photo);
        const response = await fetch(
          `https://clinicserver-production.up.railway.app/api/users/uplodePhoto/${user.id}`,
          {
            method: "POST",
            body: formData,
          }
        );
        const responseResult = await response.json();
        toast.success(responseResult.msg);
        setRequestResponse(!requestResponse);
        dispatch(changeUserPhoto(responseResult.profilePhoto.url));
      } catch (err) {
        toast.error(err.message);
      }
    } else {
      toast.error("An Error Occured");
      setRequestResponse(!requestResponse);
    }
  };

  useEffect(() => {
    setSpinner(false);
  }, [requestResponse]);

  //===========================================================

  return (
    <MainSection>
      <Toaster />
      {spinner && (
        <div className="spinner-container">
          <CircularProgress className="spinner" />
        </div>
      )}

      <div className="Profile">
        <Avatar src={user.userPhoto} className="Profile-avatar" />
        <div className="profile-text">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>
      <div className="profile-buttons">
        <Button
          className="container-sidebar-buttons"
          variant="outlined"
          onClick={() => {
            setPhoto(null);
            setShowChangeName(true);
          }}
        >
          Change Name
        </Button>
        <Button className="container-sidebar-buttons" variant="outlined">
          <label
            htmlFor="change-photo"
            onClick={() => {
              setShowChangeName(false);
            }}
          >
            Change Profile Picture
          </label>
          <input
            type="file"
            onChange={(e) => {
              setPhoto(e.target.files[0]);
            }}
            id="change-photo"
            style={{ display: "none" }}
            accept=".png, .jpg, .jpeg"
          />
        </Button>
      </div>
      {/* //=========================================================== */}
      {showChangeName && (
        <div className="ChangeNameContainer">
          <FormControl sx={{ m: 1, width: "20ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              New Name
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type="text"
              endAdornment={<InputAdornment position="end"></InputAdornment>}
              label="New Password"
              onChange={(e) => {
                setNewName(e.target.value);
              }}
              value={newName}
            />
          </FormControl>
          {/* //=========================================================== */}
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
      )}
      {photo && (
        <div className="upload-Photo-Container">
          <Button
            className="Upload-Photo"
            variant="contained"
            onClick={() => {
              fetchApiPhoto();
            }}
          >
            Upload Photo
          </Button>
        </div>
      )}
    </MainSection>
  );
};

//====================================================================

export default Profile;

const MainSection = styled.div`
  margin-top: 20px;

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
    z-index: 9999999999999999999;
    .spinner {
      color: white;
    }
  }
  .upload-Photo-Container {
    display: grid;
    place-content: center;
    .Upload-Photo {
    }
  }
  .ChangeNameContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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

//====================================================================
