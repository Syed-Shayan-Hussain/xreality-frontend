import { FaArrowCircleLeft, FaArrowLeft } from "react-icons/fa";
import bgimg from "../../assets/dahsboard-books.png";

const CourseOutline = ({ isVisible, onClose }) => {
    const outlineData = [
      { day: "Day 01", chapter: "Chapter 01", content: "Introduction to Chemistry", tasks: ["Worksheet", "Assignment", "Quiz"] },
      { day: "Day 02", chapter: "Chapter 02", content: "Chemical Reactions", tasks: ["Worksheet", "Assignment", "Quiz"] },
      { day: "Day 03", chapter: "Chapter 03", content: "Periodic Table", tasks: ["Worksheet", "Assignment", "Quiz"] },
      // Add more days as needed
    ];
  
    return isVisible ? (
      <div className="w-full  px-6 py-4 space-y-4">
        <button
          className="text-gray-400 flex items-center gap-3  text-md font-bold mb-4 hover:underline"
          onClick={onClose}
        >
          <FaArrowLeft/>   <h2 className="text-lg font-semibold text-gray-400 ">Course Outline</h2>
        </button>
      
        <ul className="space-y-3 ">
          {outlineData.map((item, index) => (
            <li key={index} className=" text-gray-400 rounded-lg p-4 shadow-sm">
              <h3 className="font-bold text-gray-400 ">
                {item.day}: {item.chapter}
              </h3>
              <p className="text-sm text-gray-400">{item.content}</p>
              <p className="text-xs text-gray-400 mt-1">Tasks: {item.tasks.join(", ")}</p>
            </li>
          ))}
        </ul>
      </div>
    ) : (
        <div className="  flex flex-col border-l h-screen  items-center justify-center">
        <img src={bgimg} alt="No Item Selected" className="w-40 h-40 mb-4" />
        <p className="text-gray-500 text-sm">No Item Selected</p>
      </div>
    );
  };

  export default CourseOutline;