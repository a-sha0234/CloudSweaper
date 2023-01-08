import * as React from "react";
import { weather } from "../helper";

interface Props {
  data: any;
}

const LeftSideInformation: React.FC<Props> = ({ data }) => {
  // console.log("leftside comp...." + data.data.base);
  // console.log(data.data);

  console.log(weather);

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
    </div>
  );
};

export default LeftSideInformation;
