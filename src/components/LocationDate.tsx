import { LocationIcon } from "./Icons";
import "../styles/LocationDate.css";
import { formatDate } from "../utils/formatDate";

type Props = {
  name: string | undefined;
};

/**
 * A functional component that displays the current location and date.
 *
 * @param props - The props for the component.
 * @param props.name - The name of the location.
 *
 * @returns - A JSX element representing the location and date.
 */
function LocationDate({ name }: Props) {
  // Get the current date
  const date = new Date();

  // Render the location and date
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
