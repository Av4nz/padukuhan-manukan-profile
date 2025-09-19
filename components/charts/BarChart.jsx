import React from 'react'
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

const BarChart = ({labels, pekerjaanData}) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Jumlah",
        data: pekerjaanData,
        backgroundColor: "#416dcf",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "bottom",
      },
    },
  };

  return (
    <div className='w-full h-full'>
      <Bar data={data} options={options} />
    </div>
  )
}

export default BarChart
