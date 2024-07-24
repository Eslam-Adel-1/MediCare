import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Profile from "../Components/Profile";
import ResetPassword from "../Components/ResetPassword";
import DeleteAccount from "../Components/DeleteAccount";
import Attention from "../Components/Attention";
import Rate_Us from "../Components/Rate_Us";
import PrivacyComponent from "../Components/PrivacyComponent";
import { useSelector } from "react-redux";

//================================================================

const ProfilePage = () => {
  const [profile, setProfile] = useState(true);
  const [resetPassword, setResetPassword] = useState(false);
  const [deleteAccount, setDeleteAccount] = useState(false);
  const [attention, setAttention] = useState(false);
  const [rateUs, setRateUs] = useState(false);
  const [privacy, setPrivacy] = useState(false);

  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const showProfile = () => {
    setProfile(true);
    setResetPassword(false);
    setDeleteAccount(false);
    setAttention(false);
    setRateUs(false);
    setPrivacy(false);
  };

  const showResetPassword = () => {
    setProfile(false);
    setResetPassword(true);
    setDeleteAccount(false);
    setAttention(false);
    setRateUs(false);
    setPrivacy(false);
  };

  const showDeleteAccount = () => {
    setProfile(false);
    setResetPassword(false);
    setDeleteAccount(true);
    setAttention(false);
    setRateUs(false);
    setPrivacy(false);
  };

  const showAttention = () => {
    setProfile(false);
    setResetPassword(false);
    setDeleteAccount(false);
    setRateUs(false);
    setAttention(true);
    setPrivacy(false);
  };

  const showRateUs = () => {
    setProfile(false);
    setResetPassword(false);
    setDeleteAccount(false);
    setAttention(false);
    setRateUs(true);
    setPrivacy(false);
  };

  const showPrivacy = () => {
    setProfile(false);
    setResetPassword(false);
    setDeleteAccount(false);
    setAttention(false);
    setRateUs(false);
    setPrivacy(true);
  };

  return (
    <MainSection>
      <div className="Container">
        <div className="container-sidebar">
          <div className="sidebar-info">
            <Avatar src={user.userPhoto} className="sidebar-avatar" />
            <div>
              <h2 className="sidebar-title">{user.name}</h2>
              <p>{user.email}</p>
            </div>
          </div>
          <ul>
            <Button
              className="container-sidebar-buttons"
              variant="text"
              onClick={showProfile}
            >
              <li>Profile</li>
            </Button>
            <Button
              className="container-sidebar-buttons"
              variant="text"
              onClick={showResetPassword}
            >
              <li>Reset Password</li>
            </Button>
            <Button
              className="container-sidebar-buttons"
              variant="text"
              onClick={showDeleteAccount}
            >
              <li>Delete Account</li>
            </Button>
            <Button
              className="container-sidebar-buttons"
              variant="text"
              onClick={showAttention}
            >
              <li>Attention</li>
            </Button>
            <Button
              className="container-sidebar-buttons"
              variant="text"
              onClick={showPrivacy}
            >
              <li>Privacy</li>
            </Button>
            <Button
              className="container-sidebar-buttons"
              variant="text"
              onClick={showRateUs}
            >
              <li>Rate Us</li>
            </Button>
          </ul>
        </div>
        {/* //============================================================================ */}
        <div className="container-info">
          {profile ? (
            <Profile />
          ) : resetPassword ? (
            <ResetPassword />
          ) : deleteAccount ? (
            <DeleteAccount />
          ) : attention ? (
            <Attention />
          ) : rateUs ? (
            <Rate_Us />
          ) : privacy ? (
            <PrivacyComponent />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div class="custom-shape-divider-bottom-1712619373">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div class="custom-shape-divider-top-1712619556">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </MainSection>
  );
};

export default ProfilePage;

const MainSection = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  display: grid;
  place-content: center;
  background-color: rgb(35, 150, 250);
  overflow: hidden;
  padding: 50px 0px;

  .custom-shape-divider-bottom-1712619373 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-bottom-1712619373 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 231px;
    transform: rotateY(180deg);
  }

  .custom-shape-divider-bottom-1712619373 .shape-fill {
    fill: #d9d9d9;
  }
  //==================================================================================

  .custom-shape-divider-top-1712619556 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-top-1712619556 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 500px;
    transform: rotateY(180deg);
  }

  .custom-shape-divider-top-1712619556 .shape-fill {
    fill: #d9d9d9;
  }

  //==================================================================================

  .Container {
    border: 1px grey solid;
    background-color: white;
    margin: 40px 100px 40px 100px;
    max-width: 800px;
    min-height: 470px;
    border-radius: 15px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    font-family: myFont;
    z-index: 100;

    @media (max-width: 2400px) and (min-width: 950px) {
      width: 900px;
      height: 500px;
    }
    @media (max-width: 950px) {
      flex-direction: column;
      padding: 50px 20px;
      margin: 40px 50px 40px 50px;
    }
    @media (max-width: 550px) {
      flex-direction: column;
      padding: 50px 20px;
      margin: 40px 30px 40px 30px;
    }
    @media (max-width: 400px) {
      flex-direction: column;
      padding: 50px 20px;
      margin: 40px 15px 40px 15px;
    }

    .container-sidebar {
      flex: 0.3;
      width: 100%;
      height: 100%;
      border-right: 1px grey solid;
      padding: 50px;
      box-sizing: border-box;
      @media (max-width: 900px) {
        flex: 0.2;
        border-bottom: 1px grey solid;
        border-right: none;
      }
      @media (min-width: 880px) and (max-width: 950px) {
        flex: 0.1;
        border-bottom: 1px grey solid;
        border-right: none;
      }

      .container-sidebar-buttons {
        font-family: myFont;
      }
      .sidebar-info {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        div {
          color: grey;
          h2 {
            color: black;
            font-family: myFont;
            font-size: 16px;
          }
          p {
            font-size: 13px;
          }
        }
        .sidebar-avatar {
          height: 60px;
          width: 60px;
          border: 2px rgb(35, 150, 250) solid;
          margin-right: 15px;

          h2 {
            font-size: 12px;
          }
        }
      }
      ul {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        @media (max-width: 950px) {
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding-inline-start: 0px;
        }

        .container-sidebar-buttons {
          width: fit-content;
          margin-top: 15px;
          li {
            list-style-type: none;
            width: fit-content;
            text-align: start;
          }
        }
      }
    }
    .container-info {
      flex: 0.7;
      display: grid;
      place-content: center;
      max-width: 100%;
      height: 100%;

      @media (max-width: 950px) {
        flex: 1;
      }

      .Rate-Us {
        padding: 25px;
        font-family: myFont;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
        textarea {
          resize: none;
          border: 2px grey solid;
          border-radius: 10px;
          padding: 10px;
          min-width: 100%;
          min-height: 100px;
          box-sizing: border-box;
        }
        h1 {
          color: rgb(35, 150, 250);
        }
        p {
          text-align: center;
          letter-spacing: 1px;
          margin-bottom: 15px;
          @media (max-width: 950px) and (min-width: 590px) {
            padding-left: 50px;
            padding-right: 50px;
          }
        }
      }

      .attention-section {
        ul {
          li {
            margin: 15px;
          }
        }
      }

      .delete-account {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        p {
          padding: 15px;
          text-align: center;
        }
        .delete-account-button {
          background-color: #ff3333;
          margin-top: 15px;
        }
      }
      .reset-password {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;

        .reset-password-inputs {
          p {
            margin-bottom: 10px;
          }
        }
      }

      .profile-buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
        margin: 25px;
        .container-sidebar-buttons {
          font-family: myFont;
        }
      }

      .Profile {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .profile-text {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          h2 {
            margin: 5px;
          }
          p {
            color: grey;
          }
        }
        .Profile-avatar {
          height: 100px;
          width: 100px;
          border: 2px rgb(35, 150, 250) solid;
          margin-bottom: 20px;
        }
      }
    }
    .predict-button {
      display: flex;
      align-items: center;
      justify-content: center;

      .button {
        margin-bottom: 10px;
        background-color: #4de185;
        width: fit-content;
        padding: 5px 40px;
        font-family: myFont;
      }
    }
    .TextField {
      margin-bottom: 15px;
      font-family: myFont;
    }
    h1 {
      text-align: center;
      margin-top: 20px;
      margin-bottom: 20px;
      color: grey;
      span {
        color: #4de185;
      }
    }
  }
`;
