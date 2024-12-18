import React, { useState } from "react";
import {
  FaHome,
  FaBook,
  FaBookmark,
  FaChartBar,
  FaUser,
  FaCalendarAlt,
  FaHeadphonesAlt,
  FaComments,
  FaBars,
} from "react-icons/fa";
import logo from "../../assets/logo2.png";
import img from "../../assets/onlineLearning.png";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [isOpen, setIsOpen] = useState(false); // State to control sidebar visibility

  const menuItems = [
    { link:'/dashboard',label: "Home", icon: <FaHome /> },
    { link:'/dashboard/learning',label: "My Learning", icon: <FaBook /> },
    { link:'/dashboard/assistant',label: "My Teachers", icon: <FaUser /> },
    { link:'/dashboard/assistant',label: "My Resources", icon: <FaBookmark /> },
    { link:'/dashboard/assistant',label: "My Schedule", icon: <FaCalendarAlt /> },
    { link:'/dashboard/assistant',label: "My Progress", icon: <FaChartBar /> },
    { link:'/dashboard/assistant',label: "Homework Assistant", icon: <FaHeadphonesAlt /> },
    { link:'/dashboard/assistant',label: "My Chats", icon: <FaComments /> },
  ];

  return (
    <>

    <div className="hidden  lg:w-64 z-50 h-screen font-custom3 bg-white text-gray-500 sticky top-0 lg:flex flex-col items-center py-6 shadow-2xl">
      {/* Logo and Title */}
      <div className="flex items-center space-x-3 mb-8">
        <Link to="/">
        <img src={logo} alt="" className="w-48"/>
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 w-full">
        {menuItems.map((item) => (
          <Link
          key={item.label}
          to={item.link}
          onClick={() => setActiveItem(item.label)}
          className={`flex items-center w-full px-6 py-3 text-left text-sm  ${
            activeItem === item.label
            ? "bg-purple-100 text-primary border-r-4 border-purple-600"
            : "hover:bg-purple-50"
          }`}
          >
            <span className="mr-3 text-lg">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Help Section */}
      <div className="relative  w-full px-6 mb-4">
  {/* Image positioned at the top center of the button */}
  <img 
    src={img} 
    alt="Help Icon" 
    className="absolute top-[-80%] left-1/2 transform -translate-x-1/2 "
    />
  
  {/* Button with padding to ensure text alignment */}
  <button className="flex flex-col items-center justify-center w-full pt-12 pb-2  text-center text-white bg-primary rounded-lg shadow-md hover:bg-purple-500">
    Connect with us in
    <br /> case of any query
  </button>
</div>
    </div>
    <div className="relative lg:hidden">
      {/* Sidebar */}
      {isOpen && (
        <div
          className="fixed inset-y-0 left-0 w-64 bg-white text-gray-500 flex flex-col items-center py-6 shadow-2xl z-50"
          style={{ maxHeight: "100vh" }}
        >
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-8">
            <img src={logo} alt="Logo" className="w-48" />
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 w-full">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.link}
                onClick={() => setActiveItem(item.label)}
                className={`flex items-center px-6 py-3 text-left text-sm ${
                  activeItem === item.label
                    ? "bg-purple-100 text-primary border-r-4 border-purple-600"
                    : "hover:bg-purple-50"
                }`}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Help Section */}
          <div className="relative w-full px-6 mb-4">
            <img
              src={img}
              alt="Help Icon"
              className="absolute top-[-80%] left-1/2 transform -translate-x-1/2"
            />
            <button className="flex flex-col items-center justify-center w-full pt-12 pb-2 text-center text-white bg-primary rounded-lg shadow-md hover:bg-purple-500">
              Connect with us in
              <br /> case of any query
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-6 left-4 z-50 bg-primary text-white rounded-full p-3 shadow-md hover:bg-purple-500 transition-transform`}
      >
        <FaBars />
      </button>
    </div>
    </>
  );
};

export default Sidebar;
