import React, { useRef, useEffect, useState } from "react";
import type { ChartData, ChartArea } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const labels = ["Jan", "Apr", "July", "Oct"];

export const options = {
  responsive: true,
  tension: 0.4,
  legend: {
    display: false,
  },
  datasetStrokeWidth: 3,
  pointDotStrokeWidth: 4,
  //   scaleLabel: "<%= Number(value).toFixed(0).replace('.', ',') + '°C'%>",
  scales: {
    yAxis: {
      stacked: true,
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },

    xAxis: {
      grid: {
        display: false,
        borderDash: [5, 5],
      },
      ticks: {
        color: "#fff",
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [80, 180, 100, 100],
      borderColor: "#63BDAF",
    },
    {
      label: "Dataset 2",
      data: [-5, 60, -20, 130],
      borderColor: "#DEF5F2",
    },
  ],
};

export default function OverviewChart() {
  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<"bar">>({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const chartData = {
      ...data,
      datasets: data.datasets.map((dataset) => ({
        ...dataset,
      })),
    };

    setChartData(chartData);
  }, []);

  return (
    <Chart ref={chartRef} type="line" data={chartData} options={options} />
  );
}
