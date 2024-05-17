import { useEffect, useState } from "react";
import { Weather } from "../types.d";
import { fetchWeather, fetchWeatherWeek } from "../services/fetchWeather";
import { getCurrentLocation } from "../services/geolocation";

/**
 * Custom React Hook to fetch and manage weather data.
 *
 * @returns An object containing the weather data, weather week data, updateWeather function,
 * loading state, and error state.
 */
export const useWeather = () => {
  /**
   * State variable to store the current weather data.
   */
  const [weather, setWeather] = useState<Weather>();

  /**
   * State variable to store the weather data for the next week.
   */
  const [weatherWeek, setWeatherWeek] = useState<Weather[]>();

  /**
   * State variable to trigger a weather update.
   */
  const [updateWeather, setUpdateWeather] = useState(false);

  /**
   * State variable to indicate loading state.
   */
  const [loading, setLoading] = useState(false);

  /**
   * State variable to store any error that occurs during the weather fetch.
   */
  const [error, setError] = useState<Error>();

  /**
   * Effect hook to fetch weather data when updateWeather state changes.
   */

  useEffect(() => {
    const getWeather = async () => {
      setLoading(true);
      try {
        const { latitude, longitude } = await getCurrentLocation();
        const newLocalitacion = {
          latitude,
          longitude,
        };
        const newWeather = await fetchWeather(newLocalitacion);
        setWeather(newWeather);
        const newWeatherWeek = await fetchWeatherWeek(newLocalitacion);
        setWeatherWeek(newWeatherWeek);

        setUpdateWeather(false);
        setLoading(false);
      } catch (e) {
        const newError: Error = e as Error;
        setError(newError);
        setLoading(false);
        return;
      }
    };
    getWeather();
  }, [updateWeather]);

  return {
    weather,
    weatherWeek,
    setUpdateWeather,
    updateWeather,
    loading,
    error,
  };
};
