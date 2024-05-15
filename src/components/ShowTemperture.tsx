import "../styles/ShowTemperture.css";
import { Weather } from "../types.d";

function ShowTemperture({
  main: { temp, temp_max, temp_min, feels_like },
  weather,
}: Weather) {
  const { icon, description } = weather[0];
  return (
    <div className="temperture">
      <div className="temperture__item">
        <img
          className="temperture__img"
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt=""
        />
        <h2 className="temperture__temp">{temp.toFixed(0)}°</h2>
      </div>
      <div className="temperture__item">
        <p className="temperture__desc">
          {temp_max.toFixed(0)}° / {temp_min.toFixed(0)}°
        </p>
        <p className="temperture__desc temperture--pipe">
          Feels like {feels_like.toFixed(0)}°
        </p>
      </div>
      <div className="description">
        <p className="description__title">{description}</p>
      </div>
    </div>
  );
}

export default ShowTemperture;
