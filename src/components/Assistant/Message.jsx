// import logo from "../../assets/small_logo.png";
// import img1 from "../../assets/Group (8).png";
// import img2 from "../../assets/download.png";
// import img3 from "../../assets/Group (9).png";
// import { FaUserCircle } from "react-icons/fa";

// const Message = ({ message, time, isUser }) => {
//   // Function to render structured content as lists or plain text
//   const renderMessageContent = (text) => {
//     // Split text into parts based on line breaks or keywords (structured content)
//     const lines = text.split(/[\n\r]+/).filter((line) => line.trim() !== "");

//     // If the message contains multiple structured lines, render as a list
//     if (lines.length > 1) {
//       return (
//         <div>
//           <ul className="list-disc pl-4">
//             {lines.map((line, index) => (
//               <li key={index} className="mb-3 font-custom3">
//                 {line.trim()}
//               </li>
//             ))}
//           </ul>
//           {/* Icons below the response */}
//           <div className="flex space-x-4 mt-3">
//             <button className="flex items-center w-8 shadow-lg h-8 justify-center  space-x-1 rounded-full text-gray-500 hover:text-gray-700">
//            <img src={img1} alt="" className="w-4" />
//             </button>
//             <button className="flex items-center  w-8 shadow-lg h-8 justify-center space-x-1 rounded-full text-gray-500 hover:text-gray-700">
//             <img src={img3} alt="" className="w-4" />
//             </button>
//             <button className="flex items-center  w-8 shadow-lg h-8 justify-center space-x-1 rounded-full text-gray-500 hover:text-gray-700">
//             <img src={img2} alt="" className="w-4" />
//             </button>
//           </div>
//         </div>
//       );
//     }

//     // Otherwise, return plain text
//     return <p className="font-custom3">{text}</p>;
//   };

//   return (
//     <div> {isUser && (
//       <p className="text-sm text-center mb-8  text-gray-400 ">{time}</p>
//           )}
//     <div className={`flex items-start ${isUser ? "justify-end" : "justify-start"} mb-4`}>
//       {/* AI Avatar */}
      
      
//       {!isUser && (
//         <div className="flex-shrink-0 mr-4">
//           <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
//             <img src={logo} alt="AI Avatar" />
//           </div>
//         </div>
//       )}
       
//       {/* Message Bubble */}
//       <div className={`w-full ${isUser ? "text-right" : "text-left"}`}>
//         {/* Timestamp */}
       
//         <div
//           className={`p-4  rounded-xl ${
//             isUser
//               ? " text-gray-800 "
//               : " text-gray-800 "
//           }`}
//         >
//           {renderMessageContent(message)}
//         </div>
//       </div>

//       {/* User Avatar */}
//       {isUser && (
//         <div className="flex-shrink-0 ml-4">
//            <FaUserCircle className="text-primary mx-2 text-4xl" />
//         </div>
//       )}
//     </div>
//     </div>
//   );
// };



// export default Message;
import logo from "../../assets/small_logo.png";
import img1 from "../../assets/Group (8).png";
import img2 from "../../assets/download.png";
import img3 from "../../assets/Group (9).png";
import { FaUserCircle } from "react-icons/fa";
import QrModal from "./QrModal";
import { useState } from "react";

const Message = ({ message, time, isUser, type, extraContent }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Function to render structured or plain content
  const renderMessageContent = (text) => {
    const lines = text.split(/[\n\r]+/).filter((line) => line.trim() !== "");

    if (lines.length > 1) {
      return (
        <div>
          <ul className="list-disc pl-4">
            {lines.map((line, index) => (
              <li key={index} className="mb-3 font-custom3">
                {line.trim()}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return <p className="font-custom3">{text}</p>;
  };

  return (
    <div>
      {isUser && <p className="text-sm text-center mb-8 text-gray-400">{time}</p>}
      <QrModal
        isOpen={isModalOpen}
        onClose={closeModal}
        qrCodeLink="https://iframe.assets.com"
      />
      <div className={`flex items-start ${isUser ? "justify-end" : "justify-start"} mb-4`}>
        {/* Avatar */}
        {!isUser && (
          <div className="flex-shrink-0 mr-4">
            <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
              <img src={logo} alt="AI Avatar" />
            </div>
          </div>
        )}

        {/* Message Bubble */}
        <div className={`w-full ${isUser ? "text-right" : "text-left"}`}>
          <div
            className={`p-4 rounded-xl ${
              isUser ? "text-gray-800 " : "text-gray-800 "
            }`}
          >
            {/* Render Content Based on Type */}
            {type === "text" && renderMessageContent(message)}

            {/* Image Message */}
            {type === "image" && isUser && (
              <div className="flex flex-col items-end gap-4 p-2"> 
                 <img
                  src={extraContent?.image}
                  alt="User Upload"
                  className="rounded-lg shadow-md max-w-full w-48 h-48"
                />
                {message && <p className="font-custom3 mb-2">{message}</p>}
               
              </div>
            )}

            {/* AI Image or Content */}
            {type === "image" && !isUser && (
              <p className="font-custom3">Invalid image. AI does not upload images.</p>
            )}

            {/* New Message Type */}
            {type === "newType" && !isUser && (
              <div>
                <div className="flex flex-col  items-start mb-4">
                  <div className="flex items-center">
                    <img src={extraContent.image} alt="Illustration" className="w-48 h-48 mr-4" />
                    <div className="flex space-x-4 mt-3">
                      <button onClick={openModal} className="flex items-center p-4 shadow-lg h-8 justify-center rounded-full text-gray-500 hover:text-gray-700">
                        <img src={img1} alt="" className="w-4" /> Generate QR Code
                      </button>
                      <button className="flex items-center w-8 shadow-lg h-8 justify-center rounded-full text-gray-500 hover:text-gray-700">
                        <img src={img3} alt="" className="w-4" />
                      </button>
                      <button className="flex items-center w-8 shadow-lg h-8 justify-center rounded-full text-gray-500 hover:text-gray-700">
                        <img src={img2} alt="" className="w-4" />
                      </button>
                    </div>
                  </div>
                  <p className="font-custom3 font-medium text-gray-700">{message}</p>

                </div>
              </div>
            )}
            {type === "newType" && isUser && (
              <div>
                <div className="flex flex-col items-end mb-4">
                  <div className="flex items-center">
                    <img src={extraContent.image} alt="Illustration" className="w-48 h-48 mr-4" />
                    {/* <div className="flex space-x-4 mt-3">
                      <button className="flex items-center p-4 shadow-lg h-8 justify-center rounded-full text-gray-500 hover:text-gray-700">
                        <img src={img1} alt="" className="w-4" /> Generate QR Code
                      </button>
                      <button className="flex items-center w-8 shadow-lg h-8 justify-center rounded-full text-gray-500 hover:text-gray-700">
                        <img src={img3} alt="" className="w-4" />
                      </button>
                      <button className="flex items-center w-8 shadow-lg h-8 justify-center rounded-full text-gray-500 hover:text-gray-700">
                        <img src={img2} alt="" className="w-4" />
                      </button>
                    </div> */}
                  </div>
                  <p className="font-custom3 text-gray-700">{message}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* User Avatar */}
        {isUser && (
          <div className="flex-shrink-0 ml-4">
            <FaUserCircle className="text-primary mx-2 text-4xl" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
