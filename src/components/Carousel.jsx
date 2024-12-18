import { useState, useEffect, useCallback } from "react";
import img1 from "../assets/Stem-education.png";
import img2 from "../assets/Historical-explorations.png";
import img3 from "../assets/Lab-simulations.png";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false); // Track screen size

  const cards = [
    {
      title: "Stem Education",
      description:
        "Engage with science, technology, engineering, and mathematics in a whole new way.",
      image: img1,
      link: "#",
      textContent: {
        title: "Immersive AR and VR Learning Modules",
        subtitle: "Curriculum-Aligned Experiences",
        details:
          "Our AR/VR modules cover various subjects, including science, math, history, and geography, making learning interactive and fun.",
      },
    },
    {
      title: "Historical Explorations",
      description:
        "Explore creativity through immersive experiences in art, music, and more.",
      image: img2,
      link: "#",
      textContent: {
        title: "Immersive AR and VR Learning Modules",
        subtitle: "Virtual Field Trips",
        details:
          "Transport students to exciting locations and historical sites around the world, providing a unique learning experience that traditional classrooms cannot offer.",
      },
    },
    {
      title: "Lab Simulations",
      description:
        "Dive into the past and learn about the history of civilizations and cultures.",
      image: img3,
      link: "#",
      textContent: {
        title: "Immersive AR and VR Learning Modules",
        subtitle: "Interactive Simulations",
        details:
          "Engage students with virtual labs and simulations that allow for hands-on learning and real-world application.",
      },
    },
  ];

  const handleNext = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
  }, [cards.length]);

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Change to next card every 3 seconds
    }, 3000);

    return () => clearInterval(interval);
  }, [handleNext]);

  // Monitor screen size for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Set breakpoint for small screens (e.g., 640px)
    };

    handleResize(); // Check screen size on mount
    window.addEventListener("resize", handleResize); // Add listener for resize events

    return () => window.removeEventListener("resize", handleResize); // Clean up listener on unmount
  }, []);

  // Utility to calculate the circular index, wrapping around if needed
  const getCircularIndex = (index, offset) => {
    const newIndex = (index + offset) % cards.length;
    return newIndex < 0 ? newIndex + cards.length : newIndex;
  };

  // Determine translation values based on screen size
  const secondCardTranslate = isSmallScreen ? "20px" : "45px";
  const thirdCardTranslate = isSmallScreen ? "40px" : "90px";

  return (
    <div className="flex flex-col lg:flex-row justify-between mt-24">
      <div className="lg:w-1/2 flex flex-col relative max-lg:items-center justify-center">
        {/* Cards */}
        <div className="relative w-64 h-80 sm:w-72 sm:h-72 md:w-96 md:h-96">
          {cards.map((_, index) => {
            const currentIndex = getCircularIndex(activeIndex, 0);
            const nextIndex = getCircularIndex(activeIndex, 1);
            const nextNextIndex = getCircularIndex(activeIndex, 2);

            const isMainCard = index === currentIndex;
            const isSecondCard = index === nextIndex;
            const isThirdCard = index === nextNextIndex;

            return (
              <div
                key={index}
                className={`absolute mx-auto top-0 left-0 w-full h-full p-6 bg-white rounded-2xl shadow-lg border transition-all duration-500 ease-in-out ${
                  isMainCard
                    ? "z-30 opacity-100 scale-100 translate-x-0 translate-y-0"
                    : isSecondCard
                    ? "z-20 opacity-100 scale-95 translate-x-8 translate-y-8"
                    : isThirdCard
                    ? "z-10 opacity-100 scale-90 translate-x-16 translate-y-16"
                    : "opacity-0"
                }`}
                style={{
                  transform: isMainCard
                    ? "translate(0, 0) scale(1)"
                    : isSecondCard
                    ? `translate(${secondCardTranslate}, ${secondCardTranslate}) scale(0.95)`
                    : isThirdCard
                    ? `translate(${thirdCardTranslate}, ${thirdCardTranslate}) scale(0.90)`
                    : "translate(0, 0)",
                }}
              >
                {isMainCard && (
                  <div className="flex flex-col items-start">
                    <img
                      loading="lazy"
                      src={cards[index].image}
                      alt="card"
                      className="w-12 sm:w-36 mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">
                      {cards[index].title}
                    </h3>
                    <p className="text-gray-500 mb-4">
                      {cards[index].description}
                    </p>
                    <button
                      href={cards[index].link}
                      className="bg-primary text-white font-bold py-2 px-4 rounded-full flex items-center"
                    >
                      Learn More
                      <span className="ml-2 w-0 h-0 border-r-[6px] border-r-transparent border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-white"></span>{" "}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation Dots */}
        <div className="flex mx-auto mb-8 mt-28 space-x-2">
          {cards.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index ? "bg-primary w-8" : "bg-gray-300"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Dynamic text content */}
      <section className="px-6 lg:w-1/2 py-12">
        <div className="flex items-center mb-4">
          <div className="w-12 h-[2px] bg-primary mr-2"></div>
          <p className=" text-sm font-medium">Our Offerings</p>
        </div>

        <h1 className="text-3xl font-semibold mb-8">Xreality Education</h1>
        <p className="text-gray-500 mb-8 max-w-lg">
          Provides a comprehensive suite of educational tools and resources to
          meet the diverse needs of students and educators
        </p>

        {/* Dynamic content based on activeIndex */}
        <h2 className="text-lg font-semibold mb-2">
          {cards[activeIndex].textContent.title}
        </h2>

        <div className="flex items-start mb-4">
          <div className="flex items-center justify-center w-8 h-5 bg-primary rounded-sm mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div>
            <h3 className="text-md font-semibold">
              {cards[activeIndex].textContent.subtitle}
            </h3>
            <p className="text-gray-500">
              {cards[activeIndex].textContent.details}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carousel;
