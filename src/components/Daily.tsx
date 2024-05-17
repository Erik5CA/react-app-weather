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

/**
 * Daily component to display daily weather forecast.
 *
 * @param dailyList - An array of Weather objects, where each object represents a day's weather forecast.
 * @returns A React component that displays daily weather forecast.
 */
function Daily({ dailyList }: Props) {
  /**
   * State variable to keep track of the selected day.
   * Initially, the second day (index 1) is selected.
   */
  const [select, setSelect] = useState(1);

  /**
   * Function to handle day selection.
   * Updates the `select` state variable with the selected day's index.
   *
   * @param index - The index of the selected day.
   */
  const handleSelect = (index: number) => {
    setSelect(index);
  };

  /**
   * Function to calculate the index of the day based on the current date.
   *
   * @param index - The index of the day.
   * @returns The index of the day based on the current date.
   */
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
