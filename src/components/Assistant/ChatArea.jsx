import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import Message from "./Message"; // Assuming you have a Message component for individual messages
import { FaLink, FaPaperPlane } from 'react-icons/fa';
import '../../App.css';
import DashNav from "../Dashboard/DashNav";
import img from '../../assets/Group (7).png'
import img2 from '../../assets/GroupAI.png'
import heart from '../../assets/heart.png'
import attachfile from '../../assets/attachfile.png'
import send from '../../assets/paperplane.png'
import FileUpload from "./FileUpload";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const socket = io("http://localhost:5000");
const ChatArea = ({
  selectedSection,

  inputMessage,
  setInputMessage,
  onSendMessage,
  onPromptClick,
}) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);
  const [image, setImage] = useState(null);
 
  const savedUsername = 'shayan';
  const savedRoom = 1;
  const prompts = [
    "Help me with Homework",
    "Reasoning Questions",
    "Critical Thinking",
    "AI-Generated Answers",
    "Guided Learning",
    "Assignment Writer",
    "More",
  ];
  const [text, setText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Physics');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLinkDropdownOpen, setIsLinkDropdownOpen] = useState(false);
  const [selectedLinkOption, setSelectedLinkOption] = useState("Link");
  const linkOptions = ["Document", "Image"];
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to socket server");
    });
  
    return () => {
      socket.off("connect");
    };
  }, []);
  
  useEffect(() => {
  if (messagesEndRef.current) {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }
}, [messages]);
//
  // const [messages, setMessages] = useState([
  //   //   { text: "Why is the electric field zero outside the conductor?", time: "12:41 AM", isUser: true },
  //   //   {
  //   //   text:
  //   //     "The electric field inside a conductor is zero because the charges inside the conductor arrange themselves to cancel out the externally applied electric field. This is due to the following reasons:\nFree electrons: Conductors have many free electrons that can move around, which reduces the repulsion between them.\nEquilibrium: Charges move to the surface of the conductor to minimize repulsion and reach a state of equilibrium.\nNet charge: The total charge of a conductor is zero because the charges on the surface cancel each other out.\nPerpendicular field: When an electric field is applied to a conductor, the free charges move until the field is perpendicular to the surface.",
  //   //   time: "12:41 AM",
  //   //   isUser: false,
  //   // },
  //   // {
  //   //   text: "Thank you for the explanation!",
  //   //   time: "12:42 AM",
  //   //   isUser: true,
  //   // },
  //   // {
  //   //   id: 1,
  //   //   message: "Hello! How can I assist you today?",
  //   //   time: "12:00 PM",
  //   //   isUser: false,
  //   //   type: "default", // Default message type
  //   // },
  //   // {
  //   //   id: 2,
  //   //   message: "Can you explain how the heart works?",
  //   //   time: "12:01 PM",
  //   //   isUser: true,
  //   //   type: "image", // Default message type
  //   //   extraContent: {
  //   //     image: heart, // URL to the image
  //   //   }

  //   // },
  //   // {
  //   //   id: 3,
  //   //   message: "The heart is a powerful pump at the centre of the circulatory system.",
  //   //   time: "12:02 PM",
  //   //   isUser: false,
  //   //   type: "newType", // New message type
  //   //   extraContent: {
  //   //     image: heart, // URL to the image
  //   //   },
  //   // },
  //   // {
  //   //   id: 4,
  //   //   message: "Got it! Thank you for the explanation.",
  //   //   time: "12:03 PM",
  //   //   isUser: true,
  //   //   type: "default",

  //   // },
  // ]);
  // useEffect(() => {
  //   const savedUsername = 'shayan';
  //   const savedRoom = 1;
  
  //   if (savedUsername && savedRoom) {
  //     setUsername(savedUsername);
  //     setRoom(savedRoom);
  //     socket.emit("joinRoom", { username: savedUsername, room: savedRoom });
  
  //     // Fetch previous messages
  //     axios.get(`http://localhost:5000/api/fetch-messages/${savedRoom}`).then((res) => {
  //       const messagesWithUserFlag = res.data.map((msg) => ({
  //         ...msg,
  //         isUser: msg.username === savedUsername,  // Compare username to determine if it's the current user
  //       }));
  //       setMessages(messagesWithUserFlag); // Set messages with the isUser field
  //       console.log(messages)
  //     });
  
  //     const messageListener = (newMessage) => {
  //       const updatedMessage = {
  //         ...newMessage,
  //         isUser: newMessage.username === savedUsername, // Determine if the message is from the current user
  //       };
  //       setMessages((prevMessages) => [...prevMessages, updatedMessage]);
  //     };
  //     socket.on("receiveMessage", (response) => {
  //       console.log("New message received:", response);
      
  //       const updatedMessage = {
  //         username: "Server", // Assuming server responses have this username
  //         message: response,
  //         sent_at: new Date().toLocaleTimeString(),
  //         isUser: false,
  //       };
      
  //       setMessages((prevMessages) => [...prevMessages, updatedMessage]);
  //     });
      
      
  
  //     return () => {
  //       socket.off("message", messageListener);
  //     };
  //   } else {
  //     navigate("/"); 
  //   }
  // }, [navigate]);
  useEffect(() => {
    // Connect to WebSocket server
    socket.on("connect", () => {
      console.log("Connected to socket server");
      socket.emit("join", { username: savedUsername, room: savedRoom });
    });
  
    // Listen for previous messages after joining
    socket.on("previousMessages", (fetchedMessages) => {
      const updatedMessages = fetchedMessages.map((msg) => ({
        ...msg,
        isUser: msg.username === savedUsername,
      }));
      setMessages(updatedMessages);
    });
  
    // Listen for new real-time messages
    socket.on("receiveMessage", (response) => {
      console.log("Received real-time message:", response);
  
      const updatedMessage = {
        username: "Server",
        message: response,
        sent_at: new Date().toLocaleTimeString(),
        isUser: false,
      };
  
      setMessages((prevMessages) => [...prevMessages, updatedMessage]);
    });
  
    return () => {
      socket.off("connect");
      socket.off("previousMessages");
      socket.off("receiveMessage");
    };
  }, [savedUsername, savedRoom]);
  
  const sendMessage = async (e) => {
    e.preventDefault(); // Prevent form reload
    console.log("Sending message...");
  
 
      let filePath = "";
  
      // Handle image upload
      // if (image) {
      //   const formData = new FormData();
      //   formData.append("file", image);
  
      //   try {
      //     const response = await axios.post("http://localhost:5000/upload", formData, {
      //       headers: { "Content-Type": "multipart/form-data" },
      //     });
      //     filePath = response.data.filePath;
      //     console.log("File uploaded successfully:", filePath);
      //   } catch (error) {
      //     console.error("Image upload error:", error);
      //     alert("Image upload failed. Please try again.");
      //     return; // Exit function if upload fails
      //   }
      // }

      const updatedMessage = {
        room: savedRoom,
        username: savedUsername,
        message: message,
       
        isUser: true,
      };
  
      setMessages((prevMessages) => [...prevMessages, updatedMessage]);
      // Emit message with optional filePath
      socket.emit("sendMessage", {
        room: savedRoom,
        username: savedUsername,
        message: message,

      });
      console.log("Sending message...");
  
      setMessage(""); // Clear text input
      setImage(null); // Clear image input
    }

  
  
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    // Add user message
    const userMessage =   {
      id: 2,
      message: "Can you explain how the heart works?",
      time: "12:01 PM",
      isUser: true,
      type: "image", // Default message type
      extraContent: {
        image: heart, // URL to the image
      } };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputMessage("");

    // Simulate AI response
    setTimeout(() => {
      const aiMessage =  {
        id: 3,
        message: "The heart is a powerful pump at the centre of the circulatory system.",
        time: "12:02 PM",
        isUser: false,
        type: "newType", // New message type
        extraContent: {
          image: heart, // URL to the image
        },
      }
    
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    }, 1000); // 1-second delay for AI response
  };

  const categories = ['Physics', 'Chemistry', 'Math', 'Biology'];
  const handleLinkOptionSelect = (option) => {
    setSelectedLinkOption(option);
    setIsLinkDropdownOpen(false);
  };
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  // Calculate word count based on inputMessage
  const wordCount = inputMessage.trim() ? inputMessage.trim().split(/\s+/).length : 0;

  return (



    <div className="flex flex-col h-screen max-w-7xl  md:w-full mx-auto md:ml-auto   pb-10 bg-white overflow-hidden">
      <DashNav />
      <div className="flex flex-col  mt-4 items-center">
        {messages.length === 0 && selectedLinkOption === 'Link' && (
          <div>
            <h1 className="text-2xl font-semibold mb-2 text-center text-gray-800">Ask me anything</h1>
            <p className="text-gray-500 mb-8 text-center">Choose a prompt and start your journey!</p>
          </div>
        )}
        {/* Only show prompts if there are no messages */}
        {messages.length === 0 && selectedLinkOption === 'Link' && (
          <div className="grid grid-cols-2  sm:grid-cols-3 gap-4 md:gap-6 my-8">
            {prompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => onPromptClick(prompt)}
                className={`py-1 px-2 max-md:text-sm md:py-3 md:px-6 rounded-full border hover:bg-primary hover:text-white ${inputMessage === prompt
                    ? "bg-primary text-white"
                    : "border-gray-400 text-gray-400"
                  } ${index === prompts.length - 1 && prompts.length % 3 !== 0
                    ? "col-start-2"
                    : ""
                  }`}
              >
                {prompt}
              </button>
            ))}
          </div>
        )}
      </div>
      { selectedLinkOption  ==='Link' && (
      <div className="flex-1 px-10 overflow-y-auto mb-2 p-4">
        {messages.map((msg) => (
          <Message
            key={msg.id}
            message={msg.message}
            time={msg.sent_at}
            isUser={msg.isUser}
            type={'text'}
            extraContent={msg.extraContent}
          />
        ))}
      </div>       )}

      {/* File Upload Section */}
      {selectedLinkOption === "Document" || selectedLinkOption === "Image" ? (
        <div className="my-4 relative py-10 mx-auto w-[90%]">
          <button
            
            className="absolute right-0 -top-4 cursor-pointer"
            onClick={() => handleLinkOptionSelect("Link")}
          >
            X
          </button>
          <FileUpload />
        </div>
      ) : null}
      {/* Input Section */}
      <div className="sticky max-sm:max-w-sm w-[90%] mx-auto mt-auto  bg-white p-4 border-t shadow-xl  rounded-xl border-gray-200">
        <div className="relative flex flex-col items-start rounded-xl w-full">
          <div className="relative flex items-center w-full">
            {inputMessage.length === 0 ? (
              <img
                src={img} // Replace with your image path
                alt="icon"
                className="absolute left-3 w-4 h-4 text-gray-500"
              />) : (<img
                src={img2} // Replace with your image path
                alt="icon"
                className="absolute left-3 w-4 h-4 text-gray-500"
              />)}
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder={"Ask AI anything or make a request"}
              className="flex-1 px-8 bg-transparent text-gray-700 outline-none w-full border-none focus:outline-none focus:ring-0 focus:appearance-none  placeholder-gray-500 text-sm md:text-base"
            />
          </div>
          <div className="relative flex justify-between items-center w-full mt-2">
            {/* Dropdown */}
            <div
              className="relative flex justify-around items-center gap-8 border border-purple-300 w-40  text-purple-700 rounded-full px-3 py-1.5 cursor-pointer select-none mr-2"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {selectedCategory}
              <span className="ml-2">&#9662;</span>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute bottom-full left-0 mt-2 bg-white  rounded-lg  shadow-lg w-40 z-10">
                  {categories.map((category) => (
                    <div
                      key={category}
                      className="px-4 py-2 hover:bg-purple-100 border-b border-gray-400 text-purple-700 cursor-pointer"
                      onClick={() => handleCategorySelect(category)}
                    >
                      {category}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Word Count */}
            <span className="text-gray-400 text-sm ml-auto mr-4 hidden md:inline">
              ({wordCount}/2000 words)
            </span>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <button
                  className="shadow-md flex items-center justify-center  text-purple-700 rounded-full p-3 hover:bg-purple-300 hover:text-white"
                  onClick={() => setIsLinkDropdownOpen(!isLinkDropdownOpen)}
                >
                  <img src={attachfile} alt="" />
                </button>

                {/* Link Dropdown Menu */}
                {isLinkDropdownOpen && (
                  <div className="absolute bottom-full right-0 mt-2 bg-white border px-[3px] rounded-lg shadow-lg w-28 z-10">
                    {linkOptions.map((option) => (
                      <div
                        key={option}
                        className="px-4 py-2 hover:bg-purple-100 text-gray-400 border-b border-gray-400 cursor-pointer"
                        onClick={() => handleLinkOptionSelect(option)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={sendMessage}
                className="shadow-md flex items-center justify-center  text-purple-700 rounded-full p-3 hover:bg-purple-300 hover:text-white"
              >
                <img src={send} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;





