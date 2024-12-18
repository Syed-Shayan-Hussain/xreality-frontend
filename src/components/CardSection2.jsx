import React from "react";
import card1 from "../assets/Our-mission.png";
import card2 from "../assets/Our-values.png";
import card3 from "../assets/Our-vision.png";

const CardSection2 = () => {
  return (
    <div>
      <div className=" py-12 px-6 md:px-16 mt-16 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          <div className="bg-[#F9F5FF]  px-6 py-4 flex flex-col justify-between rounded-lg   ">
            <img
              loading="lazy"
              src={card1}
              alt="Icon"
              className="ml-auto  w-2/3"
            />
            <div className="">
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-500 mb-4">
                Our mission is to revolutionize education by providing students
                and educators with state-of-the-art AR and VR tools, as well as
                comprehensive online courses that enhance learning experiences.
              </p>

              <button className="bg-primary text-white font-bold py-2 px-4 rounded-full flex items-center">
                Learn More
                <span className="ml-2 w-0 h-0 border-r-[6px] border-r-transparent border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-white"></span>{" "}
                {/* Icon added with a little margin */}
              </button>
            </div>
          </div>
          <div className="bg-[#F9F5FF]  px-6 py-4 flex flex-col justify-between  rounded-lg   ">
            <img
              loading="lazy"
              src={card3}
              alt="Icon"
              className="ml-auto  w-2/3"
            />
            <div className="pr-2">
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-500 mb-4">
                At Xreality Education, we envision a world where every student
                has access to high-quality, engaging learning resources that
                cater to their unique educational needs.
              </p>

              <button className="bg-primary text-white font-bold py-2 px-4 rounded-full flex items-center">
                Learn More
                <span className="ml-2 w-0 h-0 border-r-[6px] border-r-transparent border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-white"></span>
              </button>
            </div>
          </div>
          <div className="bg-[#F9F5FF]  px-6 py-4 flex flex-col justify-between rounded-lg   ">
            <img
              loading="lazy"
              src={card2}
              alt="Icon"
              className="ml-auto  w-2/3"
            />
            <div className="">
              <h3 className="text-xl font-semibold mb-2">Our Values</h3>
              <p className="text-gray-500 mb-4">
                Innovation, Quality, Accessibility and Engagement are the core
                values we stand by to ensure quality education among students
                and parents and professionals.
              </p>

              <button className="bg-primary text-white font-bold py-2 px-4 rounded-full flex items-center">
                Learn More
                <span className="ml-2 w-0 h-0 border-r-[6px] border-r-transparent border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-white"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection2;
