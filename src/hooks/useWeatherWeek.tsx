import { useEffect, useState } from "react";
import { Weather } from "../types.d";
import { fetchWeatherWeek } from "../services/fetchWeather";

export const useWeatherWeek = () => {
  const [weatherWeek, setWeatherWeek] = useState<Weather[]>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const newLocalitacion = {
        latitud: position.coords.latitude,
        longitud: position.coords.longitude,
      };
      const getWeatherWeek = async () => {
        const newWeather = await fetchWeatherWeek(newLocalitacion);
        setWeatherWeek(newWeather);
      };
      getWeatherWeek();
    });
  }, []);

  return { weatherWeek };
};
