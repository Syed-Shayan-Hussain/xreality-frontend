import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Out-School",
        data: [20, 12, 4, 4, 6, 8, 10],
        borderColor: "#34F7D4",
        backgroundColor: "rgba(52, 247, 212, 0.3)",
        tension: 0.4, // Smooth curve
        fill: false,
        pointRadius: 0, // No points
      },
      {
        label: "In-School",
        data: [5, 19, 10, 15, 8, 12, 15],
        borderColor: "#7534FF",
        backgroundColor: "rgba(117, 52, 255, 0.3)",
        tension: 0.4, // Smooth curve
        fill: false,
        pointRadius: 0, // No points
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 14,
            weight: "bold",
          },
          color: "#4A4A4A",
        },
      },
      title: {
        display: true,
        text: "In-School vs Out-School Performance",
        font: {
          size: 18,
          weight: "bold",
        },
        color: "#4A4A4A",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 14,
          },
          color: "#A3A3A3",
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
        },
        ticks: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
    },
  };

  return (
    <div className="p-6 max-w-lg bg-white rounded-xl shadow-lg">
      {/* <h2 className="text-lg font-semibold text-gray-700 mb-4">In-School vs Out-School Performance</h2> */}
      <div style={{ height: "500px" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
