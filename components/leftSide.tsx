import * as React from "react";
import { weather } from "../helper";
import { CiLocationOn } from "react-icons/ci";
import { getCurrentDay } from "../helper";
import styles from "../styles/LeftSide.module.css";

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
    <main className={styles.leftside}>
      {" "}
      <section>
        <img src={image()} className={styles.weatherImage} />{" "}
      </section>
      <section className={styles.information}>
        <p>{Math.round(data.data.main.temp - 273.15)}°C</p>
        <p>{data.data.weather[0].description}</p>
        <div>
          <span>Today</span>
          <span>
            {getCurrentDay()[2]}. {getCurrentDay()[1]} {getCurrentDay()[0]}{" "}
          </span>
        </div>
        <CiLocationOn />
        <span>{data.data.name}</span>
      </section>
    </main>
  );
};

export default LeftSideInformation;
