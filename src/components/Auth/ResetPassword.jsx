import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset submission here
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <div className="w-full h-screen mx-auto p-8">
      <div className="mx-auto w-[90%] max-w-md">
        <h2 className="text-[28px] mx-auto font-bold text-gray-800">
          Reset Password
        </h2>
        <p className="text-gray-500 mx-auto my-4">
          Choose a new password to sign-in
        </p>

        <form className="flex flex-col w-full justify-start" onSubmit={handleSubmit}>
          {/* Create Password Field */}
          <div className="relative w-full mt-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create Password"
              className="w-full px-4 py-4 border rounded-full outline-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-gray-400"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Confirm Password Field */}
          <div className="relative w-full mt-4">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full px-4 py-4 border rounded-full outline-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span
              onClick={toggleConfirmPasswordVisibility}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-gray-400"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="h-8" /> {/* Spacer for layout consistency */}

          <Link to="/auth/otp">
            <button
              type="submit"
              className="w-full bg-primary text-white py-4 rounded-full font-semibold mt-40"
            >
              Send Verification Code
            </button>
          </Link>

          <p className="mt-12 text-sm text-gray-500">
            By creating an account, you agree to our{" "}
            <Link to="/terms" className="text-purple-500 font-medium hover:underline">
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-purple-500 font-medium hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
