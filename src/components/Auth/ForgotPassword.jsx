import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle OTP request here
  };

  return (
    <div className="w-full h-screen max-h-screen mx-auto p-8">
      <div className="mx-auto w-[90%] max-w-md">
        <h2 className="text-[28px] mx-auto font-bold text-gray-800">Forgot Password?</h2>
        <p className="text-gray-500 mx-auto my-4">Don’t worry, we’ve got you!</p>
        <p className="text-sm text-gray-400 mb-6">Verify your email address to receive OTP.</p>

        <form className="flex flex-col w-full justify-start" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email ID"
            className="w-full px-4 py-4 mt-4 border rounded-full outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="h-8" /> {/* Spacer for layout consistency */}

          <Link to='/auth/otp'>
            <button
              type="submit"
              className="w-full bg-primary text-white py-4 rounded-full font-semibold mt-48"
            >
              Send Verification Code
            </button>
          </Link>

            <p className="mt-12 text-sm  text-gray-500">
            By creating an account, you agree to our <Link to="/terms" className="text-purple-500 font-medium hover:underline">Terms & Conditions</Link> and <Link to="/privacy" className="text-purple-500 font-medium hover:underline">Privacy Policy</Link>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
