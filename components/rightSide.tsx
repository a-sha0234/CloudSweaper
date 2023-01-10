import * as React from "react";
import LineGraph from "./lineGraph";
import Card from "./card";
import { type } from "os";

interface Props {
  data: any;
  forecast: any;
}
const RightSideInformation: React.FC<Props> = ({ data, forecast }) => {
  let foreCastData = forecast; // hold prop dara

  let stats = [
    { information: data.data.main.humidity, type: "Humidity", unit: "%" },
    { information: data.data.wind.speed, type: "Wind", unit: "mph" },
    {
      information: Math.round(data.data.visibility / 1000),
      type: "Visibility ",
      unit: "Km",
    },
    { information: data.data.main.pressure, type: "Pressure", unit: "" },
  ];

  return (
    <div>
      {" "}
      {forecast && <LineGraph forecast={foreCastData} />}{" "}
      {stats.map((attribute: any) => {
        return <Card attribute={attribute} />;
      })}
    </div>
  );
};

export default RightSideInformation;
