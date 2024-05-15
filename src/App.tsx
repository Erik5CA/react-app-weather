import "./App.css";
import Details from "./components/Details";
import Hourly from "./components/Hourly";

import LocationDate from "./components/LocationDate";
import ShowTemperture from "./components/ShowTemperture";
import { useWeather } from "./hooks/useWeather";

function App() {
  const weather = useWeather();

  return (
    <>
      <LocationDate name={weather?.name} />
      {weather && <ShowTemperture {...weather} />}
      <Hourly />
      <Details
        humidity={weather?.main.humidity}
        pressure={weather?.main.pressure}
        wind={weather?.wind.speed}
        clouds={weather?.clouds.all}
      />
    </>
  );
}

export default App;
