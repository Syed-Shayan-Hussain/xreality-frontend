import React from "react";
import img1 from '../assets/Immersive-learning.png'
import img2 from '../assets/Innovating-education.png'
function LearningSection() {
  return (
    <div className="bg-white pb-20">
      {/* Part One - Immersive Learning */}
      <div className="w-full mx-auto font-custom3   flex flex-col lg:flex-row items-center lg:space-x-20 mb-16">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <img loading="lazy"
            src={img1}
            alt="Immersive Learning VR"
            className="w-full"
          />
        </div>
        <div className="lg:w-1/2 text-left">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Immersive Learning Experience
          </h2>
          <p className="text-md text-gray-500 mb-4">
            Imagine a classroom without walls, where students can dive into the
            depths of the ocean, explore ancient civilizations, or unravel the
            mysteries of space—all from the comfort of their own home or school.
            Here at XReality Education, we make this possible with our
            cutting-edge Augmented Reality (AR) and Virtual Reality (VR) tools,
            alongside a wealth of comprehensive online courses that cater to
            every student's needs.
          </p>
          <p className="text-md text-gray-500">
            We’re on a mission to ignite curiosity, inspire creativity, and
            cultivate a passion for knowledge that will last a lifetime. Whether
            you're a student eager to explore, a teacher looking for innovative
            teaching tools, or a parent seeking the best for your child’s
            future, you’re in the right place.
          </p>
        </div>
      </div>

      {/* Part Two - About XReality Education */}
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center lg:space-x-20">
        <div className="lg:w-1/2 text-left">
        <div className="flex items-center mb-4">
          <div className="w-12 h-[2px] bg-primary mr-2"></div>
          <p className=" text-sm font-medium">About XReality Education</p>
        </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Innovating Education with Immersive AR and VR, and Comprehensive Online Courses
          </h2>
          <p className="text-md text-gray-500">
            Welcome to XReality Education, your gateway to cutting-edge
            educational experiences! We specialize in bringing education to life
            through Augmented Reality (AR) and Virtual Reality (VR) while also
            offering a wide range of comprehensive online courses to meet
            diverse learning needs. Our mission is to transform the educational
            landscape for K-12 students in Canada and around the world by
            integrating advanced technology and innovative teaching methods.
          </p>
        </div>
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <img loading="lazy"
            src={img2}
            alt="Educational Tools"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default LearningSection;
