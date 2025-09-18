import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ labels, data }) => {
  const backgroundColors = [
    "#e0ebf9",
    "#c8dcf5",
    "#a2c6ee",
    "#76a7e4",
    "#5688db",
    "#416ecf",
    "#385bbd",
    "#334b9a",
    "#2d417b",
  ];

  const borderColors = [
    "#ffffff"
  ];

  const chartData = {
    labels,
    datasets: [
      {
        label: "Jumlah",
        data,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },

    },
  };
  return (
    <div className="w-full h-full">
      <Pie data={chartData} options={options} />
    </div>
  
);
};

export default DoughnutChart;
