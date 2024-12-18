import React, { useState } from "react";
import { FaHome, FaBook, FaBookmark, FaChartBar, FaCertificate, FaFileInvoiceDollar, FaHeadphonesAlt, FaCog, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { label: "Dashboard", icon: <FaHome /> },
    { label: "My Course", icon: <FaBook /> },
    { label: "Saved Course", icon: <FaBookmark /> },
    { label: "Report", icon: <FaChartBar /> },
    { label: "Explore Course", icon: <FaBook /> },
    { label: "Certificate", icon: <FaCertificate /> },
    { label: "Transaction", icon: <FaFileInvoiceDollar /> },
  ];

  const supportItems = [
    { label: "Help Center", icon: <FaHeadphonesAlt /> },
    { label: "Settings", icon: <FaCog /> },
  ];

  return (
    <div className={`flex flex-col ${isCollapsed ? 'w-20' : 'w-64'} h-full bg-white shadow-lg transition-all duration-300`}>
      <div className="flex items-center justify-between p-4">
        {!isCollapsed && <h2 className="text-2xl font-bold text-primary">T-Course</h2>}
        <button onClick={toggleCollapse} className="text-gray-500">
          {isCollapsed ? <FaArrowRight /> : <FaArrowLeft />}
        </button>
      </div>
      
      <nav className="flex-1 w-full p-3 mx-auto gap-3">
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActiveItem(item.label)}
            className={`flex items-center space-x-2 w-full my-2 p-3 rounded-full transition-all duration-200 hover:bg-purple-50 hover:text-primary ${activeItem === item.label ? 'bg-purple-100 text-primary' : 'text-gray-700'}`}
          >
            <span className="text-lg">{item.icon}</span>
            {!isCollapsed && <span className="text-sm">{item.label}</span>}
          </button>
        ))}

        <hr className="my-4 mx-3 border-gray-300" />

        {supportItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActiveItem(item.label)}
            className={`flex items-center space-x-2 w-full p-3 rounded-full transition-all duration-200 hover:bg-purple-50 ${activeItem === item.label ? 'bg-purple-100 text-primary' : 'text-gray-700'}`}
          >
            <span className="text-lg">{item.icon}</span>
            {!isCollapsed && <span className="text-sm">{item.label}</span>}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
