import { HumidityIcon } from "./Icons";
import { CloudIcon, PressureIcon, WindIcon } from "./Icons";
import "../styles/Details.css";

type Props = {
  humidity: number | undefined;
  pressure: number | undefined;
  wind: number | undefined;
  clouds: number | undefined;
};

/**
 * A functional component that displays weather details.
 *
 * @param props - An object containing the weather details.
 * @param props.humidity - The humidity percentage.
 * @param props.pressure - The atmospheric pressure in hPa.
 * @param props.wind - The wind speed in m/s.
 * @param props.clouds - The cloud coverage percentage.
 *
 * @returns A React component that displays the weather details.
 */
function Details({ humidity, pressure, wind, clouds }: Props) {
  // Define an object to hold the details literals
  const DETAILS = {
    humidity: {
      name: "humidity",
      value: `${humidity} %`,
      icon: <HumidityIcon cla={true} />,
    },
    pressure: {
      name: "pressure",
      value: `${pressure} hPa`,
      icon: <PressureIcon />,
    },
    wind: { name: "wind", value: `${wind} m/s`, icon: <WindIcon /> },
    clouds: { name: "clouds", value: `${clouds} %`, icon: <CloudIcon /> },
  };
  // Render the weather details
  return (
    <div className="container">
      <h3 className="details__title">Details</h3>
      {Object.entries(DETAILS).map(([key, literal]) => (
        <div key={key} className="deatils__item">
          {literal.icon}
          <div className="details__info">
            <p className="details__info-title">{literal.name}</p>
            <p className="details__info-value">{literal.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Details;
