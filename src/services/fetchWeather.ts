import { Location, Weather } from "../types.d";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export const fetchWeather = async (location: Location): Promise<Weather> => {
  const response = await fetch(
    `${BASE_URL}weather?lat=${location.latitud}&lon=${location.longitud}&appid=${API_KEY}&units=metric`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data: Weather = await response.json();
  return data;
  // console.log(data);
};

export const fetchWeatherWeek = async (location: Location) => {
  const response = await fetch(
    `${BASE_URL}forecast?lat=${location.latitud}&lon=${location.longitud}&appid=${API_KEY}&units=metric`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data.list as Weather[];
};
