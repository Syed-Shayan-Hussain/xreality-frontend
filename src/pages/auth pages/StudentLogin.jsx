import React from 'react'
import img from '../../assets/Students.png'
import bgImage from '../../assets/BG-gradient.png'
const StudentLogin = () => {
  return (
    <div className="flex items-center justify-center bg-gray-50 min-h-screen">
    <div className="flex w-[90%] max-w-7xl bg-white  overflow-hidden">
      {/* Left Section - Login Form */}
      <div className="w-1/2 p-8">
       
        <h2 className="text-3xl font-bold text-gray-800">Hello, Welcome Back to XReality!</h2>
        <p className="text-gray-500 my-4">Select a method to sign in!</p>
        <div className='max-w-md '>
        {/* Social Login Buttons */}
        <div className="flex max-w-sm mx-auto gap-4 mt-4">
          <button className="flex-1 text-gray-500 border border-gray-400    py-3 rounded-full font-medium">Facebook</button>
          <button className="flex-1 text-gray-500 border border-gray-400    py-3 rounded-full font-medium">Google</button>
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
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-4  mt-4 border rounded-full outline-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />

          {/* Options */}
          <div className="flex justify-between items-center mt-4">
            <label className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="/" className="text-sm text-purple-500 font-medium hover:underline">Forgot Password?</a>
          </div>

          <button type="submit" className="w-full bg-primary text-white py-4 rounded-full font-semibold mt-6">
            Sign In
          </button>
        </form>

        {/* Links */}
        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account? <a href="/" className="text-purple-500 hover:underline">Create Account</a>
        </p>
        <p className="mt-4 text-xs text-center text-gray-500">
          By creating an account, you agree to our <a href="/" className="text-purple-500 hover:underline">Terms & Conditions</a> and <a href="/" className="text-purple-500 hover:underline">Privacy Policy</a>.
        </p>
      </div>
      </div>
      {/* Right Section - Info */}
      <div className="w-1/2  flex flex-col items-center justify-center p-8 bg-cover bg-gray-50" style={{ backgroundImage: `url(${bgImage})` }}>
        <img src={img} alt="XReality Illustration" className=" object-cover w-2/3" />
        <h3 className="text-xl font-semibold text-gray-800 mt-4">XReality Education Platform</h3>
        <p className="text-gray-600 text-center mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>

  </div>
);
}

export default StudentLogin