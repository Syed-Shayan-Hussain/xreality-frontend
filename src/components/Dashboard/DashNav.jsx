import React, { useState } from "react";
import {  FaBell, FaUserCircle, FaCog  } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Flag from "react-world-flags";  // Import Flag component
import { FaSearch } from "react-icons/fa";
const DashNav = () => {
  const [isOpen, setIsOpen] = useState(false); // Country select dropdown
  const [selectedCountry, setSelectedCountry] = useState("CAN"); // Default country
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // User menu dropdown
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu dropdown

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false); // Close the dropdown after selection
  };

  const toggleUserDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="flex justify-between max-w-screen bg-white items-center py-4 px-6">
      {/* Search Bar */}
      <div className="flex items-center md:ml-5 gap-4">
      <div className="relative w-48 sm:w-80">
        <input
          type="text"
          placeholder="Search something"
          className="w-full p-2 pl-10 rounded-lg border border-gray-200 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
      </div>
    </div>
  

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden flex items-center gap-4">
        <button
          onClick={toggleMobileMenu}
          className="text-gray-800 text-2xl focus:outline-none"
        >
         <GiHamburgerMenu/>
        </button>
      </div>

      {/* Country Select, Notifications, and User Icon */}
      <div className="hidden md:flex items-center gap-4">
        {/* Country Dropdown */}
        <div className="flex items-center space-x-2">
                <div className="relative inline-block text-left">
                    {/* Selected Item (button to toggle dropdown) */}
                    <div
                        onClick={toggleDropdown}
                        className="flex items-center shadow-md p-2 rounded-full space-x-2 cursor-pointer text-gray-800 font-semibold"
                    >
                        {/* Country Flag and Code */}
                        <Flag
                            code={selectedCountry} // Show the flag based on selected country code
                            alt={selectedCountry}
                            className="w-6 h-6 rounded-full" // Small circular flag
                        />
                        <span>{selectedCountry}</span>
                        <FaChevronDown className="text-gray-500" size={12} />
                    </div>

                    {/* Country Dropdown */}
                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                            {/* Country List - Clicking on a country updates the selected country */}
                            <div
                                onClick={() => handleCountrySelect("CAN")}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                                <Flag code="CAN" alt="Canada" className="w-5 h-5 mr-2 inline-block rounded-full" />
                                CAN
                            </div>
                            <div
                                onClick={() => handleCountrySelect("USA")}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                                <Flag code="USA" alt="USA" className="w-5 h-5 mr-2 inline-block rounded-full" />
                                USA
                            </div>
                            {/* You can add more countries here in the same format */}
                        </div>
                    )}
                </div>
            </div>
        {/* Notifications */}
        <Link to="/dashboard/notification">
          <div className="w-12 h-12 rounded-full bg-white shadow-md flex justify-center items-center">
            <FaBell className="text-primary text-[20px] mx-2" />
          </div>
        </Link>

        {/* Settings */}
        <Link to="/dashboard/settings">
          <div className="w-12 h-12 rounded-full bg-white shadow-md flex justify-center items-center">
            <FaCog className="text-primary text-[20px] mx-2" />
          </div>
        </Link>

        {/* User Avatar and Dropdown */}
        <div className="relative">
          <button
            onClick={toggleUserDropdown}
            className="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 focus:ring-4 focus:ring-gray-100 dark:text-white"
            type="button"
          >
            <span className="sr-only">Open user menu</span>
            {/* User Avatar */}
            <FaUserCircle className="text-primary mx-2 text-4xl" />
            Bonnie Green
            <FaChevronDown className="w-2.5 h-2.5 ms-3" aria-hidden="true" />
          </button>

          {/* User Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow z-10 dark:bg-gray-700 dark:divide-gray-600">
              <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div className="font-medium">Pro User</div>
                <div className="truncate">name@flowbite.com</div>
              </div>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <a
                    href="/"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
              </ul>
              <div className="py-2">
                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 right-0 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <div className="px-4 py-2">
            <div onClick={() => handleCountrySelect("CAN")} className="flex items-center space-x-2 hover:bg-gray-100 cursor-pointer">
              <Flag code="CAN" alt="Canada" className="w-5 h-5 mr-2 inline-block rounded-full" />
              <span>CAN</span>
            </div>
            <div onClick={() => handleCountrySelect("USA")} className="flex items-center space-x-2 hover:bg-gray-100 cursor-pointer">
              <Flag code="USA" alt="USA" className="w-5 h-5 mr-2 inline-block rounded-full" />
              <span>USA</span>
            </div>
          </div>
          <div className="py-2">
            <Link to="/dashboard/notification" className="block px-4 py-2 hover:bg-gray-100">Notifications</Link>
            <Link to="/dashboard/settings" className="block px-4 py-2 hover:bg-gray-100">Settings</Link>
            <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Sign out</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashNav;
