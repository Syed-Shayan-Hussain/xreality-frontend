import React, { useEffect, useState } from "react";
import bgImage from '../assets/BG-gradient.png'
import hero1 from "../assets/Hero1.mp4";
import hero2 from "../assets/Hero2.mp4";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${window.location.protocol}//${window.location.host}/api-email.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setIsSubmitted(true);
          // Reset form data
          setFormData({
            email: "",
          });
        } else {
          setError(data.message || "Failed to send message.");
        }
      })
      .catch(() => {
        setError("Error occurred while sending message.");
        // Reset form data in case of error
        setFormData({
          email: "",
        });
      });
  };

  useEffect(() => {
    if (isSubmitted || error) {
      // Set a timeout to reset the states after 5 seconds
      const timeoutId = setTimeout(() => {
        setIsSubmitted(false);
        setError("");
      }, 5000); // 5 seconds

      // Cleanup function to clear the timeout if the component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [isSubmitted, error]);

  return (
    <div className="flex max-md:mt-16 relative w-full flex-col-reverse lg:flex-row md:mt-48 justify-between items-center bg-white py-2 md:py-12">
      <div className=" w-[90%] lg:w-1/2 flex flex-col font-custom3 mt-20 lg:mt-0 gap-4 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-8">
          Sign Up Today and See Your Child Thrive in Just Weeks With Immersive Learning
        </h1>
        <p className="text-md text-gray-400 font-light mb-6">
          Stimulate Creativity and Increase Learning Engagement with AR Projects
          and Enhanced Material Visualization. Unlock a world of immersive
          learning—register now for early access to your educational adventure!
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex relative justify-center md:justify-start items-center bg-white rounded-full border-gray-300 overflow-hidden w-full"
        >
          <input
            type="email"
            name="email"
            value={formData.email} // Controlled input value
            placeholder="Enter Your Email"
            required
            onChange={handleChange}
            className="w-full px-2 py-2 md:px-6 md:py-6 text-gray-500 border border-gray-300 placeholder:text-gray-400 rounded-full outline-none"
          />
          <button
            type="submit"
            className="bg-primary absolute right-0 max-sm:m-1 m-2 max-sm:text-sm text-white font-bold py-2 px-4 md:py-4 md:px-8 rounded-full focus:outline-none"
          >
            Subscribe
          </button>
        </form>
        {isSubmitted && (
          <div
            className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 w-fit mx-auto"
            role="alert"
          >
            Thank you, your submission has been received.
          </div>
        )}
        {error && (
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 w-fit mx-auto"
            role="alert"
          >
            {error}
          </div>
        )}
      </div>
      <div className="w-[90%] lg:w-1/2 relative mt-10 md:mt-0 flex justify-center bg-cover" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="bg-gradient-to-b from-[#CAD8FE] via-[#BDDEF4] to-[#FFFFFF] w-[20.875rem] h-[20.875rem] md:w-[30.875rem] md:h-[30.875rem] rounded-full absolute blur-3xl right-6 top-10"></div>
        <video
          className="h-[20rem] sm:h-[24rem] md:h-[35rem] rounded-[1.75rem] md:rounded-[3rem] translate-x-12 sm:translate-x-16 relative z-10"
          src={hero1}
          autoPlay
          loop
          muted
          playsInline
        />
        <video
          className="h-[20rem] sm:h-[24rem] md:h-[35rem] rounded-[1.75rem] md:rounded-[3rem] -translate-x-4 sm:translate-x-0 translate-y-16"
          src={hero2}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
};

export default HeroSection;
