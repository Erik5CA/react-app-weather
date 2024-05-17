import { useRef } from "react";
import "./App.css";
import Daily from "./components/Daily";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Hourly from "./components/Hourly";

import LocationDate from "./components/LocationDate";
import ShowTemperture from "./components/ShowTemperture";
import { useWeather } from "./hooks/useWeather";
import { formatWeekList } from "./utils/formatWeekWeather";
import {
  ErrorLocationIcon,
  ErrorWeatherIcon,
  RefreshIcon,
} from "./components/Icons";

/**
 * The main component of the weather application.
 * It handles the rendering of different sections based on the weather data and loading state.
 * It also includes the scroll to top functionality.
 */
function App() {
  /**
   * Deconstructed object from useWeather hook.
   * Contains weather, setUpdateWeather, loading, weatherWeek, and error.
   */
  const { weather, setUpdateWeather, loading, weatherWeek, error } =
    useWeather();

  /**
   * Formatted week list of weather data.
   * Created by passing weatherWeek to formatWeekList function.
   */
  const formatedWeekList = formatWeekList(weatherWeek);

  /**
   * Ref object for the main div element.
   * Used for scrolling to top.
   */
  const ref = useRef<HTMLDivElement>(null);

  /**
   * Function to scroll to the top of the main div element.
   * Uses the scroll method of the ref.current element.
   */
  const scrollTop = () => {
    ref.current?.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="app" ref={ref}>
      {!loading && !error && weather && (
        <>
          <LocationDate name={weather?.name} />
          <div className={loading ? "main" : "main main__animation"} id="main">
            <ShowTemperture {...weather} />
            <Hourly hourlyWeather={formatedWeekList[0]} />
            <Daily dailyList={formatedWeekList} />
            <Details
              humidity={weather?.main.humidity}
              pressure={weather?.main.pressure}
              wind={weather?.wind.speed}
              clouds={weather?.clouds.all}
            />
          </div>
          <Footer
            setUpdateWeather={setUpdateWeather}
            loading={loading}
            scrollTop={scrollTop}
          />
        </>
      )}

      {loading && !error && weather && (
        <div className="main main--heigth">
          <RefreshIcon cls="main__icon-loading" />
        </div>
      )}
      {loading && !error && !weather && (
        <div className="main main--heigth">
          <RefreshIcon cls="main__icon-loading" />
        </div>
      )}
      {error && !loading && (
        <div className="main main--heigth">
          {error.message.includes("location") ? (
            <ErrorLocationIcon />
          ) : (
            <ErrorWeatherIcon />
          )}

          <h2 className="main__text_error">{error.message}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
