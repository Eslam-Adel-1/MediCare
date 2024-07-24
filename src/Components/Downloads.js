import React from "react";
import styled from "styled-components";
import qr_code from "../assets/images/qr-code.png";
import MoGhalyQr from "../assets/images/MoGhalyQr.png";
import mockup_phone from "../assets/images/mockup-phone.png";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";
import { showApp } from "../features/show_app/show_appSlice";

const Downloads = () => {
  const show_app = useSelector((state) => state.show_app.value);
  const dispatch = useDispatch();

  return (
    <MainSection>
      <div className="appContainer">
        <div className="AppCont">
          <CloseIcon
            className="icon"
            onClick={() => {
              dispatch(showApp());
            }}
          />
          <img src={mockup_phone} alt="mockup_phone" />
          <div className="theAppContainer">
            <h1>Download Our App</h1>
            <p>
              Download our app now and experience the benefits of streamlined
              healthcare management at your fingertips.
            </p>
            <div className="downloads">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                alt="Google Play"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                alt="Apple Store"
              />
            </div>
          </div>
          <img src={qr_code} alt="Qr-Code" className="qr-code" />
        </div>
      </div>
    </MainSection>
  );
};

export default Downloads;

const MainSection = styled.div``;
