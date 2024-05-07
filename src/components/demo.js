import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const BarChart = () => {
  // Sample data for the last seven days (replace with actual data)
  const lastSevenDays = [
    "Day 1",
    "Day 2",
    "Day 3",
    "Day 4",
    "Day 5",
    "Day 6",
    "Day 7",
  ];
  const fiiActivity = [6000, 8000, 10000, 12000, 14000, 16000, 18000]; // FII activity for the last seven days
  const diiActivity = [-1000, -2000, -3000, -4000, -5000, -6000, -7000]; // DII activity for the last seven days

  const data = {
    labels: lastSevenDays,
    datasets: [
      {
        label: "FII Activity",
        data: fiiActivity,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "DII Activity",
        data: diiActivity,
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Last Seven Days FII & DII Activity",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += `${Math.abs(context.parsed.y)} cr`;
            }
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        stacked: true,
        ticks: {
          callback: function (value, index, values) {
            return value + " cr";
          },
        },
      },
      x: {
        stacked: true,
      },
    },
  };

  return (
    <div className="">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
