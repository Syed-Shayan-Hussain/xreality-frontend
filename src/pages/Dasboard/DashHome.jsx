import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import ProgressCard from '../../components/Dashboard/ProgressCard'; // Import the ProgressCard component
import img from '../../assets/dashimg.png';
import grpimg1 from '../../assets/Group.png';
import grpimg2 from '../../assets/Group (1).png';
import grpimg3 from '../../assets/Group (2).png';
import grpimg4 from '../../assets/Group (3).png';
import grpimg5 from '../../assets/Group (4).png';
import grpimg6 from '../../assets/Group (5).png';
import { useTable } from 'react-table';
import '../../App.css';
import BarChart from "../../components/Dashboard/BarChart";
import LineChart from "../../components/Dashboard/LineChart";
import MoodChart from "../../components/Dashboard/MoodChart";
import { useState , useEffect } from "react";
import MoodModal from "../../components/Dashboard/MoodModal";
const stats = [
  { img: grpimg1, title: "My Subjects", value: "06" },
  { img: grpimg2, title: "My Teachers", value: "08" },
  { img: grpimg3, title: "My Courses", value: "02" },
  { img: grpimg4, title: "My Attendance", value: "90%" },
  { img: grpimg5, title: "Class Participation", value: "08" },
  { img: grpimg1, title: "Class Participation", value: "90%" },
  { img: grpimg6, title: "Certificates", value: "08" },
];

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
   

  useEffect(() => {
    // Show modal when the page loads
    setShowModal(true);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false); // Close modal
  };
  const data = React.useMemo(
    () => [
      {
        course: 'Mathematics',
        level: 'High School',
        type: 'Online',
        date: '09/15/2023',
        time: '8:00 AM',
        progress: 65,
      },
      {
        course: 'Biology',
        level: 'Middle School',
        type: 'In-Person',
        date: '09/17/2023',
        time: '10:00 AM',
        progress: 80,
      },
      // Add more rows as needed
    ],
    []
  );

  const teacherData = React.useMemo(
    () => [
      {
        name: 'John Doe',
        subject: 'Mathematics',
        date: '09/15/2023',
        time: '8:00 AM',
        status: 'Live',
      },
      // Add more rows as needed
    ],
    []
  );

  const assignmentData = React.useMemo(
    () => [
      {
        title: 'Math Homework',
        subject: 'Mathematics',
        date: '09/15/2023',
        grade: 'A+',
        status: 'Completed',
      },
      // Add more rows as needed
    ],
    []
  );

  const courseColumns = React.useMemo(
    () => [
      { Header: 'Course', accessor: 'course' },
      { Header: 'Level', accessor: 'level' },
      { Header: 'Type', accessor: 'type' },
      { Header: 'Date', accessor: 'date' },
      { Header: 'Time', accessor: 'time' },
      {
        Header: 'Progress',
        accessor: 'progress',
        Cell: ({ value }) => (
          <div className="w-16 h-2 bg-gray-200 rounded-full">
            <div style={{ width: `${value}%` }} className="h-2 bg-primary rounded-full"></div>
          </div>

        ),
      },
    ],
    []
  );
  const teacherColumns = React.useMemo(
    () => [
      { Header: 'Name', accessor: 'name' },
      { Header: 'Subject', accessor: 'subject' },
      { Header: 'Date', accessor: 'date' },
      { Header: 'Time', accessor: 'time' },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => (
          <span className={`text-${value === 'Live' ? 'green' : 'gray'}-500`}>{value}</span>
        ),
      },
    ],
    []
  );

  const assignmentColumns = React.useMemo(
    () => [
      { Header: 'Title', accessor: 'title' },
      { Header: 'Subject', accessor: 'subject' },
      { Header: 'Date', accessor: 'date' },
      { Header: 'Grade', accessor: 'grade' },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => (
          <span
            className={`text-${value === 'Completed' ? 'blue' : 'gray'}-500 px-3 py-1 rounded-full bg-${value === 'Completed' ? 'blue' : 'gray'}-100`}
          >
            {value}
          </span>
        ),
      },
    ],
    []
  );

  const Table = ({ columns, data }) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable({ columns, data });

    return (
      <table {...getTableProps()} className="min-w-full text-sm mb-8">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="text-gray-500">
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="py-2 px-4 text-left">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border-t">
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="py-3 px-4">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  return (
    <div className="min-h-screen max-md:w-[90%] mx-auto  overflow-x-hidden md:p-4">
      <div className="mt-8 max-sm:text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-primary my-4">Hello, Good Morning 👋</h1>
        <p className="text-gray-500 text-lg font-medium">Welcome to XReality EDU Learning</p>
      </div>
      <MoodModal show={showModal} onClose={handleCloseModal} />
      <div className="flex flex-col md:flex-row items-center w-full  mx-auto gap-8">
        <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg w-full max-w-sm md:max-w-full px-4 md:px-6 items-center ">
          {/* Text Section */}
          <div className="text-center md:text-left md:flex-1">
            <h2 className="text-lg md:text-xl font-semibold text-black">
              Learn effectively and efficiently with us!
            </h2>
            <p className="text-gray-400 mt-2">
              Use promo code <strong>#JOINNOW30</strong> and get 30% off.
            </p>
            <button className="mt-4 md:mt-6 text-sm md:text-lg bg-primary text-white py-2 px-6 md:py-3 md:px-8 rounded-full">
              Join a new Course
            </button>
          </div>

          {/* Image Section */}
          <div className="mt-4 md:mt-0 md:ml-4 w-3/4 md:w-1/3">
            <img src={img} alt="Promo" className="w-full object-contain" />
          </div>
        </div>

        {/* Calendar Section */}
        <div className="w-full max-w-sm md:max-w-[25%] bg-white rounded-2xl shadow-lg p-4">
          <Calendar />
        </div>
      </div>


      <div className="flex flex-col md:flex-row mt-5 w-full">
        {/* Stats Section */}
        <div className="w-full md:w-3/4 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:pr-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col  bg-white rounded-xl shadow-lg p-6"
            >
              <img src={stat.img} alt="" className="w-12 h-12" />
              <h3 className="text-gray-400 mt-4 font-semibold">{stat.title}</h3>
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Learning & Tasks Section */}
        <div className="w-full md:w-1/4 mt-5 md:mt-0 flex flex-col items-start">
          <div className="mb-8 w-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Continue Learning</h3>
            <ProgressCard
              title="Cyber Security"
              completedLessons={12}
              totalLessons={16}
            />
            <ProgressCard
              title="Design Systems"
              completedLessons={10}
              totalLessons={18}
            />
          </div>

          <div className="mb-8 w-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Tasks</h3>
            <ProgressCard
              title="Cyber Security"
              completedLessons={12}
              totalLessons={16}
            />
            <ProgressCard
              title="Design Systems"
              completedLessons={10}
              totalLessons={18}
            />
          </div>
        </div>
      </div>
   
      <div className="mt-8 w-full">
        <h2 className="text-xl font-semibold text-black mb-4">Analytics</h2>

        {/* Charts Container */}
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8 mx-auto w-full ">
          {/* Bar Chart */}
          <div className=" lg:w-1/2  p-1 ">
            <BarChart />
          </div>

          {/* Line Chart */}
          <div className=" lg:w-1/2  p-1 ">
            <LineChart />
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8 mx-auto w-full ">
          {/* Bar Chart */}
          <div className=" lg:w-1/2  p-1 ">
            <MoodChart />
          </div>

          {/* Line Chart */}
          
        </div>
      </div>

      <div className="w-full max-md:w-[95%] mx-auto">
        <div className="md:p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Current Activities</h2>

          {/* My Courses Table */}
          <div className="mb-8 bg-white max-sm:max-w-sm max-md:max-w-md rounded-lg overflow-x-auto shadow p-4">
            <h3 className="text-md font-semibold text-gray-700 mb-2">My Courses</h3>
            <Table columns={courseColumns} data={data} />
          </div>

          {/* My Teachers Table */}
          <div className="mb-8 bg-white max-sm:max-w-sm max-md:max-w-md rounded-lg overflow-x-auto shadow p-4">
            <h3 className="text-md font-semibold text-gray-700 mb-2">My Teachers</h3>
            <Table columns={teacherColumns} data={teacherData} />
          </div>

          {/* Assignments Table */}
          <div className="bg-white max-sm:max-w-sm max-md:max-w-md rounded-lg overflow-x-auto shadow p-4">
            <h3 className="text-md font-semibold text-gray-700 mb-2">Assignments</h3>
            <Table columns={assignmentColumns} data={assignmentData} />
          </div>
        </div>
      </div>


    </div>
  );
};

export default Dashboard;
