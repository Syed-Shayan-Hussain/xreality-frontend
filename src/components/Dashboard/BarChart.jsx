import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Out-School",
        data: [20, 12, 4, 4, 6, 8, 10],
        backgroundColor: "#34F7D4",
        borderRadius: {
          topLeft: 15,
          topRight: 15,
          bottomLeft: 15,
          bottomRight: 15,
        },
      },
      {
        label: "In-School",
        data: [5, 19, 10, 15, 8, 12, 15],
        backgroundColor: "#7534FF",
        borderRadius: {
          topLeft: 15,
          topRight: 15,
          bottomLeft: 15,
          bottomRight: 15,
        },
        
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
      // Custom plugin to draw background rectangles
      backgroundPlugin: {
        beforeDatasetsDraw(chart) {
          const ctx = chart.ctx;
          const chartArea = chart.chartArea;
          const datasetMeta = chart.getDatasetMeta(0);
          const barWidth = datasetMeta.data[0].width;
          const barSpacing = 60; // Adjust space between background and bars
          
          ctx.save();
          ctx.fillStyle = "white"; // Background color for bars

          datasetMeta.data.forEach((dataPoint) => {
            const x = dataPoint.x - barWidth / 2 - barSpacing;
            const y = chartArea.top;
            const width = barWidth + barSpacing * 2;
            const height = chartArea.bottom - chartArea.top;

            // Draw background rectangle for each bar
            ctx.fillRect(x, y, width, height);
          });

          ctx.restore();
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 14,
          },
          color: "#A3A3A3",
        },
        categoryPercentage: 0.6,
        barPercentage: 0.6,
      },
      y: {
        stacked: true,
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    elements: {
      bar: {
        borderSkipped: false,
      },
    },
  };

  return (
    <div className="p-6 max-w-lg bg-white rounded-xl   shadow-lg">
      {/* <h2 className="text-lg font-semibold text-gray-700 mb-4">In-School vs Out-School Performance</h2> */}
      <div style={{ height: "500px" }}>
        <Bar data={data} options={options} plugins={[options.plugins.backgroundPlugin]} />
      </div>
    </div>
  );
};

export default BarChart;