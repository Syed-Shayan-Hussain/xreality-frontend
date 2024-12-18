import {useState} from "react";
import { FaEllipsisV, FaFilter } from "react-icons/fa";

const UpcomingTasks = () => {
  const tasks = [
    {
      id: 1,
      title: "Chemistry Assignment",
      dueDate: "16/12/2024",
      iconColor: "bg-purple-100",
      textColor: "text-purple-600",
      type: "Due Date",
      time: "16/12/2024",
    },
    {
      id: 2,
      title: "Physics Class",
      dueDate: "Starts in:",
      iconColor: "bg-yellow-100",
      textColor: "text-yellow-600",
      type: "Starts in",
      time: "00:04 mins",
    },
    {
      id: 3,
      title: "Biology Mid-Term",
      dueDate: "Starts in:",
      iconColor: "bg-red-100",
      textColor: "text-red-600",
      type: "Starts in",
      time: "00:04 mins",
    },
  ];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="max-h-screen flex flex-col justify-around items-center">
    <div className=" w-full flex flex-col items-start px-12 py-6">
      {/* Header Section */}
      <div className="flex w-full justify-between items-center">
        <div>
      <h2 className="text-2xl font-semibold text-gray-800">Upcoming Tasks</h2>
      <p className="mt-2 text-gray-400 font-semibold text-sm">Today</p></div>
        {/* Dropdown Menu */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-gray-600 focus:outline-none p-2 rounded-full hover:bg-gray-100"
          >
            <FaFilter size={18} />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 w-40 mt-2 bg-white border border-gray-200 rounded-lg shadow-md z-10">
              <button
                
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Mark all as read
              </button>
              <button
                 className="block px-4 py-2 text-sm text-gray-700 hover
                w-full text-left" > Delete </button> </div>)} </div> </div>


      {/* Task Cards */}
      <div className="w-full  max-w-3xl mt-4 space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center p-4 text-gray-400 bg-white rounded-xl shadow-sm "
          >
            {/* Icon */}
            <div
              className={`w-12 h-12 flex items-center justify-center text-gray-400 rounded-full ${task.iconColor}`}
            >
              <span
                className={`text-xl text-gray-400 font-semibold ${task.textColor}`}
              >
                📝
              </span>
            </div>

            {/* Task Info */}
            <div className="ml-4">
              <h3 className="font-medium text-sm text-gray-700">{task.title}</h3>
              <p className="text-sm text-gray-400">
                {task.type}: <span className= " text-sm text-gray-600">{task.time}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* See More Section */}
      
    </div> 
    <div className="">
        <button className="text-gray-400 text-sm text-center hover:text-gray-600  flex items-center">
          See More
          <span className="ml-2">▼</span>
        </button>
      </div></div>
  );
};

export default UpcomingTasks;
