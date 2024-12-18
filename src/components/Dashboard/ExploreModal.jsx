import React from "react";

const ExploreModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white max-w-md w-full rounded-xl flex flex-col gap-5 shadow-lg p-12 relative">
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
                    onClick={onClose}
                    aria-label="Close"
                >
                    ✕
                </button>

                {/* Modal Header */}
                <h2 className="text-xl text-center font-semibold text-gray-800 mb-4">
                    Explore Class
                </h2>

                {/* Dropdowns */}
                <select
                    className="w-full px-4 py-3 mt-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-500"
                    required
                >
                    <option value="">-Select Mode-</option>
                    {/* Add more options as necessary */}
                </select>
                <select
                    className="w-full px-4 py-3 mt-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-500"
                    required
                >
                    <option value="">-Select Subject-</option>
                    {/* Add more options as necessary */}
                </select>
                <select
                    className="w-full px-4 py-3 mt-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-500"
                    required
                >
                    <option value="">-Select Curriculum-</option>
                    {/* Add more options as necessary */}
                </select>
                <select
                    className="w-full px-4 py-3 mt-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-500"
                    required
                >
                    <option value="">-Select Grade-</option>
                    {/* Add more options as necessary */}
                </select>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-4">
                    <button className="bg-primary w-full text-white px-4 py-2 rounded-full hover:bg-purple-700">
                        Search Class
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ExploreModal;
