import React from "react";
import img from '../../assets/bookimg.png'
import img1 from '../../assets/Group.png'
import { Link } from "react-router-dom";
const ClassModal = ({ isOpen, classData, onClose }) => {
  if (!isOpen) return null;

  return (
    // <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
    //   <div className="bg-white w-96 rounded-lg shadow-lg p-6">
    //     <h2 className="text-xl font-semibold text-gray-800 mb-4">
    //       Class Details
    //     </h2>
    //     <p className="text-gray-600 mb-2">
    //       <strong>Subject:</strong> {classData?.subject}
    //     </p>
    //     <p className="text-gray-600 mb-2">
    //       <strong>Grade:</strong> {classData?.grade}
    //     </p>
    //     <p className="text-gray-600 mb-4">
    //       <strong>Price:</strong> {classData?.price}
    //     </p>
    //     <div className="flex justify-end space-x-4">
    //       <button
    //         className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
    //         onClick={onClose}
    //       >
    //         Cancel
    //       </button>
    //       <button className="bg-primary text-white px-4 py-2 rounded hover:bg-purple-700">
    //         Enroll
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 z-50">
    <div className="bg-white w-[90%] max-w-md rounded-2xl p-6 shadow-lg relative">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        aria-label="Close"
        onClick={onClose}
      >
        ✕
      </button>

      {/* Modal Header */}
      <h2 className="text-lg font-semibold text-center mb-4">Class Details</h2>

      {/* Class Information */}
      <div className="flex items-start mb-4">
        <img
          src={img1}
          alt="Class Icon"
          className="w-12 h-12 bg-yellow-100  p-2"
        />
        <div className="ml-4 flex-1">
          <div className="flex justify-between items-center">
            <h3 className="text-base font-medium text-gray-900">Chemistry</h3>
            <p className="text-primary text-sm font-semibold">$50/Class</p>
          </div>
          <p className="text-sm text-gray-500">O-Levels • Grade 09</p>
          <p className="text-sm text-gray-500">
            Monday / Wednesday / Friday
          </p>
          <p className="text-sm text-gray-500">4:00 PM - 6:00 PM</p>
        </div>
      </div>

      {/* Course Book */}
      <div className="flex items-center mb-4">
        <div className="flex-1">
          <h4 className="text-sm font-medium text-gray-900">
            Fundamentals of Chemistry
          </h4>
          <p className="text-sm text-gray-500">By John Anthony Hopkins</p>
          <p className="text-xs text-gray-400">Course Book</p>
        </div>
        <img
          src={img}
          alt="Book Cover"
          className="w-16 h-24 object-cover rounded"
        />
      </div>

      <hr className="my-4 border-gray-300" />

      {/* Teacher Information */}
      <div className="flex items-center mb-6">
        <img
          src="https://via.placeholder.com/40"
          alt="Teacher"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="ml-4">
          <h4 className="text-sm font-medium text-gray-900">Hussain Aslam</h4>
          <p className="text-xs text-gray-500">
            Ph.D in Chemistry • Lecturer at Islamia College
          </p>
          <div className="flex items-center text-xs text-yellow-500 mt-1">
            <span>★</span>
            <p className="ml-1 text-gray-600">
              4.8 rating (512 reviews)
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between">
        <Link to='/dashboard/class-details'>
        <button className="text-primary border border-primary py-2 px-4 rounded-full hover:bg-purple-100">
          View Details
        </button> </Link>
        <button className="bg-primary text-white py-2 px-4 rounded-full hover:bg-purple-700">
          Get Demo Class
        </button>
      </div>
    </div>
  </div>
  );
};

export default ClassModal;
