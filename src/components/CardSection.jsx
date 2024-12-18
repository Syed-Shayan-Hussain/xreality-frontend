import React from "react";
import card1 from "../assets/Students.png";
import card2 from "../assets/parent.png";
import { Link } from "react-router-dom";
import card3 from "../assets/Teachers.png";

const CardSection = () => {
  return (
    <div className="py-12 px-6 md:px-16 font-custom3 lg:px-24 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="group bg-white border border-gray-200 px-6 pt-4 rounded-lg   transition-all duration-500 hover:bg-primary">
          <div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-all duration-500">
              For Students
            </h3>
            <p className="text-gray-500 text-sm mb-4  group-hover:text-white transition-all duration-500">
            Explore interactive tools, personalized resources, and immersive experiences. From AI-driven tutors to tailored coursework, our platform is designed to enhance your learning journey.
            </p>
<Link to='select-role'>
   
             <button className=" flex items-center bg-primary text-white font-bold py-2 px-4 rounded-full group-hover:bg-white group-hover:text-primary transition-all duration-500">
                Learn More
                <span className="ml-2 w-0 h-0 border-r-[6px] border-r-transparent border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] group-hover:border-l-purple-600  group-hover:text-primary"></span>{" "}
                {/* Icon added with a little margin */}
              </button></Link>
          </div>
          <img
            loading="lazy"
            src={card1}
            alt="Icon"
            className="ml-auto w-2/3"
          />
        </div>

        <div className="group bg-white border border-gray-200 px-6 pt-4 rounded-lg   transition-all duration-500 hover:bg-primary">
          <div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-all duration-500">
              For Parents
            </h3>
            <p className="text-gray-500 text-sm mb-4 group-hover:text-white transition-all duration-500">
              Get insights into your child’s progress with real-time updates and
              reports. Our platform allows you to track achievements, support
              learning at home, and stay connected with the teachers.
            </p>
            <Link to='select-role'>
             <button className=" flex items-center bg-primary text-white font-bold py-2 px-4 rounded-full group-hover:bg-white group-hover:text-primary transition-all duration-500">
                Learn More
                <span className="ml-2 w-0 h-0 border-r-[6px] border-r-transparent border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] group-hover:border-l-purple-600  group-hover:text-primary"></span>{" "}
                {/* Icon added with a little margin */}
              </button></Link>
          </div>
          <img
            loading="lazy"
            src={card2}
            alt="Icon"
            className="ml-auto w-4/5"
          />
        </div>

        <div className="group bg-white border border-gray-200 px-6 pt-4 rounded-lg   transition-all duration-500 hover:bg-primary">
          <div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-all duration-500">
              For Teachers
            </h3>
            <p className="text-gray-500 text-sm mb-4 group-hover:text-white transition-all duration-500">
              Simplify your teaching process with AI-driven interactive tools, curriculum
              management, and real-time collaboration features. Elevate your
              students’ learning experience with tailored resources.
            </p>
            <Link to='select-role'>
             <button className="b flex items-center bg-primary text-white font-bold py-2 px-4 rounded-full group-hover:bg-white group-hover:text-primary transition-all duration-500">
                Learn More
                <span className="ml-2 w-0 h-0 border-r-[6px] border-r-transparent border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] group-hover:border-l-purple-600  group-hover:text-primary"></span>{" "}
                {/* Icon added with a little margin */}
              </button></Link>
          </div>
          <img
            loading="lazy"
            src={card3}
            alt="Icon"
            className="ml-auto w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default CardSection;
