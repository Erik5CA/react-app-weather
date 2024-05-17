import { useEffect, useState } from "react";
import { Weather } from "../types.d";
import { fetchWeatherWeek } from "../services/fetchWeather";
import { getCurrentLocation } from "../services/geolocation";

export const useWeatherWeek = () => {
  const [weatherWeek, setWeatherWeek] = useState<Weather[]>();

  useEffect(() => {
    const getWeatherWeek = async () => {
      const { latitude, longitude, isErro } = await getCurrentLocation();
      // console.log({ latitude, longitude });
      if (isErro) {
        throw new Error("We couldn´t get your location.");
      } else {
        const newLocalitacion = {
          latitude,
          longitude,
        };
        const newWeather = await fetchWeatherWeek(newLocalitacion);
        setWeatherWeek(newWeather);
      }
    };
    getWeatherWeek();
  }, []);

  return { weatherWeek };
};
