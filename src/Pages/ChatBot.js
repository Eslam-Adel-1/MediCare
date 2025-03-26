import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import ChatBotLogo from "../assets/images/ChatBotLogo.png";
import MicIcon from "@mui/icons-material/Mic";
// import { useSpeechSynthesis } from "react-speech-kit";
import { useSelector } from "react-redux";
import SidebarChatBot from "../Components/SidebarChatBot";
import MenuIcon from "@mui/icons-material/Menu";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const ChatBot = () => {
  const Messagesss = useSelector((state) => state.chatbot_messages.value);
  const user = useSelector((state) => state.user.value);
  const [showSideBar, setShowSideBar] = useState(false);
  const [chats, setChats] = useState(Messagesss);
  const [apiResponse, setApiResponse] = useState("");
  const [showMuted, setShowMuted] = useState(false);
  const [text, setText] = useState("");
  const [directedPage, setDirectedPage] = useState("");
  // const { speak } = useSpeechSynthesis();
  const ref = useRef();

  //====================================================================

  const commands = [
    {
      command: ["Open *"],
      callback: (page) => setDirectedPage(page),
    },
  ];

  const { transcript } = useSpeechRecognition({ commands });

  console.log(transcript);
  //=====================================================================
  useEffect(() => {
    const addApiResponse = () => {
      if (apiResponse !== "") {
        try {
          setChats([
            ...chats,
            {
              uniqueId: Math.random,
              id: 1,
              message: apiResponse,
            },
          ]);
        } catch (err) {
          console.log(err);
        }
      } else {
        return;
      }
    };
    addApiResponse();
  }, [apiResponse]);

  //=============================================================================

  useEffect(() => {
    if (ref.current !== null) {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [chats]);

  //============================================================================

  useEffect(() => {
    const fetchData = async () => {
      if (transcript !== "") {
        try {
          const response = await fetch(process.env.REACT_APP_CHAT_BOT, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              msg: `${transcript}`,
            }),
          });

          const responseResult = await response.json();
          console.log(responseResult.text_response);
          setApiResponse(responseResult.text_response);

          setChats([
            ...chats,
            {
              uniqueId: Math.random,
              id: 2,
              message: transcript,
            },
          ]);
        } catch (err) {
          console.log(err);
        }
      }
    };
    fetchData();
  }, [transcript]);

  //=====================================================================

  const functionalityStop = () => {
    try {
      SpeechRecognition.stopListening();
      setShowMuted(!showMuted);
    } catch (err) {
      console.log(err);
    }
  };
  const functionalityStart = () => {
    try {
      SpeechRecognition.startListening();
      setShowMuted(!showMuted);
    } catch (err) {
      console.log(err);
    }
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition) {
    return null;
  }
  //====================================================================

  const fetchMessages = async () => {
    if (text !== "") {
      try {
        const response = await fetch(process.env.REACT_APP_CHAT_BOT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            msg: `${text}`,
          }),
        });

        const responseResult = await response.json();
        console.log(responseResult.text_response);
        setApiResponse(responseResult.text_response);
        setText("");

        setChats([
          ...chats,
          {
            uniqueId: Math.random,
            id: 2,
            message: text,
          },
        ]);
      } catch (err) {
        console.log(err);
      }
    } else {
      return;
    }
  };

  //=====================================================================
  return (
    <MainSection>
      <SidebarChatBot
        showSideBar={showSideBar}
        setShowSideBar={setShowSideBar}
      />
      <Right>
        <div className="Chatbot-Container">
          <div className="title-buttons">
            <MenuIcon
              className="Menu-Icon"
              onClick={() => {
                setShowSideBar(!showSideBar);
              }}
            />
            <div>
              <img src={ChatBotLogo} alt="chat-bot-image" />
              <h2>
                Medi<span>ChatBot</span>
              </h2>
            </div>
          </div>
          <MessagesSection>
            {chats.map((item) => {
              return (
                <div
                  className="Single-Chat_Container"
                  ref={ref}
                  key={item.uniqueId}
                >
                  {item.id === 1 ? (
                    <>
                      <Avatar className="Avatar-image" src={ChatBotLogo} />
                      <div
                        className={item.id === 1 ? "bot" : "user"}
                        // onClick={() => speak({ text: item.message })}
                      >
                        <p>{item.message}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className={item.id === 1 ? "bot" : "user"}
                        // onClick={() => speak({ text: item.message })}
                      >
                        <p>{item.message}</p>
                      </div>
                      <Avatar className="Avatar-image" src={user.userPhoto} />
                    </>
                  )}
                </div>
              );
            })}
          </MessagesSection>
          <form>
            {showMuted ? (
              <Button className="TheStopRecord" onClick={functionalityStop}>
                <MicIcon className="StopRecord" />
              </Button>
            ) : (
              <Button className="TheStartRecord" onClick={functionalityStart}>
                <MicIcon className="StartRecord" />
              </Button>
            )}
            <TextField
              id="outlined-basic"
              label="Type Something"
              variant="outlined"
              className="chatbot-input"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            ></TextField>
            <Button
              className="button-send-chatbot"
              disabled={text === "" ? true : false}
              onClick={() => {
                fetchMessages();
              }}
            >
              <SendIcon className="send-icon" />
            </Button>
          </form>
        </div>
      </Right>
    </MainSection>
  );
};

export default ChatBot;

const MainSection = styled.div`
  background-color: rgba(35, 150, 250);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
`;

const Right = styled.div`
  flex: 0.75;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  box-sizing: border-box;
  @media (max-width: 700px) {
    flex: 1;
  }

  .title-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.08);
    padding: 5px;
    @media (max-width: 700px) {
      justify-content: space-between;
    }

    .Menu-Icon {
      display: none;
      @media (max-width: 700px) {
        display: inline;
      }
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 700px) {
        margin-right: 200px;
      }
    }
    img {
      height: 50px;
      object-fit: contain;
      border: 1.5px white solid;
      border-radius: 50%;
      @media (max-width: 300px) {
        height: 40px;
      }
    }
    h2 {
      font-family: myFont;
      color: grey;
      @media (max-width: 300px) {
        font-size: 20px;
      }
      span {
        color: rgba(35, 150, 250);
        margin-left: 10px;
      }
    }
    .Chat-buttons {
      font-family: myFont;
      background-color: rgba(35, 150, 250);
    }
  }
  .Chatbot-Container {
    margin-top: 0px;
    border-radius: 10px;
    height: 100%;
    border: 1.5px rgba(35, 150, 250) solid;
    padding: 10px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: white;

    form {
      flex: 0.1;
      width: 100%;
      display: flex;
      align-items: center;
      gap: 15px;
      .button-send-chatbot {
        cursor: pointer;
      }
      .TheStopRecord {
        border-radius: 50%;
        padding: 10px 5px;
        margin-left: -10px;
        .StopRecord {
          font-size: 25px;
          background-color: red;
          color: white;
          padding: 10px;
          border-radius: 50%;
        }
      }
      .TheStartRecord {
        border-radius: 50%;
        padding: 10px 5px;
        margin-left: -10px;
        .StartRecord {
          font-size: 25px;
          background-color: rgba(35, 150, 250);
          color: white;
          padding: 10px;
          border-radius: 50%;
        }
      }

      .send-icon {
        font-size: 35px;
        color: grey;
        &:hover {
          color: rgba(35, 150, 250);
          cursor: pointer;
        }
      }
      .chatbot-input {
        width: 95%;
      }
    }
  }
`;

const MessagesSection = styled.div`
  font-family: myFont;
  flex: 0.9;
  position: relative;
  overflow-y: scroll;
  padding-bottom: 15px;
  padding-top: 15px;
  padding-right: 15px;

  .Single-Chat_Container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    .Avatar-image {
      margin-top: 8px;
    }
    .bot {
      background-color: #e5e5e5;
      width: fit-content;
      height: fit-content;
      border-radius: 15px 15px 15px 0px;
      box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.1);
      margin-right: auto;
      margin-top: 7px;
      cursor: pointer;

      p {
        padding: 8px;
        font-family: myFont;
        font-weight: 500;
        font-size: 15px;
        word-wrap: break-word;
      }
    }

    .user {
      color: white;
      background-color: rgb(35, 150, 250);
      width: fit-content;
      height: fit-content;
      border-radius: 15px 0px 15px 15px;
      box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.1);
      margin-left: auto;
      margin-top: 7px;
      cursor: pointer;

      p {
        padding: 8px;
        font-family: myFont;
        font-weight: 500;
        font-size: 15px;
        word-wrap: break-word;
      }
    }
  }
`;
