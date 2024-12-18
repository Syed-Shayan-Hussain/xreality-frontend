import React from "react";
import {  useEffect } from "react";
import "../styles/Fonts.css";
import CardSection from "../components/CardSection";
import CardSection2 from "../components/CardSection2";
import Carousel from "../components/Carousel";
import ContactSection from "../components/ContactSection";

import HeroSection from "../components/HeroSection";
import JoinUsSection from "../components/JoinUsSection";
import LargeCard from "../components/LargeCard";
import LearningSection from "../components/LearningSection";

import NewsletterSection from "../components/NewsLetterSection";
import ScanSection from "../components/ScanSection";

const Home = () => {
//   const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Show the scroll button when the user scrolls down
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.pageYOffset > 300) {
//         // Show after 300px scroll
//         setShowScrollToTop(true);
//       } else {
//         setShowScrollToTop(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Function to handle scroll to top
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth", // Smooth scroll effect
//     });
//   };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);
  return (
    <div>
      {" "}
      <div className="max-w-7xl font-custom3 mx-auto w-[90%]">
        <section id="home">
          <HeroSection />
          <CardSection />
        </section>
        <section id="about">
          <ScanSection />
          <LearningSection />
          <LargeCard />
          <CardSection2 />
        </section>
        <section id="services">
          <Carousel />
          <JoinUsSection />
        </section>
      </div>
      <NewsletterSection />
      <div id="contact" className="max-w-7xl mx-auto w-[90%]">
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;
