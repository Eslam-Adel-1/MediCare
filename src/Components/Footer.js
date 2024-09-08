import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import logo from "../assets/images/logo2.png";

import styled from "styled-components";

export default function Footer() {
  return (
    <FooterSection>
      <div className="main-footer-container">
        <div className="medicare-page-logo">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              borderRadius: "50%",
            }}
          >
            <img src={logo} alt="MediCare" />
          </div>
          <h3>MediCare</h3>
        </div>
        <div className="list">
          <ul>
            <li className="header-cell">About</li>
            <li>Developers</li>
            <li>Website</li>
          </ul>
        </div>
        <div className="list">
          <ul>
            <li className="header-cell">Follow Us</li>
            <li>GitHub</li>
            <li>FaceBook</li>
          </ul>
        </div>
        <div className="list">
          <ul>
            <li className="header-cell">Legal</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
      <div className="second-footer-container">
        <h2>
          MediCare{" "}
          <span style={{ fontSize: "15px", marginLeft: "5px" }}>2024</span>
        </h2>
        <div className="icon-container">
          <BsDribbble />
          <BsFacebook />
          <BsTwitter />
          <BsGithub />
          <BsInstagram />
        </div>
      </div>
    </FooterSection>
  );
}

const FooterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .main-footer-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    .medicare-page-logo {
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      img {
        height: 40px;
        object-fit: cover;
        padding: 7px;
      }
      h3 {
        font-family: myFont;
        font-weight: 900;
        color: white;
      }
    }

    .list {
      ul {
        list-style-type: none;
        li {
          margin-bottom: 25px;
          font-family: myFont;
          color: white;
        }
        .header-cell {
          font-weight: 800;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
      }
    }
  }

  .second-footer-container {
    width: 100%;
    margin-top: 15px;
    border-top: 1px white solid;
    padding-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: white;
    font-family: myFont;
    .icon-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      font-size: 25px;
    }
  }
`;
