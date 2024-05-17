import "../styles/ShowTemperture.css";
import { Weather } from "../types.d";

/**
 * This function is responsible for displaying the temperature, maximum and minimum temperature,
 * and the description of the weather condition.
 *
 * @param weather - An object containing the weather data.
 * @param weather.main - An object containing the main temperature, maximum temperature,
 * minimum temperature, and the temperature that feels like.
 * @param weather.main.temp - The current temperature.
 * @param weather.main.temp_max - The maximum temperature.
 * @param weather.main.temp_min - The minimum temperature.
 * @param weather.main.feels_like - The temperature that feels like.
 * @param weather.weather - An array containing the weather condition.
 * @param weather.weather[0].icon - The icon code of the weather condition.
 * @param weather.weather[0].description - The description of the weather condition.
 *
 * @returns A React component that displays the temperature, maximum and minimum temperature,
 * and the description of the weather condition.
 */
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
