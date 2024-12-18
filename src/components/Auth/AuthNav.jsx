import { FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Flag from 'react-world-flags';  // Import the Flag component
import logo from '../../assets/logo1.png';

const AuthNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("CAN");

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setIsOpen(false); // Close the dropdown after selection
    };

    return (
        <div className="flex w-full items-center justify-between px-6 py-4 border-gray-200 bg-white">
            {/* Left - Logo and Text */}
            <div className="flex items-center space-x-2">
                <Link to="/">
                <img src={logo} alt="XReality EDU Logo" className="h-8" />
                </Link>
            </div>

            {/* Right - Country Selector */}
            <div className="flex items-center space-x-2">
                <div className="relative inline-block text-left">
                    {/* Selected Item (button to toggle dropdown) */}
                    <div
                        onClick={toggleDropdown}
                        className="flex items-center space-x-2 cursor-pointer text-gray-800 font-semibold"
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
        </div>
    );
};

export default AuthNav;
