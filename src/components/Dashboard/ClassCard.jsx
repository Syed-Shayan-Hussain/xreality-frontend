import React, { useState } from "react";
import img from "../../assets/Group.png";
import Modal from "./Modal";

const ClassCard = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="bg-white  shadow-lg rounded-xl p-4 flex flex-col items-start text-center transform hover:-translate-y-2 transition">
      <div className="w-12 h-12 bg-yellow-100 flex items-center justify-center mb-4">
        <img src={img} alt="Class Icon" className="w-8 h-8" />
      </div>
      <h3 className="font-semibold text-gray-800">{data.title}</h3>
      <p className="text-sm text-gray-500">{data.grade}</p>
      <div className="flex items-center justify-between w-full">
        <p className="text-lg font-bold text-primary mt-2">{data.price}</p>
        <button
          onClick={handleModalToggle}
          className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mt-4 hover:bg-purple-700"
        >
          +
        </button>
      </div>
      {isModalOpen && <Modal onClose={handleModalToggle} />}
    </div>
  );
};

export default ClassCard;
