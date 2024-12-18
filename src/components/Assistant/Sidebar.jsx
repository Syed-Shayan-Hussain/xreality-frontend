import React from "react";

const Sidebar = ({ onSelectSection, selectedSection }) => {
  const sections = [
    "Home",
    "My Learning",
    "My Teachers",
    "My Resources",
    "My Schedule",
    "My Progress",
    "Homework Assistant",
    "My Chats",
  ];

  return (
    <div className="bg-white w-64 p-2 shadow-md">
      <div className="text-3xl font-bold text-primary mb-8">XReality</div>
      <nav>
        <ul className="space-y-4">
          {sections.map((section) => (
            <li
              key={section}
              onClick={() => onSelectSection(section)}
              className={`cursor-pointer p-2 rounded ${
                selectedSection === section
                  ? "bg-purple-100 text-primary font-semibold"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              {section}
            </li>
          ))}
        </ul>
      </nav>
      <button className="mt-10 bg-primary text-white py-2 px-4 rounded w-full flex items-center justify-center text-sm">
        Connect with us in case of any query
      </button>
    </div>
  );
};

export default Sidebar;
