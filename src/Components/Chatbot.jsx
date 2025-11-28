// src/Chatbot.jsx
import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I'm your assistant. How can I help you?" },
  ]);
  const [input, setInput] = useState("");

  const botResponses = {
    hello: "Hi there! How can I assist you today?",
    hi: "Hello! Need any help?",
    pricing: "Our pricing plans start from $99/month. Want details?",
    contact: "You can reach us at contact@example.com",
    services: "We provide web development, AI solutions, and UI/UX design.",
    default: "Sorry, I didn't understand that. Can you try rephrasing?",
  };

  const handleSend = () => {
    if (!input) return;
    const userMessage = { sender: "user", text: input };
    const key = input.toLowerCase().trim();
    const reply = botResponses[key] || botResponses.default;
    const botMessage = { sender: "bot", text: reply };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">💬 Chat with us</div>
      <div className="chatbot-messages">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`chat-message ${msg.sender === "user" ? "user" : "bot"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
