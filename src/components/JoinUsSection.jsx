import React from 'react'
import img1 from '../assets/Journey-educational-excellence.png'
import img2 from '../assets/Commitment-quality.png'

const JoinUsSection = () => {
  return (
    <div className="bg-white py-20">
    
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center lg:space-x-20">
        <div className="lg:w-1/2 text-left">
        
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Our Commitment to Quality and Innovation
          </h2>
          <p className="text-md text-gray-500">
          At Xreality Education, we are committed to providing top-tier educational resources and continuously improving our platform to meet the changing needs of the educational community. We prioritize feedback from students and educators to ensure our content remains relevant, engaging, and effective.
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
    
      <div className="w-full mx-auto   flex flex-col lg:flex-row items-center lg:space-x-20 mb-16">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <img loading="lazy"
            src={img1}
            alt="Immersive Learning VR"
            className="w-full"
          />
        </div>
        <div className="lg:w-1/2 text-left">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Join Us on the Journey to Educational Excellence
          </h2>
          <p className="text-md text-gray-500 mb-4">
          We invite you to explore Xreality Education and experience how our combination of AR/VR and comprehensive online courses can transform the learning experience. Whether you're a student eager to dive into immersive learning, a teacher looking for innovative teaching tools, or a parent seeking to support your child's education, Xreality Education has something for you.
          </p>
       
        </div>
      </div>

    
    </div>
  )
}

export default JoinUsSection