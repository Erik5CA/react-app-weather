import { useEffect, useState } from "react";
import { Weather } from "../types.d";
import fetchWeather from "../services/fetchWeather";

export const useWeather = (
  isWeekle: boolean
): Weather | Weather[] | undefined => {
  const [weather, setWeather] = useState<Weather | Weather[]>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const newLocalitacion = {
        latitud: position.coords.latitude,
        longitud: position.coords.longitude,
      };
      const getWeather = async () => {
        if (isWeekle) {
          const newWeather = await fetchWeather(newLocalitacion, true);
          setWeather(newWeather);
        } else {
          const newWeather = await fetchWeather(newLocalitacion);
          setWeather(newWeather);
        }
      };
      getWeather();
    });
  }, []);
  if (isWeekle) {
    return weather as Weather[];
  }
  return weather as Weather;
};
