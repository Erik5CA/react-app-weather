import { Location, Weather } from "../types.d";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

/**
 * Fetches the current weather data for a given location.
 *
 * @param location - The geographical location for which to fetch the weather data.
 * @returns A Promise that resolves to the weather data for the specified location.
 * @throws Will throw an error if the API request fails or if the response status is not OK.
 */
export const fetchWeather = async (location: Location): Promise<Weather> => {
  try {
    const response = await fetch(
      `${BASE_URL}weather?lat=${location.latitude}&lon=${location.longitude}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data: Weather = await response.json();
    return data;
  } catch {
    throw new Error("Something went wrong");
  }
};

/**
 * Fetches the weather forecast data for a given location for the next 5 days.
 *
 * @param location - The geographical location for which to fetch the weather forecast data.
 * @returns A Promise that resolves to an array of weather data for the specified location for the next 5 days.
 * @throws Will throw an error if the API request fails or if the response status is not OK.
 */
export const fetchWeatherWeek = async (location: Location) => {
  try {
    const response = await fetch(
      `${BASE_URL}forecast?lat=${location.latitude}&lon=${location.longitude}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data.list as Weather[];
  } catch {
    throw new Error("Something went wrong");
  }
};
