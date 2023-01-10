import * as React from "react";
import LineGraph from "./lineGraph";
import { useContext } from "react";
// import { Context } from "../pages/index";

interface Props {
  data: any;
  forecast: any;
}
const RightSideInformation: React.FC<Props> = ({ data, forecast }) => {
  // const value = useContext(Context);

  let foreCastData = forecast;

  return <div> {forecast && <LineGraph forecast={foreCastData} />}</div>;
};

export default RightSideInformation;
