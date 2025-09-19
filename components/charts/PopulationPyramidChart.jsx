import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PopulationPyramidChart = ({ labels, maleData, femaleData }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Laki-Laki",
        data: maleData.map((val) => -val),
        backgroundColor: "#416dcf",
      },
      {
        label: "Perempuan",
        data: femaleData,
        backgroundColor: "#a2c6ee",
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        ticks: {
          callback: function (value) {
            return Math.abs(value);
          },
        },
      },
      y: {
        stacked: true,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${Math.abs(context.raw)}`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full h-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default PopulationPyramidChart;
