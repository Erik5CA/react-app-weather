import { Location, Weather } from "../types.d";

const API_KEY = import.meta.env.VITE_API_KEY;

const fetchWeather = async (location: Location): Promise<Weather> => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitud}&lon=${location.longitud}&appid=${API_KEY}&units=metric`
  );
  const data: Weather = await response.json();
  return data;
  // console.log(data);
};

export default fetchWeather;
