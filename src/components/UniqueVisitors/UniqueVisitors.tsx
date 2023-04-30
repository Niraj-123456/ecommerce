import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const UniqueVisitors = () => {
  const [uniqueVisitors, setUniqueVisitor] = useState({
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
        label: "Visitors",
        data: [20, 25, 40, 38, 45, 55, 58, 48, 59, 65, 57, 77],
        fill: false,
        // you can set indiviual colors for each bar
        backgroundColor: [
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.6)",
        ],
        borderColor: "#5840bb",
        borderWidth: 2,
        tension: 0.5,
      },
    ],
  });
  return (
    <div className="mt-5">
      <div className="flex justify-between items-center">
        <h1 className="text-sm font-semibold">Unique Visitors</h1>
        <select className="custom__border__radius bg-[#F3F6FF] border border-[#F3F6FF] text-sm py-1 px-2">
          <option>Daily</option>
          <option>Monthly</option>
          <option>Quaterly</option>
          <option>Yearly</option>
        </select>
      </div>

      <Line data={uniqueVisitors} width={200} height={100} />
    </div>
  );
};

export default UniqueVisitors;
