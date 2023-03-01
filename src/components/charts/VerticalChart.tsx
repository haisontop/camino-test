import React from "react";
import {
  CategoryScale,
  LinearScale,
  Chart as ChartJS,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["", "", "", "", ""],
  datasets: [
    {
      label: "",
      data: [9, 7, 8, 1, 5],
      fill: true,
      backgroundColor: "red",
      borderWidth: 0,
    },
  ],
};

const options = {
  scales: {
    x: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
    y: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
  },
  layout: {
    padding: 0,
  },
  plugins: {
    legend: {
      display: false,
    },

    datalabels: {
      datalabels: {
        align: "end",
        anchor: "end",
        color: function (context) {
          return context.dataset.backgroundColor;
        },
        font: function (context) {
          var w = context.chart.width;
          return {
            size: w < 512 ? 12 : 14,
            weight: "bold",
          };
        },
        formatter: function (value, context) {
          return context.chart.data.labels[context.dataIndex];
        },
      },
    },
  },
};

export default function VerticalChart() {
  return <Bar data={data} plugins={[ChartDataLabels]} options={options} />;
}
