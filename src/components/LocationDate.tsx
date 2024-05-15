import { LocationIcon } from "./Icons";
import "../styles/LocationDate.css";

//Format of the date => Tue, May 14 3:00 PM
const formatDate = (date: Date) => {
  const dateString = date.toUTCString();
  const dateDM = dateString.split(" ").splice(0, 3).join(" ");
  // Transform hour to 24 hrs to 12 hrs PM or AM
  const minutes = date.getMinutes();
  const hour24 = date.getHours();
  const hour12 = hour24 % 12 || 12;
  const ampm = hour24 < 12 ? "AM" : "PM";
  const hour = `${hour12}:${minutes} ${ampm}`;
  return `${dateDM} ${hour}`;
};

type Props = {
  name: string | undefined;
};

function LocationDate({ name }: Props) {
  const date = new Date();
  //   console.log(date);
  formatDate(date);
  return (
    <div className="location">
      <LocationIcon />
      <p className="location__loc">{name}</p>
      <p className="location__date">{formatDate(date)}</p>
    </div>
  );
}

export default LocationDate;
