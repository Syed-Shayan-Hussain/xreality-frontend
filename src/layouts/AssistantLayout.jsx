import { useState } from "react";

import ChatArea from "../components/Assistant/ChatArea";


function AssitantLayout() {
  const [selectedSection, setSelectedSection] = useState("Home");
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([
        ...messages,
        { sender: "user", text: inputMessage },
        { sender: "ai", text: "This is a placeholder response from the AI." },
      ]);
      setInputMessage("");
    }
  };

  const handlePromptClick = (prompt) => {
    setInputMessage(prompt);
  };

  return (
    <div className="h-screen font-custom3">
      
      <div className="flex flex-col w-full">

        <ChatArea
          selectedSection={selectedSection}
          messages={messages}
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          onSendMessage={handleSendMessage}
          onPromptClick={handlePromptClick}
        />
      </div>
    </div>
  );
}

export default AssitantLayout;