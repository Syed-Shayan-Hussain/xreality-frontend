import React, { useState } from 'react';
import students from '../assets/Students.png';
import teacher from '../assets/Teachers.png';
import parents from '../assets/parent.png';
import AuthNav from '../components/Auth/AuthNav';
import { Link } from 'react-router-dom';

const Roles = () => {
  const [selectedRole, setSelectedRole] = useState(null); // State to track the selected role

  const handleCardClick = (role) => {
    setSelectedRole(role); // Set the selected role
  };

  return (
    <div className="max-w-7xl w-full h-screen mx-auto">
      <AuthNav />
      <div className="max-w-7xl flex flex-col mt-12 mx-auto text-center">
        <div>
          <h1 className="text-3xl font-bold my-4">Select Your Role</h1>
          <h5 className="text-gray-500 text-xl my-8">Join XReality as a</h5>
          <div className="flex max-w-4xl justify-around mx-auto flex-wrap gap-4">
            <div
              onClick={() => handleCardClick('Student')}
              className={`flex flex-col border ${selectedRole === 'Student' ? 'bg-primary text-white' : 'hover:bg-primary text-gray-500 hover:text-white'
                } text-xl rounded-xl py-4 px-8 justify-center max-w-sm items-center cursor-pointer`}
            >
              <img src={students} className="w-44" alt="Student" />
              <p>Student</p>
            </div>

            <div
              onClick={() => handleCardClick('Parent')}
              className={`flex flex-col border ${selectedRole === 'Parent' ? 'bg-primary text-white' : 'hover:bg-primary text-gray-500 hover:text-white'
                } text-xl rounded-xl py-4 px-6 justify-center max-w-sm items-center cursor-pointer`}
            >
              <img src={parents} className="w-48" alt="Parent" />
              <p>Parent</p>
            </div>

            <div
              onClick={() => handleCardClick('Teacher')}
              className={`flex flex-col border ${selectedRole === 'Teacher' ? 'bg-primary text-white' : 'hover:bg-primary text-gray-500 hover:text-white'
                } text-xl rounded-xl py-4 px-8 justify-center max-w-sm items-center cursor-pointer`}
            >
              <img src={teacher} className="w-44" alt="Teacher" />
              <p>Teacher</p>
            </div>
          </div>
        </div>

        {/* Button is always displayed, but disabled when no card is selected */}
        <div className="mt-8">
        <Link to='/auth/' > 
          <button
            className={`px-6 py-3 rounded-full font-medium w-1/4 mt-12 text-white ${selectedRole ? 'bg-purple-500 hover:bg-purple-600' : 'bg-purple-300 cursor-not-allowed'
              }`}
            disabled={!selectedRole} // Disable the button if no role is selected
          >
            {selectedRole ? `Sign In` : 'Sign In'}
          </button></Link>
        </div>

        <p className="mt-40 text-sm text-center text-gray-500">
          By creating an account, you agree to our{' '}
          <Link to="/terms" className="text-purple-500 font-medium hover:underline">
            Terms & Conditions
          </Link>{' '}
          and{' '}
          <Link to="/privacy" className="text-purple-500 font-medium hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Roles;




// import React, { useState } from 'react';

// import 'react-calendar/dist/Calendar.css';
// import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// // Initialize moment for Big Calendar
// const localizer = momentLocalizer(moment);

// const Roles = () => {
//   const [date, setDate] = useState(new Date());
//   const [events] = useState([
//     {
//       title: 'Target Audience Training',
//       start: new Date(2024, 10, 3, 9, 0),
//       end: new Date(2024, 10, 3, 10, 0),
//     },
//     {
//       title: 'Weekly Review Meeting',
//       start: new Date(2024, 10, 5, 14, 0),
//       end: new Date(2024, 10, 5, 15, 0),
//     },
//   ]);

//   const courses = [
//     { title: 'How to grow your Facebook Page', color: 'bg-blue-500', enrolled: 12 },
//     { title: 'Grow your Community', color: 'bg-purple-500', enrolled: 7 },
//     { title: 'Data Science Bootcamp', color: 'bg-yellow-500', enrolled: 17 },
//     { title: 'Target Audience Training', color: 'bg-red-500', enrolled: 21, full: true },
//   ];

//   const learningData = [
//     { title: 'Target Audience Training', progress: 53 },
//     { title: 'The Complete Web...', progress: 75 },
//     { title: 'Grow your Community', progress: 14 },
//   ];

//   return (
//     <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-full lg:w-1/4 p-4 bg-white shadow-md">
//         <h2 className="text-2xl font-bold mb-4">Course Activity</h2>
//         <p className="text-sm mb-6">June 28th, 2020</p>
//         <div className="space-y-4">
//           {courses.map((course, index) => (
//             <div key={index} className={`p-4 rounded-lg ${course.color} text-white`}>
//               <h4 className="text-lg font-semibold">{course.title}</h4>
//               <p className="text-sm">{course.enrolled} Enrolled</p>
//               {!course.full ? (
//                 <button className="mt-2 bg-white text-black px-3 py-1 rounded">Enroll</button>
//               ) : (
//                 <button className="mt-2 bg-gray-500 text-white px-3 py-1 rounded" disabled>Full</button>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         {/* Learning Section */}
//         <div className="mt-6">
//           <h3 className="text-xl font-bold mb-4">My Learning</h3>
//           <div className="space-y-4">
//             {learningData.map((item, index) => (
//               <div key={index}>
//                 <h5 className="text-lg">{item.title}</h5>
//                 <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
//                   <div
//                     className="bg-blue-500 h-4 rounded-full"
//                     style={{ width: `${item.progress}%` }}
//                   ></div>
//                 </div>
//                 <p className="text-sm text-gray-600">{item.progress}% complete</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Planning Section */}
//         <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
//           <h3 className="text-xl font-bold mb-4">Planning</h3>
//           <BigCalendar
//             localizer={localizer}
//             events={events}
//             startAccessor="start"
//             endAccessor="end"
//             style={{ height: 400 }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Roles;






