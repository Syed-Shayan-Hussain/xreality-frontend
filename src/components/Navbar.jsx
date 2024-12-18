import React, { useCallback, useEffect, useState } from "react";
import logo from "../assets/logo1.png";
import { RiMenu2Fill } from "react-icons/ri"; // Import the dropdown icon
import { Link } from "react-router-dom";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      // if scrolling down, hide the navbar
      setShow(false);
    } else {
      // if scrolling up, show the navbar
      setShow(true);
    }

    // update last scroll position
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [controlNavbar]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 font-custom3 bg-white shadow-md z-40 py-3 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex max-w-7xl flex-wrap items-center justify-between px-6 py-4">
        <div className="flex-shrink-0 flex justify-between w-full lg:w-auto">
          <Link to='/'>
          <img
            loading="lazy"
            className="w-[256px] h-[43.78px] cursor-pointer"
            src={logo}
            alt="Logo"
          />
          </Link>
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex text-3xl items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
            >
              <RiMenu2Fill />
            </button>
          </div>
        </div>

        <div
          className={`lg:flex lg:items-center lg:justify-between flex-grow ${
            isOpen ? "block" : "hidden"
          } lg:block`}
        >
          <div className="text-[1.375rem] font-medium flex flex-col lg:flex-row lg:items-center lg:justify-end gap-x-12 flex-grow">
            <a
              href="#home"
              className={`block mt-4 cursor-pointer lg:mt-0 text-[#1E1E1E]`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`block mt-4 cursor-pointer lg:mt-0 text-[#1E1E1E]`}
            >
              About Us
            </a>
            <a
              href="#services"
              className={`block mt-4 cursor-pointer lg:mt-0 text-[#1E1E1E]`}
            >
              Our Services
            </a>
            <a
              href="#contact"
              className={`block mt-4 cursor-pointer lg:mt-0 text-[#1E1E1E]`}
            >
              Contact
            </a>
            <Link to="select-role">
              <button className="bg-primary text-white text-xl py-2 px-6 rounded-full">
                Login
              </button>
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center mt-4 lg:mt-0">
            <div className="flex lg:flex-row mt-4 lg:mt-0"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default App;
