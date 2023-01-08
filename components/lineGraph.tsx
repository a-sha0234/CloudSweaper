import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler);

const LineGraph = () => {
  const data = {
    labels: ["1 Dec", "8 Dec", "16 Dec", "31 Dec"],
    datasets: [
      {
        label: "Sales Made",
        data: [3, 7, 4, 5],
        borderColor: ["red"],
        fill: true,
        backgroundColor: "red",
      },
    ],
  };
  const options = {
    tension: 0.4,
    title: {
      display: true,
      text: "linechrt",
    },
    scales: {
      //   y: [
      //     {
      //       gridLines: {
      //         display: false,
      //       },
      //       display: true,
      //       stacked: true,
      //       ticks: {
      //         beginAtZero: true,
      //         steps: 2,
      //         stepValue: 5,
      //         min: 0,
      //         max: 100,
      //       },
      //     },
      //   ],
      y: {
        min: 3,
        max: 3,
        gridLines: {
          lineWidth: 0,
        },
      },
    },
  };

  return (
    <div>
      <Line
        // data={{
        //   labels: ["red", "blue"],
        //   datasets: [
        //     {
        //       label: "efae",
        //       data: [23, 56, 7],
        //       backgroundColor: "green",
        //       borderColor: "red",
        //       fill: true,
        //     },
        //   ],
        // }}
        data={{ ...data }}
      ></Line>
    </div>
  );
};

export default LineGraph;
