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
  const data = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [
      {
        label: "FII Activity",
        data: [6000, 8000, 10000, 12000, 14000, 16000, 18000],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "DII Activity",
        data: [-1000, -2000, -3000, -4000, -5000, -6000, -7000],
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
    },
    scales: {
      y: {
        beginAtZero: true,
        stacked: true,
        ticks: {
          callback: function (value) {
            return `${value} cr`;
          },
        },
      },
      x: {
        stacked: true,
      },
    },
  };

  return (
    <div style={{ width: "", height: "200px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
