import React from "react";
import img from '../assets/not-found.png'
import AuthNav from "./Auth/AuthNav";
const NotFound = () => {
  return (
    <>
    <AuthNav/>
    <div className="flex flex-col items-center font-custom3 justify-center h-[80vh] bg-white">
      <div className="flex items-center space-x-4">
       
        <img
          src={img} // Replace with the actual planet image URL
          alt="404 Planet"
          className=""
          />
       
      </div>
      <h2 className="text-3xl font-semibold mt-6">Oooopssss ..... 404!</h2>
      <p className="text-gray-500 mt-2 text-center">
        The page you requested could not be found.
      </p>
      <button
        className="mt-6 px-6 py-3 bg-purple-600 text-white w-1/4 font-semibold rounded-full hover:bg-purple-700 transition"
        onClick={() => (window.location.href = "/dashboard")} // Adjust this link as per your app's dashboard route
        >
        Back to Dashboard
      </button>
    </div>
          </>
  );
};

export default NotFound;
