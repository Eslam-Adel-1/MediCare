import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import ChatBot from "./Pages/ChatBot";
import LoadingPage from "./Pages/LoadingPage";
import FagPage from "./Pages/FagPage";
import DiabetesPage from "./Pages/DiabetesPage";
import Diabetes_Test from "./Pages/Diabetes_Test";
import Breast_Cancer_Test from "./Pages/Breast_Cancer_Test";
import BreastCancerPage from "./Pages/BreastCancerPage";
import ParkinsonPage from "./Pages/ParkinsonPage";
import Parkinson_Test from "./Pages/Parkinson_Test";
import Heart_Attack_Test from "./Pages/Heart_Attack_Test";
import HeartAttackPage from "./Pages/HeartAttackPage";
import MicroChatBot from "./Components/MicroChatBot";
import UserHomePage from "./Pages/UserHomePage";
import ProfilePage from "./Pages/ProfilePage";
import NotFoundPage from "./Pages/NotFoundPage";
import ProtectedRoute from "./Components/ProtectedRoute";
import NavBarSideBar from "./Components/NavBarSideBar";
import { useState } from "react";
import LoginPage2 from "./Pages/LoginPage2";
import Register2 from "./Pages/Register2";
import ForgotPassword2 from "./Pages/ForgotPassword2";
import styled from "styled-components";

function App() {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <MainApp showSideBar={showSideBar}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {showSideBar ? (
                  <NavBarSideBar
                    showSideBar={showSideBar}
                    setShowSideBar={setShowSideBar}
                  />
                ) : (
                  <></>
                )}
                <Navbar
                  showSideBar={showSideBar}
                  setShowSideBar={setShowSideBar}
                />
                <HomePage
                  showSideBar={showSideBar}
                  setShowSideBar={setShowSideBar}
                />
                <MicroChatBot />
              </>
            }
          />
          {/* //================================================= */}
          <Route
            path="/login"
            element={
              <>
                <LoginPage2 />
              </>
            }
          />
          {/* //================================================= */}
          <Route
            path="/register"
            element={
              <>
                <Register2 />
              </>
            }
          />{" "}
          {/* //================================================= */}
          <Route
            path="/forgotpassword"
            element={
              <>
                <ForgotPassword2 />
              </>
            }
          />{" "}
          {/* //================================================= */}
          <Route
            path="/help"
            element={
              <>
                {showSideBar ? (
                  <NavBarSideBar
                    showSideBar={showSideBar}
                    setShowSideBar={setShowSideBar}
                  />
                ) : (
                  <></>
                )}
                <Navbar
                  showSideBar={showSideBar}
                  setShowSideBar={setShowSideBar}
                />
                <FagPage />
                <MicroChatBot />
              </>
            }
          />
          {/* //================================================= */}
          <Route element={<ProtectedRoute />}>
            <Route
              path="/settings"
              element={
                <>
                  {showSideBar ? (
                    <NavBarSideBar
                      showSideBar={showSideBar}
                      setShowSideBar={setShowSideBar}
                    />
                  ) : (
                    <></>
                  )}
                  <Navbar
                    showSideBar={showSideBar}
                    setShowSideBar={setShowSideBar}
                  />
                  <ProfilePage />
                  <MicroChatBot />
                </>
              }
            />
          </Route>
          {/* //================================================= */}
          <Route element={<ProtectedRoute />}>
            <Route
              path="/diagnosis"
              element={
                <>
                  {showSideBar ? (
                    <NavBarSideBar
                      showSideBar={showSideBar}
                      setShowSideBar={setShowSideBar}
                    />
                  ) : (
                    <></>
                  )}
                  <Navbar
                    showSideBar={showSideBar}
                    setShowSideBar={setShowSideBar}
                  />
                  <UserHomePage />
                  <MicroChatBot />
                </>
              }
            />
          </Route>
          {/* //================================================= */}
          <Route element={<ProtectedRoute />}>
            <Route
              path="/diagnosis/diabetes"
              element={
                <>
                  {showSideBar ? (
                    <NavBarSideBar
                      showSideBar={showSideBar}
                      setShowSideBar={setShowSideBar}
                    />
                  ) : (
                    <></>
                  )}
                  <Navbar
                    showSideBar={showSideBar}
                    setShowSideBar={setShowSideBar}
                  />
                  <DiabetesPage />
                  <MicroChatBot />
                </>
              }
            />
          </Route>
          {/* //================================================= */}
          <Route element={<ProtectedRoute />}>
            <Route
              path="/diagnosis/parkinson"
              element={
                <>
                  {showSideBar ? (
                    <NavBarSideBar
                      showSideBar={showSideBar}
                      setShowSideBar={setShowSideBar}
                    />
                  ) : (
                    <></>
                  )}
                  <Navbar
                    showSideBar={showSideBar}
                    setShowSideBar={setShowSideBar}
                  />
                  <ParkinsonPage />
                  <MicroChatBot />
                </>
              }
            />
          </Route>
          {/* //================================================= */}
          <Route element={<ProtectedRoute />}>
            <Route
              path="/diagnosis/breast_cancer"
              element={
                <>
                  {showSideBar ? (
                    <NavBarSideBar
                      showSideBar={showSideBar}
                      setShowSideBar={setShowSideBar}
                    />
                  ) : (
                    <></>
                  )}
                  <Navbar
                    showSideBar={showSideBar}
                    setShowSideBar={setShowSideBar}
                  />
                  <BreastCancerPage />
                  <MicroChatBot />
                </>
              }
            />
          </Route>
          {/* //================================================= */}
          <Route element={<ProtectedRoute />}>
            <Route
              path="/diagnosis/heart_attack"
              element={
                <>
                  {showSideBar ? (
                    <NavBarSideBar
                      showSideBar={showSideBar}
                      setShowSideBar={setShowSideBar}
                    />
                  ) : (
                    <></>
                  )}
                  <Navbar
                    showSideBar={showSideBar}
                    setShowSideBar={setShowSideBar}
                  />
                  <HeartAttackPage />
                  <MicroChatBot />
                </>
              }
            />
          </Route>
          {/* //================================================= */}
          <Route element={<ProtectedRoute />}>
            <Route
              path="/diagnosis/heart_attack/test"
              element={
                <>
                  {showSideBar ? (
                    <NavBarSideBar
                      showSideBar={showSideBar}
                      setShowSideBar={setShowSideBar}
                    />
                  ) : (
                    <></>
                  )}
                  <Navbar
                    showSideBar={showSideBar}
                    setShowSideBar={setShowSideBar}
                  />
                  <Heart_Attack_Test />
                  <MicroChatBot />
                </>
              }
            />
          </Route>
          {/* //================================================= */}
          <Route element={<ProtectedRoute />}>
            <Route
              path="/diagnosis/breast_cancer/test"
              element={
                <>
                  {showSideBar ? (
                    <NavBarSideBar
                      showSideBar={showSideBar}
                      setShowSideBar={setShowSideBar}
                    />
                  ) : (
                    <></>
                  )}
                  <Navbar
                    showSideBar={showSideBar}
                    setShowSideBar={setShowSideBar}
                  />
                  <Breast_Cancer_Test />
                  <MicroChatBot />
                </>
              }
            />
          </Route>
          {/* //================================================= */}
          <Route element={<ProtectedRoute />}>
            <Route
              path="/diagnosis/parkinson/test"
              element={
                <>
                  {showSideBar ? (
                    <NavBarSideBar
                      showSideBar={showSideBar}
                      setShowSideBar={setShowSideBar}
                    />
                  ) : (
                    <></>
                  )}
                  <Navbar
                    showSideBar={showSideBar}
                    setShowSideBar={setShowSideBar}
                  />
                  <Parkinson_Test />
                  <MicroChatBot />
                </>
              }
            />
          </Route>
          {/* //================================================= */}
          <Route element={<ProtectedRoute />}>
            <Route
              path="/diagnosis/diabetes/test"
              element={
                <>
                  {showSideBar ? (
                    <NavBarSideBar
                      showSideBar={showSideBar}
                      setShowSideBar={setShowSideBar}
                    />
                  ) : (
                    <></>
                  )}
                  <Navbar
                    showSideBar={showSideBar}
                    setShowSideBar={setShowSideBar}
                  />
                  <Diabetes_Test />
                  <MicroChatBot />
                </>
              }
            />
          </Route>
          {/* //================================================= */}
          <Route element={<ProtectedRoute />}>
            <Route
              path="/chatbot"
              element={
                <>
                  <ChatBot />
                </>
              }
            />
          </Route>
          {/* //================================================= */}
          <Route
            path="/loading"
            element={
              <>
                <LoadingPage />
              </>
            }
          />
          {/* //================================================= */}
          <Route
            path="*"
            element={
              <>
                {showSideBar ? (
                  <NavBarSideBar
                    showSideBar={showSideBar}
                    setShowSideBar={setShowSideBar}
                  />
                ) : (
                  <></>
                )}
                <Navbar
                  showSideBar={showSideBar}
                  setShowSideBar={setShowSideBar}
                />
                <NotFoundPage />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </MainApp>
  );
}

export default App;

const MainApp = styled.div`
  max-height: ${(props) => (props.showSideBar ? `100vh` : ``)};
  overflow: ${(props) => (props.showSideBar ? `hidden` : ``)};
`;
