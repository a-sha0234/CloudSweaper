import * as React from "react";
import { useState } from "react";
import { Line } from "react-chartjs-2";

import { useContext } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip,
  scales,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip,
  scales
);

interface Props {
  forecast: any;
}

const LineGraph: React.FC<Props> = ({ forecast }) => {
  function getTemp() {
    // return array of temperatures
    let temparature = [];
    for (let i = 4; i < forecast.data.list.length; i += 6) {
      temparature.push(Math.round(forecast.data.list[i].main.temp - 273.15));
    }
    temparature.pop();
    return temparature;
  }

  function getDates() {
    // get dates from temps
    let dates = [];
    for (let i = 4; i < forecast.data.list.length; i += 6) {
      let data = forecast.data.list[i].dt_txt.split(" ");
      dates.push(data[0]);
    }

    dates.pop();

    return dates;
  }

  const data = {
    labels: getDates(),
    datasets: [
      {
        label: "Dataset 1",
        data: getTemp(),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },

        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div>
      {forecast && (
        <div>
          <Line options={options} data={data}></Line>
          {/* <h3>{forecast.data.list[0]}</h3> */}
        </div>
      )}
    </div>
  );
};

export default LineGraph;
