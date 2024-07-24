import React, { useEffect } from "react";
import styled from "styled-components";

const NotFoundPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainSection>
      <div className="Container">
        <h1>404</h1>
        <h2>Page Not Found</h2>
      </div>
    </MainSection>
  );
};

export default NotFoundPage;

const MainSection = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  place-content: center;
  .Container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: grey;
    font-family: myFont;
    margin-top: -100px;
    h1 {
      font-size: 130px;
      color: rgb(35, 150, 250);
    }
    h2 {
      letter-spacing: 2px;
      font-size: 50px;
    }
  }
`;
