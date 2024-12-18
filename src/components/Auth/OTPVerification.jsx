import React, { useState } from "react";
import { Link } from "react-router-dom";
const OTPVerification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {  // Only allows numbers
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Focus the next input field if a number is entered
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleResendCode = () => {
    // Logic to resend the OTP code
    alert("Resend OTP Code");
  };

  return (
    <div className="w-full mx-auto max-h-screen  h-screen p-8">
      <div className="mx-auto w-[90%] max-w-md">
        <h2 className="text-[28px] mx-auto font-bold text-gray-800">OTP Verification</h2>
        <p className="text-gray-500 mx-auto my-4">We have sent a 4-digit verification code to your email address <span className="font-medium text-gray-800">abc.xyz@gmail.com</span>.</p>

        {/* OTP Input Fields */}
        <div className="flex gap-3 justify-center my-8">
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

        {/* Resend Code Option */}
        <p className="text-gray-500 text-center mt-4">
          Didn’t receive code?{" "}
          <button
            onClick={handleResendCode}
            className="text-primary font-medium"
          >
            Resend it
          </button>
        </p>

        {/* Reset Password Button */}

          <Link className="" to='/auth/reset'>
          <button
            type="submit"
            className="w-full bg-primary text-white py-4 rounded-full font-semibold mt-48"
          >
            Reset Password
          </button></Link>
      

        {/* Footer Links */}
   
          <p className="mt-12 text-sm  text-gray-500">
            By creating an account, you agree to our <Link to="/terms" className="text-purple-500 font-medium hover:underline">Terms & Conditions</Link> and <Link to="/privacy" className="text-purple-500 font-medium hover:underline">Privacy Policy</Link>.
          </p>
      </div>
    </div>
  );
};

export default OTPVerification;
