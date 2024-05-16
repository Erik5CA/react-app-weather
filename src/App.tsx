import "./App.css";
import Daily from "./components/Daily";
import Details from "./components/Details";
import Hourly from "./components/Hourly";

import LocationDate from "./components/LocationDate";
import ShowTemperture from "./components/ShowTemperture";
import { useWeather } from "./hooks/useWeather";
import { Weather } from "./types";
import { formatWeekList } from "./utils/formatWeekWeather";

function App() {
  // const [formatedWeekList, setFormatedWeekList] = useState<Weather[][]>();

  const weather = useWeather(false) as Weather;
  const weaterWeekle = useWeather(true) as Weather[];
  const formatedWeekList = formatWeekList(weaterWeekle);
  // if (weaterWeekle) {
  // setFormatedWeekList(formatWeekList(weaterWeekle));
  // console.log(formatedWeekList[0]);
  // }

  return (
    <>
      <LocationDate name={weather?.name} />
      {weather && <ShowTemperture {...weather} />}
      {formatedWeekList && <Hourly hourlyWeather={formatedWeekList[0]} />}
      {formatedWeekList && <Daily dailyList={formatedWeekList} />}
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
