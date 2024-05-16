import { Weather } from "../types";

export function formatWeekList(rawData: Weather[]) {
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
