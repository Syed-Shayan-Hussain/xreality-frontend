import React from "react";
import img1 from "../assets/Experience-education.png";

const ScanSection = () => {
  return (
    <div>
      <div className="mx-auto font-custom3 max-w-7xl mt-20 w-[90%]">
        <div className="max-w-4xl mx-auto space-y-20">
          <h2 className="text-center text-2xl md:text-4xl font-semibold">
            Experience the future of Education today in just 2 steps
          </h2>
          <p className="text-lg md:text-2xl  text-[#8C8C8C] text-center">
            Point the camera to QR code and then at the photo
          </p>
        </div>
        <div className="flex max-w-2xl mx-auto mt-12 justify-between">
          <img loading="lazy"  src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ScanSection;
