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

function HourlyCol({ hour, humidity, icon, temp, bl }: Props) {
  const date = new Date(hour * 1000);
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
