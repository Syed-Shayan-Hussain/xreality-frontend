import React, { useState } from "react";
import { Link } from "react-router-dom";
const VerificationPage = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  return (
    <div className="flex flex-col max-w-lg   min-h-screen px-4 py-8">
      <h1 className="text-2xl font-bold text-start">
        Hello, Welcome to XReality!
      </h1>
      <p className="text-gray-500 mt-2 text-start">
        Hang in there, just a few formalities to go!
      </p>

      {/* Progress Bar */}
      <div className="flex flex-col justify-center mx-auto max-w-md w-full items-center mt-8 mb-8">
        <div className="flex w-full max-w-md items-center">
          {/* Circle 1 */}
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary">
            <div className="w-6 h-6 rounded-full "></div>
          </div>

          {/* Line 1 */}
          <span className="flex-grow h-[4px] bg-primary min-w-0 "></span>

          {/* Circle 2 */}
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary">
            <div className="w-6 h-6 rounded-full "></div>
          </div>

          {/* Line 2 */}
          <span className="flex-grow h-[4px] bg-primary min-w-0"></span>

          {/* Circle 3 */}
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary">
            <div className="w-6 h-6 rounded-full bg-white"></div>
          </div>
        </div>

        <div className="flex justify-between w-full max-w-md text-xs text-gray-500 mt-2">
          <span>Account Info</span>
          <span>Basic Info</span>
          <span>Finish Setup</span>
        </div>
      </div>

      {/* OTP Message */}
      <p className=" text-gray-500">
        We have sent a 4-digit verification code on your email address
        <span className="font-medium"> abc.xyz@gmail.com</span>.
      </p>

      {/* OTP Input Fields */}
      <div className="flex gap-3  justify-center my-8">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            value={digit}
            maxLength="1"
            onChange={(e) => handleChange(e, index)}
            className="w-20 h-16 border border-gray-300 rounded-full text-center text-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        ))}
      </div>

      {/* Resend Code Link */}
      <p className="text-center text-gray-500">
        Didn’t receive code?{" "}
        <span className="text-primary cursor-pointer">Resend it</span>
      </p>

      {/* Finish Button */}
      <Link to='/select-avatar/'>
      <button className="w-full mt-24 mx-auto px-4 py-3 bg-primary text-white rounded-full font-medium hover:bg-purple-700 transition duration-200">
        Finish Account Setup
      </button>
      </Link>
      <p className="mt-8 text-sm text-start text-gray-500">
            By creating an account, you agree to our <Link to="/terms" className="text-purple-500 font-medium hover:underline">Terms & Conditions</Link> and <Link to="/privacy" className="text-purple-500 font-medium hover:underline">Privacy Policy</Link>.
          </p>
    </div>
  );
};

export default VerificationPage;
