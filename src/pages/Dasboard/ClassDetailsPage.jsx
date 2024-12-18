import React, { useState } from "react";
import ClassModal from "../../components/Dashboard/ClassModal"; // Import the modal component
import ExploreModal from "../../components/Dashboard/ExploreModal";
import bgimg from "../../assets/dahsboard-books.png";
import bgimg2 from "../../assets/dashboard-class.png";
import img from "../../assets/Group.png";
// Placeholder book cover
import { FaSearch, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CourseOutline from "../../components/Dashboard/CourseOutline";
import bookimg from '../../assets/bookimg.png'
const ClassDetailsPage = () => {
    const [activeHeaderTab, setActiveHeaderTab] = useState("My Classes");
    const [activeTab, setActiveTab] = useState("one-on-one");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [expModalOpen, setExpModalOpen] = useState(false);
    const [showOutline, setShowOutline] = useState(false); // For course outline visibility
    const [showBook, setShowBook] = useState(false); // For book visibility

    const handleHeaderTabChange = (tab) => {
        setActiveHeaderTab(tab);
        setActiveTab("one-on-one");
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const openExpModal = () => setExpModalOpen(true);
    const closeExpModal = () => setExpModalOpen(false);
    const toggleOutline = () => setShowOutline((prev) => !prev);
    const toggleBook = () => setShowBook((prev) => !prev);

    return (
        <div className="min-h-screen flex flex-col">
            <h1 className="text-[20px] font-semibold px-5 mt-4 text-gray-800">
                My Learning
            </h1>
            <div className="flex flex-col md:flex-row flex-1">
                <div className="flex-1 py-6">
                    <header className="bg-white mb-8 px-6 pt-4 flex flex-col gap-4 items-start w-full">
                        <nav className="flex justify-between border-b-2 border-gray-200 max-w-3xl w-full text-gray-400">
                            {["My Classes", "My Courses", "My Assignments"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => handleHeaderTabChange(tab)}
                                    className={`font-medium border-b-2 ${activeHeaderTab === tab
                                            ? "text-primary border-purple-600"
                                            : "hover:text-gray-800 border-transparent"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                            <button
                                onClick={openExpModal}
                                className="font-medium flex items-center gap-1"
                            >
                                <FaSearch />
                                Explore
                            </button>
                        </nav>
                    </header>

                    {activeHeaderTab === "My Classes" && (
                        <>
                            <div className="flex items-center px-4 space-x-4 mb-6">
                                <button
                                    onClick={() => handleTabChange("one-on-one")}
                                    className={`px-4 py-2 rounded-full font-medium transition ${activeTab === "one-on-one"
                                            ? "border border-primary text-primary"
                                            : "border border-gray-200 text-gray-600"
                                        }`}
                                >
                                    One-On-One Class
                                </button>
                                <button
                                    onClick={() => handleTabChange("group")}
                                    className={`px-4 py-2 rounded-full font-medium transition ${activeTab === "group"
                                            ? "border border-primary text-primary"
                                            : "border border-gray-200 text-gray-600"
                                        }`}
                                >
                                    Group Class
                                </button>
                            </div>

                            <div className="mb-6 px-4 flex justify-between items-center">
                                <h2 className="text-lg font-medium text-gray-800">
                                    {activeTab === "one-on-one"
                                        ? "Search Results for Chemistry Grade 09"
                                        : "Group Classes for Chemistry"}
                                </h2>
                                <a
                                    href="#"
                                    className="text-primary text-sm font-medium hover:underline"
                                >
                                    See all
                                </a>
                            </div>
                            <div className="p-8">
                                <div className="flex justify-between items-start">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-yellow-100 flex items-center justify-center mb-4">
                                            <img src={img} alt="Class Icon" className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800">
                                                Chemistry
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                O-Levels • Grade 09
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                Monday / Wednesday / Friday
                                            </p>
                                            <p className="text-sm text-gray-600">4:00 PM – 6:00 PM</p>
                                        </div>
                                    </div>
                                    <p className="text-purple-600 font-bold">$50/Class</p>
                                </div>
                                <button
                                    onClick={toggleBook}
                                    className="text-purple-600 text-sm mt-4 font-medium hover:underline"
                                >
                                    {showBook ? "Hide Course Book" : "View Course Book"}
                                </button>
                                {showBook && (
                                    <div className="flex items-center mt-4">
                                        <div className="flex-1">
                                            <h4 className="text-sm font-medium text-gray-900">
                                                Fundamentals of Chemistry
                                            </h4>
                                            <p className="text-sm text-gray-500">
                                                By John Anthony Hopkins
                                            </p>
                                            <p className="text-xs text-gray-400">Course Book</p>
                                        </div>
                                        <img
                                            src={bookimg}
                                            alt="Book Cover"
                                            className="w-16 h-24 object-cover rounded"
                                        />
                                    </div>
                                )}
                                <hr className="border-gray-200 mt-6" />

                                {/* Instructor Details */}
                                <div className="flex items-center space-x-4">
                                    <img
                                        src="https://via.placeholder.com/40" // Placeholder image, replace with actual source
                                        alt="Instructor"
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-800">
                                            Hussain Aslam
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            Ph.D in Chemistry • Lecturer at Islamia College
                                        </p>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <FaStar className="text-yellow-500 mr-1" />
                                            4.8 rating (512 reviews)
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={toggleOutline}
                                    className="text-purple-600 text-sm mt-4 font-medium hover:underline"

                                >
                                    View Course Outline
                                </button>
                            </div>
                        </>
                    )}
                </div>

                <div className="md:w-1/3 flex flex-col border-l">
                    <CourseOutline isVisible={showOutline} onClose={toggleOutline} />
                </div>
            </div>

            <ClassModal isOpen={isModalOpen} onClose={closeModal} />
            <ExploreModal isOpen={expModalOpen} onClose={closeExpModal} />
        </div>
    );
};

export default ClassDetailsPage;
