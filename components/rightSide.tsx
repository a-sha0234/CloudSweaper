import * as React from "react";
import LineGraph from "./lineGraph";
import Card from "./card";
import { type } from "os";
// import styles from "../styles/RightSide.module.css";
import styles from "../styles/RightSide.module.css";

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
      type: "Visibility",
      unit: "Km",
    },
    { information: data.data.main.pressure, type: "Pressure", unit: "Pa" },
  ];

  return (
    <main className={styles.rightSide}>
      <div className={styles.cardContainer}>
        {" "}
        <div className={styles.lineGraph}>
          <p style={{ color: "white" }}>Next 5 days </p>
          <LineGraph forecast={foreCastData} />{" "}
        </div>{" "}
        {stats.map((attribute: any) => {
          return (
            <div className={styles.card}>
              <Card attribute={attribute} />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default RightSideInformation;
