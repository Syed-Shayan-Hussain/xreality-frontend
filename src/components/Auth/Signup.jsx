import React, { useState } from "react";
import { FaFacebook, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from '../../assets/Group (6).png';

const AuthForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <div className="w-full mx-auto min-h-screen p-8">
      <div className="max-w-md mx-auto w-[90%]">
        <h2 className="text-[28px] mx-auto  font-bold text-gray-800">
          Hello, Welcome Back to XReality!
        </h2>
        <p className="text-gray-500 mx-auto my-4">
          Enter your credentials to sign up!
        </p>
        <div className="max-w-md mx-auto">
          {/* Social Login Buttons */}
          <div className="flex w-[95%] max-w-md mx-auto gap-6 mt-4">
            <button className="flex items-center justify-center gap-2 text-gray-500 border border-gray-400 py-3 rounded-full font-medium w-full">
              <FaFacebook className="text-blue-600" size={20} />
              <span>Facebook</span>
            </button>
            <button className="flex items-center justify-center gap-2 text-gray-500 border border-gray-400 py-3 rounded-full font-medium w-full">
              <img src={img} alt="Google Icon" />
              <span>Google</span>
            </button>
          </div>

          <div className="flex items-center justify-center my-4 text-gray-400">
            <span className="border-b w-1/4"></span>
            <span className="text-xs uppercase px-2">Or sign up via</span>
            <span className="border-b w-1/4"></span>
          </div>

          {/* Login Form */}
          <form>
            <input
              type="email"
              placeholder="Email ID"
              className="w-full px-4 py-4 mt-4 border rounded-full outline-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />

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

            {/* Create Account Button */}
            <Link to="/auth/info">
              <button
                type="submit"
                className="w-full bg-primary mt-8 text-white py-4 rounded-full font-semibold"
              >
                Create Account
              </button>
            </Link>
          </form>

          {/* Links */}
          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/auth"
              className="text-purple-500 font-medium hover:underline"
            >
              Sign In
            </Link>
          </p>
          <p className="mt-12 text-sm text-gray-500">
            By creating an account, you agree to our{" "}
            <Link
              to="/terms"
              className="text-purple-500 font-medium hover:underline"
            >
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy"
              className="text-purple-500 font-medium hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
