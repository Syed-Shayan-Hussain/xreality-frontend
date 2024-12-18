import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Register required Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

const ProgressCard = ({ title, completedLessons, totalLessons }) => {
  const percentage = Math.round((completedLessons / totalLessons) * 100);

  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ['#7534FF', '#e0e0e0'],
        borderWidth: 0,
        cutout: '70%', // Inner radius for the percentage text
        borderRadius: 10, // Rounds the edges of the arc
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: { enabled: false }, // Disable tooltips
    },
    maintainAspectRatio: false, // Keeps the chart responsive
  };

  return (
    <div className="mt-4 bg-white p-4 rounded-lg shadow flex justify-between items-center">
      <div>
        <h4 className="text-purple-800 font-semibold">{title}</h4>
        <p className="text-gray-500 text-sm">
          {completedLessons}/{totalLessons} Lessons
        </p>
      </div>
      <div className="w-12 h-16 flex relative">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex ml-1 mt-2 items-center justify-center text-xs font-bold text-purple-800">
          {percentage}%
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
