import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js';

// Chart.js ke components ko register karna
ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const FIIDIIChart = ({ data, options }) => {

 

  return (
    <div>
        <Bar data={data} options={options} />
    </div>
  );
};

export default FIIDIIChart;
