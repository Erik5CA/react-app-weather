import { LocationIcon } from "./Icons";
import "../styles/LocationDate.css";
import { formatDate } from "../utils/formatDate";

type Props = {
  name: string | undefined;
};

function LocationDate({ name }: Props) {
  const date = new Date();
  return (
    <div className="location">
      <LocationIcon />
      <p className="location__loc">{name}</p>
      <p className="location__date">{formatDate(date)}</p>
    </div>
  );
}

export default LocationDate;
