import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <img loading="lazy" src={logo} className="w-60 mx-auto my-4" alt="" />
        <p className="text-gray-500 max-w-2xl w-[80%] my-8 mx-auto mb-6">
          XReality is an edtech platform with a vision to enhance online
          learning across Canada. This platform allows students and teachers to
          interact with each other with the help of an AI assistant.
        </p>
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://www.facebook.com/profile.php?id=61555290702946"
            target="_blank"
            aria-label="Facebook"
            className="text-primary hover:text-primary"
            rel="noreferrer"
          >
            <FaFacebookF className="h-8 w-8" />
          </a>
          <a
            href="https://www.instagram.com/xrealityedu/"
            aria-label="Instagram"
            className="text-primary hover:text-primary"
          >
            <FaInstagram className="h-8 w-8" />
          </a>
          <a
            href="https://x.com/xrealityedu"
            aria-label="Twitter"
            target="_blank"
            className="text-primary hover:text-primary"
            rel="noreferrer"
          >
            <FaTwitter className="h-8 w-8" />
          </a>
          <a
            href="https://www.linkedin.com/company/xreality-edu"
            target="_blank"
            aria-label="LinkedIn"
            className="text-primary hover:text-primary"
            rel="noreferrer"
          >
            <FaLinkedinIn className="h-8 w-8" />
          </a>
        </div>
        <div className="text-sm text-primary font-medium">
          <Link to="/terms" className="mr-4">
            Terms of Use
          </Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
        <p className="text-gray-400 text-xs mt-4">
          &copy; 2024 XReality EDU. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
