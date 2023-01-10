import * as React from "react";
import { weather } from "../helper";
import { CiLocationOn } from "react-icons/ci";
import { getCurrentDay } from "../helper";

interface Props {
  data: any;
}

const LeftSideInformation: React.FC<Props> = ({ data }) => {
  // console.log("leftside comp...." + data.data.base);
  // console.log(data.data);

  // console.log(weather);

  let image = () => {
    for (let i = 0; i < weather.length; i++) {
      if (weather[i].type == data.data.weather[0].main) {
        return weather[i].image;
      }
    }
  };

  return (
    <div>
      {" "}
      <img src={image()} width={400} height={400} />{" "}
      <p>{Math.round(data.data.main.temp - 273.15)}</p>
      <p>{data.data.weather[0].description}</p>
      <div>
        <span>Today</span>
        <span>
          {getCurrentDay()[2]}. {getCurrentDay()[1]} {getCurrentDay()[0]}{" "}
        </span>
      </div>
      <CiLocationOn />
      <span>{data.data.name}</span>
    </div>
  );
};

export default LeftSideInformation;
