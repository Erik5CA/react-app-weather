import { useEffect, useState } from "react";
import { Weather } from "../types.d";
import { fetchWeather } from "../services/fetchWeather";

export const useWeather = () => {
  const [weather, setWeather] = useState<Weather>();
  const [updateWeather, setUpdateWeather] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const newLocalitacion = {
        latitud: position.coords.latitude,
        longitud: position.coords.longitude,
      };
      const getWeather = async () => {
        setLoading(true);
        const newWeather = await fetchWeather(newLocalitacion);
        setWeather(newWeather);
        setUpdateWeather(false);
        setLoading(false);
      };
      getWeather();
    });
  }, [updateWeather]);

  return { weather, setUpdateWeather, updateWeather, loading };
};
