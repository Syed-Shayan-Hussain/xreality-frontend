import React from "react";
import { FaTimes, FaCopy } from "react-icons/fa";

const QrModal = ({ isOpen, onClose, qrCodeLink }) => {
  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(qrCodeLink);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm w-full">
        <div className="flex justify-end items-center mb-2">
         
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>
            <h2 className="text-lg font-bold text-center mb-5 text-purple-600">Scan QR Code</h2>
        <div className="flex flex-col items-center mb-4">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com"
            alt="QR Code"
            className="rounded-md w-60 shadow-md mb-4"
          />
          <div className="flex items-center border rounded-full p-2 w-full justify-between">
            <p className="text-gray-600 truncate">{qrCodeLink}</p>
            <button
              onClick={handleCopyLink}
              className="text-purple-600 hover:text-purple-800"
            >
              <FaCopy />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrModal;
