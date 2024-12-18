import React, { useState } from "react";

const MoodModal = ({ show, onClose }) => {
  const [selectedMood, setSelectedMood] = useState(null);

  const moods = [
    { label: "Happy", emoji: "😊" },
    { label: "Excited", emoji: "🤩" },
    { label: "Sad", emoji: "😢" },
    { label: "Angry", emoji: "😡" },
    { label: "Hurt", emoji: "💔" },
  ];

  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
  };

  if (!show) return null; // Don't render the modal if 'show' is false

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex text-center font-custom3 p-12 justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-lg max-w-xl  p-12 relative">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 bg-gray-500 text-white w-6 h-6 rounded-full flex items-center justify-center  text-xl"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Modal title */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          How are you feeling today?
        </h2>
        <p className="text-gray-400 font-medium mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>

        {/* Mood selection */}
        <h3 className="text-gray-400 font-medium mb-6">Select Your Mood:</h3>
        <div className="flex justify-between mb-6">
          {moods.map((mood) => (
            <div
              key={mood.label}
              className={`flex flex-col items-center p-3 rounded-lg  cursor-pointer transition-all ${
                selectedMood === mood.label
                  ? "bg-purple-600 text-white border-purple-600"
                  : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
              }`}
              onClick={() => handleMoodClick(mood.label)}
            >
              <div className="text-4xl mb-2">{mood.emoji}</div>
              <p className="text-sm font-medium">{mood.label}</p>
            </div>
          ))}
        </div>

        {/* Let's Go Button */}
        <button
          className={`w-full py-3 rounded-full mt-4 font-medium text-white ${
            selectedMood
              ? "bg-purple-600 hover:bg-purple-700"
              : "bg-purple-400 cursor-not-allowed"
          }`}
          disabled={!selectedMood}
          onClick={() => {
     
            onClose();
          }}
        >
          Let’s Go
        </button>
      </div>
    </div>
  );
};

export default MoodModal;
