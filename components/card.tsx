import { FaWind } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";
import styles from "../styles/Card.module.css";
import ProgressBar from "@ramonak/react-progress-bar";
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
        {attribute.information}{" "}
        <span style={{ color: "grey" }}>{attribute.unit}</span>
      </p>
      {attribute.type == "Humidity" && (
        <ProgressBar
          completed={attribute.information}
          isLabelVisible={false}
          bgColor="#ffffff"
          baseBgColor="grey"
          animateOnRender
        />
      )}
      <div style={{ textAlign: "center" }}>
        {attribute.type == "Wind" && <FaWind size={25} />}{" "}
        {attribute.type == "Visibility" && <MdVisibility size={25} />}
      </div>
    </div>
  );
};

export default Card;
