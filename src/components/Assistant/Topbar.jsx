import React from "react";

function TopBar() {
  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-white shadow-sm">
      <input
        type="text"
        placeholder="Search something"
        className="bg-gray-100 rounded px-4 py-2 w-1/3 focus:outline-none"
      />
      <div className="flex items-center space-x-4">
        <button className="text-primary">🔔</button>
        <button className="text-primary">⚙️</button>
        <div className="bg-purple-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
          CS
        </div>
      </div>
    </div>
  );
}

export default TopBar;
