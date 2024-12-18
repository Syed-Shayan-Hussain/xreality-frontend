// src/components/AuthForm.js
import {useState} from "react";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import img from '../../assets/Group (6).png'
const AuthForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <div className="w-full min-h-screen mx-auto p-8">
      <div className="max-w-md mx-auto w-[90%]">
        <h2 className="text-[28px] mx-auto font-bold text-gray-800">Hello, Welcome Back to XReality!</h2>
        <p className="text-gray-500 mx-auto my-4">Select a method to sign in!</p>
        <div className='max-w-md mx-auto'>
          {/* Social Login Buttons */}
          <div className="flex w-[95%] max-w-md mx-auto gap-6 mt-4">
            <button className="flex items-center justify-center gap-2 text-gray-500 border border-gray-400 py-3 rounded-full font-medium w-full">
              <FaFacebook className="text-blue-600" size={20} />
              <span>Facebook</span>
            </button>
            <button className="flex items-center justify-center gap-2 text-gray-500 border border-gray-400 py-3 rounded-full font-medium w-full">
              <img src={img} alt="" />
              <span>Google</span>
            </button>
          </div>

          <div className="flex items-center justify-center my-4 text-gray-400">
            <span className="border-b w-1/4"></span>
            <span className="text-xs uppercase px-2">Or sign in via</span>
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
            <div className="relative w-full mt-4">
              {/* Input Field */}
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create New Password"
                className="w-full px-4 py-4 border rounded-full outline-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />

              {/* Eye Icon */}
              <span
                onClick={togglePasswordVisibility}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-gray-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Options */}
            <div className="flex justify-between items-center mt-4">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <Link to="/auth/password" className="text-sm text-purple-500 font-medium hover:underline">Forgot Password?</Link>
            </div>
            <Link to='/dashboard/'>
              <button type="submit" className="w-full bg-primary text-white py-4 rounded-full font-semibold mt-6">
                Sign In
              </button>
            </Link>
          </form>

          {/* Links */}
          <p className="mt-4 text-sm text-center text-gray-600">
            Don’t have an account? <Link to='/auth/signup' className="text-purple-500 font-medium hover:underline">Create Account</Link>
          </p>



          <p className="mt-12 text-sm  text-gray-500">
            By creating an account, you agree to our <Link to="/terms" className="text-purple-500 font-medium hover:underline">Terms & Conditions</Link> and <Link to="/privacy" className="text-purple-500 font-medium hover:underline">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
