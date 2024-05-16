const defaultConfig: Intl.DateTimeFormatOptions = {
  day: "numeric",
  weekday: "long",
  month: "long",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
};

//Format of the date => Tue, May 14 3:00 PM
export const formatDate = (
  date: Date,
  config: Intl.DateTimeFormatOptions = defaultConfig
) => {
  const formattedDate = new Intl.DateTimeFormat("en", config).format(date);
  return formattedDate;
};
