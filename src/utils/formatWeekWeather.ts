import { Weather } from "../types";

/**
 * This function formats a raw weather data array into a 2D array of weekly weather data.
 *
 * @param rawData - The raw weather data array. It can be `undefined` if no data is available.
 * @returns A 2D array of weekly weather data. Each inner array represents a week,
 *          and each week contains 8 weather data items.
 *
 * @remarks
 * The function assumes that the raw data array contains weather data for each day.
 * It groups the data into weeks, where each week contains 8 weather data items.
 * If the raw data array is `undefined`, the function returns an empty array.
 */
export function formatWeekList(rawData: Weather[] | undefined) {
  let dayList: Weather[] = [];
  const weekList: Weather[][] = [];
  rawData?.forEach((item, index) => {
    const isDivider = (index + 1) % 8 === 0;
    dayList.push(item);
    if (isDivider) {
      weekList.push(dayList);
      dayList = [];
    }
  });
  return weekList;
}
