import React from 'react'
import img1 from '../assets/Augmented-reality.png'
import img2 from '../assets/Augmented-reality-education.png'

const LargeCard = () => {
  return (
    <div className='grid grid-cols-1  lg:grid-cols-2 w-[85%] mx-auto gap-6'>

    <div className="bg-white border flex flex-col justify-between border-gray-200 px-6 py-7 rounded-lg   ">
      <div className=''>
      <h3 className="text-xl font-semibold mt-4 mb-8">Augmented Reality</h3>
      <p className="text-gray-500 text-justify mb-4">Research shows that Augmented Reality (AR) can enhance student's ability to understand complex concepts, retain information longer, and increase overall engagement in the learning process</p>
      </div>
      <img loading="lazy" src={img1} alt="Icon" className="ml-auto  w-2/3" />
    </div>
    <div className="bg-white border flex flex-col justify-between border-gray-200 px-6 py-7 rounded-lg   ">
      <div className=''>
      <h3 className="text-xl font-semibold mt-4 mb-8">Augmented Reality in Education</h3>
      <p className="text-gray-500 text-justify mb-4">A Tool for Enhancing Critical Thinking Skills" by Radu concludes that AR applications in education enhance critical thinking and problem-solving skills by providing interactive scenarios that challenge students to apply knowledge in practical contexts</p>
      </div>
      <img loading="lazy" src={img2} alt="Icon" className="ml-auto  w-2/3" />
    </div>
    </div>
   

  )
}

export default LargeCard