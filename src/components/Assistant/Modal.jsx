// JoinRoomModal.js
import React from "react";

const JoinRoomModal = ({ isOpen, onClose, onJoinRoom }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Join Room</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter room ID"
            className="border border-gray-300 p-2 rounded w-full"
            id="roomId"
          />
        </div>
        <div className="flex justify-between items-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => {
              const roomId = document.getElementById("roomId").value;
              onJoinRoom(roomId);
              onClose();
            }}
          >
            Join
          </button>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinRoomModal;
