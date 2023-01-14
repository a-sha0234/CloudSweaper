import { FaWind } from "react-icons/fa";
import { Line, Circle } from "rc-progress";
import styles from "../styles/Card.module.css";

interface Props {
  attribute: any;
}

const Card: React.FC<Props> = ({ attribute }) => {
  function text() {
    if (attribute.type == "Humidity") {
      return "Humidity";
    } else if (attribute.type == "Wind") {
      return "Wind Speed ";
    } else if (attribute.type == "Visibility") {
      return "Visibility";
    } else if (attribute.type == "Pressure") {
      return "Pressure";
    }
  }
  return (
    <div className={styles.card__information}>
      <p className={styles.description}>{text()}</p>
      <p id={styles.attribute}>
        {attribute.information} {attribute.unit}
      </p>

      <div>{attribute.type == "Wind" && <FaWind />} </div>
    </div>
  );
};

export default Card;
