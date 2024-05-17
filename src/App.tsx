import { useRef } from "react";
import "./App.css";
import Daily from "./components/Daily";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Hourly from "./components/Hourly";

import LocationDate from "./components/LocationDate";
import ShowTemperture from "./components/ShowTemperture";
import { useWeather } from "./hooks/useWeather";
import { useWeatherWeek } from "./hooks/useWeatherWeek";
import { formatWeekList } from "./utils/formatWeekWeather";
import { RefreshIcon } from "./components/Icons";

function App() {
  const { weather, setUpdateWeather, loading } = useWeather();
  const { weatherWeek } = useWeatherWeek();
  const formatedWeekList = formatWeekList(weatherWeek);
  const ref = useRef<HTMLDivElement>(null);

  const scrollTop = () => {
    ref.current?.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="app" ref={ref}>
      <LocationDate name={weather?.name} />
      {weather ? (
        <div className={loading ? "main" : "main main__animation"} id="main">
          <ShowTemperture {...weather} />
          {formatedWeekList && <Hourly hourlyWeather={formatedWeekList[0]} />}
          {formatedWeekList && <Daily dailyList={formatedWeekList} />}
          <Details
            humidity={weather?.main.humidity}
            pressure={weather?.main.pressure}
            wind={weather?.wind.speed}
            clouds={weather?.clouds.all}
          />
        </div>
      ) : (
        <div>
          <div className="main">
            <RefreshIcon cls="main__icon-loading" />
          </div>
          {/* <Footer setUpdateWeather={setUpdateWeather} loading={loading} / */}
        </div>
      )}
      <Footer
        setUpdateWeather={setUpdateWeather}
        loading={loading}
        scrollTop={scrollTop}
      />
    </div>
  );
}

export default App;
