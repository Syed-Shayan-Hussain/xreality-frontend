import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const MoodChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy existing chart instance to prevent duplication
    if (Chart.getChart(ctx)) {
      Chart.getChart(ctx).destroy();
    }

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["😊", "🤩", "☹️", "😡", "💔"], // Emoji labels
        datasets: [
          {
            label: "Mood Levels",
            data: [27, 28, 26, 27, 26], // Data for each mood
            backgroundColor: "#D6FDF6", // Light aqua color
            borderRadius: 10, // Rounded corners
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false, // Remove legend
          },
        },
        scales: {
          x: {
            ticks: {
              font: {
                size: 24, // Increase the font size for labels
              },
            },
            grid: {
              display: false, // Remove x-axis grid lines
            },
          },
          y: {
            min: 25, // Set y-axis start
            max: 28, // Set y-axis end
            ticks: {
              stepSize: 1, // Increment for y-axis ticks
            },
          },
        },
      },
    });
  }, []);

  return (
    <div className="relative w-full h-[350px] p-6 max-w-lg mt-8 bg-white rounded-xl   shadow-lg">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default MoodChart;
