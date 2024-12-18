import React, { useEffect } from "react";
import {  useLocation } from "react-router-dom";
import img from "../assets/Students.png";
import bgImage from "../assets/BG-gradient.png";
import VerificationPage from "../components/Auth/VerificationPage";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../components/Auth/AuthForm";
import AuthNav from "../components/Auth/AuthNav";
import ForgotPassword from "../components/Auth/ForgotPassword";
import OTPVerification from "../components/Auth/OTPVerification";
import Signup from "../components/Auth/Signup";
import BasicInfoForm from "../components/Auth/BasicInfoForm";
import ResetPassword from "../components/Auth/ResetPassword";

const AuthLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex items-center justify-center font-custom3 min-h-screen w-full bg-[#F9F5FF]">
      <div className="flex flex-col md:flex-row w-full max-w-screen h-full">
        
        {/* Left Section with White Background */}
        <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center bg-white p-4">
          <AuthNav />
          <Routes>
            <Route path="/" element={<AuthForm />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/password" element={<ForgotPassword />} />
            <Route path="/otp" element={<OTPVerification />} />
            <Route path="/info" element={<BasicInfoForm />} />
            <Route path="/verification" element={<VerificationPage />} />
            <Route path="/reset" element={<ResetPassword />} />
          </Routes>
        </div>
        
        {/* Right Section with Background Image and Gradient */}
        <div
          className="hidden relative md:flex w-full md:w-1/2 h-screen flex-col max-w-2xl mx-auto items-center justify-center bg-cover p-8  top-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(249, 245, 255, 0.8), rgba(249, 245, 255, 0.8)), url(${bgImage})`,
          }}  
        >
          <div className="bg-gradient-to-b from-[#CAD8FE] via-[#BDDEF4] to-[#FFFFFF] w-[20.875rem] h-[20.875rem] lg:w-[30.875rem] lg:h-[30.875rem] rounded-full absolute blur-3xl right-6 top-10"></div>
          <div className="z-10 mx-auto text-center">
            <img src={img} alt="XReality Illustration " className="object-cover mx-auto w-3/5" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">XReality Education Platform</h3>
            <p className="text-gray-400 max-w-sm mx-auto text-center mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
