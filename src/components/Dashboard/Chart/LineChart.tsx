import React, { useState } from "react";

import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const LineChart = () => {
  const [chartData, setChartData] = useState({
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        label: "Profit",
        data: [20, 25, 28, 38, 42, 48, 53, 59, 62, 68, 75, 78],
        fill: false,
        // you can set indiviual colors for each bar
        backgroundColor: [
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.6)",
        ],
        borderColor: "#5840bb",
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  });
  return (
    <div className="mt-5 flex flex-col h-[100%]">
      <div className="flex justify-between items-center">
        <h1 className="text-md font-semibold">Sales statistics</h1>
        <select className="custom__border__radius bg-[#F3F6FF] border border-[#F3F6FF] py-2 px-3">
          <option>Daily</option>
          <option>Monthly</option>
          <option>Quaterly</option>
          <option>Yearly</option>
        </select>
      </div>
      <div className="flex-1">
        <Line data={chartData} width={400} height={300} />
      </div>
    </div>
  );
};

export default LineChart;
