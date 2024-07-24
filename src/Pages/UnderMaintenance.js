import React, { useEffect } from "react";
import styled from "styled-components";

const UnderMaintenance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainSection>
      <div className="Container">
        <h3 className="main-title">We Will Be Back Soon</h3>
        <h5 className="sub-title">
          Server is under maintenance in the current time{" "}
        </h5>
        <h5 className="sub-title">
          We will be back soon , Thank you for your understanding
        </h5>
      </div>
    </MainSection>
  );
};

export default UnderMaintenance;

const MainSection = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  place-content: center;
  margin-right: 25px;
  padding: 15px;
  .Container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: grey;
    font-family: myFont;
    margin-top: -70px;
    .main-title {
      font-size: 60px;
      color: rgb(35, 150, 250);
      margin-bottom: 15px;
    }
    .sub-title {
      letter-spacing: 2px;
      font-size: 20px;
    }
  }
`;
