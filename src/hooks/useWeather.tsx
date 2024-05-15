import { useEffect, useState } from "react";
import { Weather } from "../types.d";
import fetchWeather from "../services/fetchWeather";

export const useWeather = (): Weather | undefined => {
  const [weather, setWeather] = useState<Weather>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const newLocalitacion = {
        latitud: position.coords.latitude,
        longitud: position.coords.longitude,
      };
      const getWeather = async () => {
        const newWeather = await fetchWeather(newLocalitacion);
        setWeather(newWeather);
      };
      getWeather();
    });
  }, []);
  return weather;
};
