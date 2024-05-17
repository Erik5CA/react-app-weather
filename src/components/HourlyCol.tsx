import { formatDate } from "../utils/formatDate";
import { RainIcon } from "./Icons";

type Props = {
  humidity: number;
  temp: number;
  hour: number;
  icon: string;
  bl?: boolean;
};

const configHour: Intl.DateTimeFormatOptions = {
  hour: "numeric",
  hour12: true,
};

/**
 * A component to display hourly weather information.
 *
 * @param hour - The timestamp of the weather data in Unix format.
 * @param humidity - The humidity percentage.
 * @param icon - The weather icon code.
 * @param temp - The temperature in Celsius.
 * @param bl - A boolean flag to indicate if the component should have a bottom left border.
 *
 * @returns A React component displaying the hourly weather information.
 */
function HourlyCol({ hour, humidity, icon, temp, bl }: Props) {
  // Convert the Unix timestamp to a Date object
  const date = new Date(hour * 1000);

  // Determine the CSS class for the bottom left border based on the 'bl' prop
  const border = bl ? "bl" : "";
  return (
    <div className={`container__item-col ${border}`}>
      <p className="container__item-hour">{formatDate(date, configHour)}</p>
      <img
        className="container__item-img"
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt=""
      />
      <div className="container__item container__item--flex container__item--gap0">
        <RainIcon />
        <p className="container__item-hum">{humidity}%</p>
      </div>
      <p>{temp.toFixed(0)}°</p>
    </div>
  );
}

export default HourlyCol;
