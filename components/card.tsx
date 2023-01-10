import { FaWind } from "react-icons/fa";

interface Props {
  attribute: any;
}

const Card: React.FC<Props> = ({ attribute }) => {
  return (
    <div>
      <p>
        {attribute.information} {attribute.unit}
      </p>

      <div>{attribute.type == "Wind" && <FaWind />} </div>
    </div>
  );
};

export default Card;
