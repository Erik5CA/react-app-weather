import { useState } from "react";
import { Weather } from "../types";
import HourlyCol from "./HourlyCol";

type Props = {
  dailyList: Weather[][];
};
const WEEK_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const date = new Date();
const today = date.getDay();

function Daily({ dailyList }: Props) {
  const [select, setSelect] = useState(1);

  const handleSelect = (index: number) => {
    setSelect(index);
  };

  const nextDay = (index: number) => {
    const indexDay = index + today > 6 ? index + today - 7 : index + today;
    return indexDay;
  };

  return (
    <div className="container">
      <h3 className="container__title">Daily</h3>
      <div className="container__item container__item--days">
        {dailyList.map((_, index) => {
          if (index !== 0)
            return (
              <div
                key={index}
                className={
                  select === index
                    ? " container__daily container__daily-sel"
                    : "container__daily"
                }
                onClick={() => handleSelect(index)}
              >
                {WEEK_DAYS[nextDay(index)]}
              </div>
            );
        })}
      </div>
      <div className="container__item container__item--gapcol">
        {dailyList[select]?.map((hour, index) => (
          <HourlyCol
            key={hour.dt_txt}
            hour={hour.dt}
            icon={hour.weather[0].icon}
            humidity={Number((hour.pop * 100).toFixed(0))}
            temp={hour.main.temp_max}
            bl={index + 1 === 1 || index + 1 === 5 ? true : false}
          />
        ))}
      </div>
    </div>
  );
}

export default Daily;
