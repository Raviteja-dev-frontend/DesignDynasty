// src/ChatbotToggle.jsx
import React, { useState } from "react";
import Chatbot from "./Chatbot";
import "./ChatbotToggle.css";

const ChatbotToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <Chatbot />}
      <button
        className="chatbot-icon-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        💬
      </button>
    </>
  );
};

export default ChatbotToggle;
