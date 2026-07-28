import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const Chart = ({ arr = [], currency, days }) => {
  const prices = [];
  const date = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (days === "24h") date.push(new Date(arr[i][0]).toLocaleTimeString());
    else date.push(new Date(arr[i][0]).toLocaleDateString());
    prices.push(arr[i][1]);
  }

  const data = {
    labels: date,
    datasets: [
      {
        label: `Price in ${currency}`,
        data: prices,
        borderColor: "#0aabcf",
        backgroundColor: "rgba(10, 171, 207, 0.12)",
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.25,
        fill: true,
      },
    ],
  };

  return (
    <div className="h-[280px] w-full sm:h-[340px] lg:h-[380px]">
      <Line
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              mode: "index",
              intersect: false,
            },
          },
          scales: {
            x: {
              ticks: {
                color: "rgba(255,255,255,0.7)",
                maxTicksLimit: 6,
              },
              grid: { color: "rgba(255,255,255,0.06)" },
            },
            y: {
              ticks: { color: "rgba(255,255,255,0.7)" },
              grid: { color: "rgba(255,255,255,0.06)" },
            },
          },
        }}
        data={data}
      />
    </div>
  );
};

export default Chart;
