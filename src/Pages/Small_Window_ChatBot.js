import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import ChatBotLogo from "../assets/images/ChatBotLogo.png";
import { useSpeechSynthesis } from "react-speech-kit";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Small_Window_ChatBot = () => {
  const Messagesss = useSelector((state) => state.chatbot_messages.value);
  const [apiResponse, setApiResponse] = useState("");
  const [text, setText] = useState("");
  const [chatMessages, setChatMessages] = useState(Messagesss);
  const { speak } = useSpeechSynthesis();

  const ref = useRef();
  const navigate = useNavigate();

  //=====================================================================

  const fetchMessages = async () => {
    if (text !== "") {
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

      setChatMessages([
        ...chatMessages,
        {
          uniqueId: Math.random,
          id: 2,
          message: text,
        },
      ]);
    } else {
      return;
    }
  };

  //=====================================================================

  useEffect(() => {
    const addApiResponse = () => {
      if (apiResponse !== "") {
        setChatMessages([
          ...chatMessages,
          {
            uniqueId: Math.random,
            id: 1,
            message: apiResponse,
          },
        ]);
      } else {
        return;
      }
    };
    addApiResponse();
  }, [apiResponse]);

  useEffect(() => {
    if (ref.current !== null) {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [chatMessages]);

  return (
    <MainSection>
      <Header>
        <div>
          <img src={ChatBotLogo} />
        </div>
        <h5>Medi Bot</h5>
        <Button
          variant="outlined"
          className="ChatBot-Button"
          onClick={() => {
            navigate("/chatbot");
          }}
        >
          Open
        </Button>
      </Header>
      <MessagesSection>
        {chatMessages.map((item) => {
          return (
            <div
              ref={ref}
              key={item.uniqueId}
              className={item.id === 1 ? "bot" : "user"}
              onClick={() => speak({ text: item.message })}
            >
              <p>{item.message}</p>
            </div>
          );
        })}
      </MessagesSection>
      <InputSection>
        <input
          type="text"
          placeholder="Type SomeThing"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="send-bg">
          <Button
            className="button-send-chatbot"
            disabled={text === "" ? true : false}
            onClick={() => {
              fetchMessages();
            }}
          >
            <SendIcon className="send-icon" />
          </Button>
        </div>
      </InputSection>
    </MainSection>
  );
};

export default Small_Window_ChatBot;

const MainSection = styled.div`
  height: 335px;
  width: 230px;
  border-radius: 10px;
  background-color: white;
  position: fixed;
  bottom: 100px;
  right: 60px;
  z-index: 20000;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: -3px 3px 100px 1px rgba(0, 0, 0, 0.44);
  @media (max-height: 450px) {
    display: none;
  }
`;

//=====================================================================

const Header = styled.div`
  flex: 0.15;
  height: fit-content;
  color: white;
  font-family: myFont;
  background-color: rgb(35, 150, 250);
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 4px 10px 0.5px 10px;
  gap: 10px;

  .ChatBot-Button {
    font-family: myFont;
    font-size: 12px;
    font-weight: 700;
    color: white;
    border: none;
    &:hover {
      border: none;
    }
  }

  h5 {
    margin: 0px;
    text-transform: capitalize;
    color: white;
    font-size: 17px;
    letter-spacing: 1px;
  }
`;

//=====================================================================

const MessagesSection = styled.div`
  flex: 0.7;
  padding: 0px 8px 8px 8px;
  overflow-x: hidden;
  overflow-y: scroll;

  .button-send-chatbot {
    cursor: pointer;
  }

  &::-webkit-scrollbar {
    display: none;
  }
  .bot {
    color: white;
    background-color: rgb(35, 150, 250);
    width: fit-content;
    height: fit-content;
    border-radius: 15px 15px 15px 0px;
    margin-right: auto;
    margin-top: 12px;
    cursor: pointer;

    p {
      padding: 8px;
      font-family: myFont;
      font-weight: 500;
      font-size: 14px;
      word-wrap: break-word;
    }
  }

  .user {
    color: grey;
    background-color: white;
    width: fit-content;
    height: fit-content;
    border-radius: 15px 0px 15px 15px;
    margin-left: auto;
    margin-top: 12px;
    cursor: pointer;

    p {
      padding: 8px;
      font-family: myFont;
      font-weight: 500;
      font-size: 14px;
      word-wrap: break-word;
    }
  }
`;

const InputSection = styled.div`
  flex: 0.15;
  background-color: rgb(240, 240, 240);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0px 10px;
  input {
    outline: none;
    border: none;
    background: transparent;
    flex-grow: 1;
  }
  .send-bg {
    display: grid;
    place-content: center;
    padding: 3px;

    .sendIcon {
      color: gray;
      cursor: pointer;
      &:hover {
        color: rgba(0, 0, 0, 0.6);
      }
    }

    img {
      object-fit: contain;
      height: 30px;
      cursor: pointer;
      &:hover {
        transform: scale(110%);
      }
    }
  }
`;
