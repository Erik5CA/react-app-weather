const defaultConfig: Intl.DateTimeFormatOptions = {
  day: "numeric",
  weekday: "long",
  month: "long",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
};

//Format of the date => Tue, May 14 3:00 PM
/**
 * This function formats a given date according to the provided configuration.
 * If no configuration is provided, it uses the default configuration.
 *
 * @param date - The date to be formatted.
 * @param config - The configuration for formatting the date.
 *                  If not provided, it uses the default configuration.
 *
 * @returns The formatted date as a string.
 */
export const formatDate = (
  date: Date,
  config: Intl.DateTimeFormatOptions = defaultConfig
) => {
  const formattedDate = new Intl.DateTimeFormat("en", config).format(date);
  return formattedDate;
};
