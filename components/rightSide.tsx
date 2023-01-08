import * as React from "react";
import LineGraph from "./lineGraph";
interface Props {
  data: any;
  forecast: any;
}
const RightSideInformation: React.FC<Props> = ({ data, forecast }) => {
  // console.log(forecast.data.list);

  function fiveForecast() {}

  return (
    <div>
      <LineGraph />
    </div>
  );
};

export default RightSideInformation;
