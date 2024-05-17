import { LocationIcon } from "./Icons";
import "../styles/LocationDate.css";
import { formatDate } from "../utils/formatDate";

type Props = {
  name: string | undefined;
};

function LocationDate({ name }: Props) {
  const date = new Date();
  return (
    <div className="location" id="location">
      <div className="location__item">
        <LocationIcon />
        <p className="location__loc">{name}</p>
      </div>
      <p className="location__date">{formatDate(date)}</p>
    </div>
  );
}

export default LocationDate;
