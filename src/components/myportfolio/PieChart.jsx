import React from 'react';
import { Chart } from 'react-google-charts';

const PieChart = ({ data }) => {


     const options = {
        title: "My Daily Activities",
      };
    return (
        <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"100%"}
      />
    );
};

export default PieChart;
