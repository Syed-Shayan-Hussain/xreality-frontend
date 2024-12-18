import React, { useState } from "react";
import ClassModal from "../../components/Dashboard/ClassModal"; // Import the modal component
import ExploreModal from "../../components/Dashboard/ExploreModal";
import bgimg from "../../assets/dahsboard-books.png";
import bgimg2 from "../../assets/dashboard-class.png";
import img from "../../assets/Group.png";
import { FaSearch } from "react-icons/fa";

const MyLearningPage = () => {
  const [activeHeaderTab, setActiveHeaderTab] = useState("My Classes");
  const [activeTab, setActiveTab] = useState("one-on-one");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expModalOpen, setExpModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const handleHeaderTabChange = (tab) => {
    setActiveHeaderTab(tab);
    setActiveTab("one-on-one");
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const openModal = (classData) => {
    setSelectedClass(classData);
    setIsModalOpen(true);
  };
  const openExpModal = (classData) => {
  
    setExpModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedClass(null);
  };
  const closeExpModal = () => {
    setExpModalOpen(false);
    
  };

  return (
    <div className="min-h-screen  flex flex-col">
      {/* Header */}
      
      <h1 className="text-[20px] font-semibold px-5 mt-4 text-gray-800">My Learning</h1>
      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-1">
        {/* Left Section */}
        <div className="flex-1  py-6">
        <header className="bg-white mb-8 px-6 pt-4 flex flex-col gap-4 items-start w-full justify-between">
    
        <nav className="flex justify-between border-b-2 border-gray-200  max-w-3xl w-full text-gray-400">
          {["My Classes", "My Courses", "My Assignments"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => handleHeaderTabChange(tab)}
                className={`font-medium border-b-2 ${
                  activeHeaderTab === tab
                    ? "text-primary border-purple-600"
                    : "hover:text-gray-800 border-transparent"
                }`}
              >
                {tab}
              </button>
            )
          )}
          <button onClick={openExpModal}
          className="font-medium flex items-center justify-center gap-1 ">
        <span><FaSearch className=""/></span>  Explore
          </button>
        </nav>
      </header>
          {activeHeaderTab === "My Classes" && (
            <>
              {/* Sub Tabs */}
              <div className="flex  items-center px-4 space-x-4 mb-6">
                <button
                  onClick={() => handleTabChange("one-on-one")}
                  className={`px-4 py-2 rounded-full font-medium transition ${
                    activeTab === "one-on-one"
                      ? "border border-primary text-primary"
                      : "border border-gray-200 text-gray-600"
                  }`}
                >
                  One-On-One Class
                </button>
                <button
                  onClick={() => handleTabChange("group")}
                  className={`px-4 py-2 rounded-full font-medium transition ${
                    activeTab === "group"
                      ? "border border-primary text-primary"
                      : "border border-gray-200 text-gray-600"
                  }`}
                >
                  Group Class
                </button>
              </div>

              {/* Search Results */}
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

              {/* Cards */}
              <div className="grid grid-cols-1 px-4 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-start text-center  "
                  >
                    <div className="w-12 h-12 bg-yellow-100 flex items-center justify-center mb-4">
                      <img src={img} alt="Class Icon" className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold text-gray-800">Chemistry</h3>
                    <p className="text-sm text-gray-500">O-Levels • Grade 09</p>
                    <div className="flex items-center justify-between w-full">
                      <p className="text-lg font-bold text-primary mt-2">
                        $50/Class
                      </p>
                      <button
                        className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mt-4 hover:bg-purple-700"
                        onClick={() =>
                          openModal({
                            subject: "Chemistry",
                            grade: "Grade 09",
                            price: "$50/Class",
                          })
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          {activeHeaderTab === "My Courses" && (
            <div className="flex flex-col border-l items-center justify-center">
               <img src={bgimg2} alt="No Item Selected" className="w-40 mt-40 h-40 mb-4" />
               <p className="text-gray-500 text-sm">No Class Available</p>
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="md:w-1/3  flex flex-col border-l items-center justify-center">
          <img src={bgimg} alt="No Item Selected" className="w-40 h-40 mb-4" />
          <p className="text-gray-500 text-sm">No Item Selected</p>
        </div>
      </div>

      {/* Modal Component */}
      <ClassModal
        isOpen={isModalOpen}
        classData={selectedClass}
        onClose={closeModal}
      />
      <ExploreModal
        isOpen={expModalOpen}
        
        onClose={closeExpModal}
      />
    </div>
  );
};

export default MyLearningPage;
