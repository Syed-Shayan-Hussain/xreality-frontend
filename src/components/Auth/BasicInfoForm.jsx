// src/components/BasicInfoForm.js
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";
const BasicInfoForm = () => {
    const [gender, setGender] = useState("male");

    return (
        <div className="w-full min-h-screen mx-auto p-8">
            <div className="max-w-md mx-auto w-[90%]">
                {/* Header */}
                <h2 className="text-[28px] font-bold text-gray-800 ">Hello, Welcome to XReality!</h2>
                <p className="text-gray-500  my-2">Hang in there, just a few formalities to go!</p>

                {/* Progress Bar */}
                <div className="flex flex-col justify-center items-center mt-4 mb-8">
                    <div className="flex w-full max-w-md items-center">
                        {/* Circle 1 */}
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary">
                            <div className="w-6 h-6 rounded-full "></div>
                        </div>

                        {/* Line 1 - Responsive */}
                        <span className="flex-grow h-[4px] bg-primary min-w-0"></span>

                        {/* Circle 2 */}
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary">
                            <div className="w-6 h-6 rounded-full bg-white"></div>
                        </div>

                        {/* Line 2 - Responsive */}
                        <span className="flex-grow h-[4px] bg-gray-300 min-w-0"></span>

                        {/* Circle 3 */}
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-300">
                            <div className="w-6 h-6 rounded-full bg-white"></div>
                        </div>
                    </div>

                    <div className="flex justify-between w-full max-w-md text-xs text-gray-500 mt-2">
                        <span>Account Info</span>
                        <span>Basic Info</span>
                        <span>Finish Setup</span>
                    </div>
                </div>

                {/* Form Fields */}
                <form>
                    <div className="flex gap-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </div>

                    <div className="flex gap-2 mt-4">
                        <input
                            type="text"
                            placeholder="DD"
                            className="w-1/3 px-4 py-3 border border-gray-300 rounded-full text-center focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                        <input
                            type="text"
                            placeholder="MM"
                            className="w-1/3 px-4 py-3 border border-gray-300 rounded-full text-center focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                        <input
                            type="text"
                            placeholder="YYYY"
                            className="w-1/3 px-4 py-3 border border-gray-300 rounded-full text-center focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </div>

                    <div className="flex items-center  rounded-full border mt-4  w-full">
                        <button
                            type="button"
                            onClick={() => setGender("male")}
                            className={`flex-1 py-4 rounded-full   font-medium transition-all duration-300 ${gender === "male" ? "bg-primary text-white" : "text-gray-400"
                                }`}
                        >
                            Male
                        </button>
                        <button
                            type="button"
                            onClick={() => setGender("female")}
                            className={`flex-1 py-4 rounded-full  font-medium transition-all duration-300 ${gender === "female" ? "bg-primary text-white" : "text-gray-400"
                                }`}
                        >
                            Female
                        </button>
                    </div>
                    <div className="relative w-full mt-4">
      <PhoneInput
        country={"ca"} // Default country
        placeholder="XXXXXXXXXX"
        inputStyle={{
          width: "100%",
          paddingLeft: "4rem", // Space for the flag and code dropdown
          paddingRight: "1rem",
          paddingTop: "1.75rem",
          paddingBottom: "1.75rem",
          borderRadius: "9999px", // Full rounded
          borderColor: "#D1D5DB", // Gray border
          fontSize: "1rem",
          color: "#333",
          outline: "none",
          transition: "border-color 0.2s, box-shadow 0.2s",
        }}
        buttonStyle={{
          position: "absolute",
          left: "1rem",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "transparent",
          border: "none",
          padding: "0",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
        }}
        dropdownStyle={{
          borderRadius: "0.5rem",
          overflow: "hidden",
        }}
        containerClass="w-full" // For responsiveness
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "4rem",
          transform: "translateY(-50%)",
          fontSize: "1rem",
          color: "#6B7280", // Gray text
        }}
      >

      </div>
    </div>

                    <input
                        type="text"
                        placeholder="School Name"
                        className="w-full px-4 py-3 mt-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                    />

                    <select
                        className="w-full px-4 py-3 mt-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-500"
                        required
                    >
                        <option value="">-Select Curriculum-</option>
                        {/* Add more options as necessary */}
                    </select>

                    <select
                        className="w-full px-4 py-3 mt-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-500"
                        required
                    >
                        <option value="">-Select Grade-</option>
                        {/* Add more options as necessary */}
                    </select>
                <Link to='/auth/verification'>
                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-4 rounded-full font-semibold mt-6"
                    >
                        Continue
                    </button></Link>
                </form>

                {/* Footer */}
                <p className="mt-8 text-sm text-start text-gray-500">
            By creating an account, you agree to our <Link to="/terms" className="text-purple-500 font-medium hover:underline">Terms & Conditions</Link> and <Link to="/privacy" className="text-purple-500 font-medium hover:underline">Privacy Policy</Link>.
          </p>
            </div>
        </div>
    );
};

export default BasicInfoForm;
