import React from 'react';

const Card = ({ title, description, buttonText, img }) => {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg ">
      <div className='w-2/3'>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 mb-4">{description}</p>
      <button className="bg-primary text-white font-bold py-2 px-4 rounded-full">
        {buttonText}
      </button></div>
      <img loading="lazy" src={img} alt="Icon" className="ml-auto  w-2/3" />
    </div>
  );
};

export default Card;