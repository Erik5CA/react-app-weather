import { Weather } from "../types";
import HourlyCol from "./HourlyCol";

type Props = {
  hourlyWeather: Weather[];
};

function Hourly({ hourlyWeather }: Props) {
  return (
    <div className="container">
      <h3 className="container__title">Hourly</h3>
      <div className="container__item container__item--gapcol">
        {hourlyWeather?.map((hour, index) => (
          <HourlyCol
            key={hour.dt}
            hour={hour.dt}
            icon={hour.weather[0].icon}
            humidity={hour.pop * 100}
            temp={hour.main.temp_max}
            bl={index + 1 === 1 || index + 1 === 5 ? true : false}
          />
        ))}
      </div>
    </div>
  );
}

export default Hourly;
