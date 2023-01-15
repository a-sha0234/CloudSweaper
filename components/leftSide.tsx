import * as React from "react";
import { weather } from "../helper";
import { CiLocationOn } from "react-icons/ci";
import { getCurrentDay } from "../helper";
import styles from "../styles/LeftSide.module.css";

interface Props {
  data: any;
}

const LeftSideInformation: React.FC<Props> = ({ data }) => {
  let image = () => {
    let img = "";
    // get image based on weather type
    for (let i = 0; i < weather.length; i++) {
      if (weather[i].type == data.data.weather[0].main) {
        // return weather[i].image;
        img += weather[i].image;
      }
    }

    return (img = !"" ? img : weather[0].image);
  };

  return (
    <main className={styles.leftside}>
      {" "}
      <section>
        <img src={image()} className={styles.weatherImage} />{" "}
      </section>
      <section className={styles.information}>
        <p style={{ fontSize: "4rem", fontWeight: "bolder" }}>
          {Math.round(data.data.main.temp - 273.15)}
          <span style={{ color: "grey" }}>°c</span>
        </p>
        <p style={{ fontWeight: "bolder", fontSize: "1.5rem" }}>
          {data.data.weather[0].description}
        </p>
        <div>
          <span style={{ fontWeight: "bolder", fontSize: "1rem" }}>
            Today .{" "}
          </span>
          <span style={{ fontWeight: "bolder", fontSize: "1rem" }}>
            {getCurrentDay()[2]} {getCurrentDay()[1]} {getCurrentDay()[0]}{" "}
          </span>
        </div>
        <CiLocationOn />
        <span style={{ fontWeight: "bolder", fontSize: "1rem" }}>
          {data.data.name}
        </span>
      </section>
    </main>
  );
};

export default LeftSideInformation;
