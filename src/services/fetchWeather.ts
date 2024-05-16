import { Location, Weather } from "../types.d";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const fetchWeather = async (
  location: Location,
  isWeekly = false
): Promise<Weather | Weather[]> => {
  const parameter = isWeekly ? "forecast" : "weather";
  const response = await fetch(
    `${BASE_URL}${parameter}?lat=${location.latitud}&lon=${location.longitud}&appid=${API_KEY}&units=metric`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  if (isWeekly) {
    const data = await response.json();
    return data.list as Weather[];
  }
  const data: Weather = await response.json();
  return data;
  // console.log(data);
};

export default fetchWeather;
