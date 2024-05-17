import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { formatDate } from "../utils/formatDate";
import { RefreshIcon } from "./Icons";

const configDate: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
};

type Props = {
  setUpdateWeather: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  scrollTop: () => void;
};
/**
 * Footer component for the weather app.
 * Displays the current date and time, and a refresh button.
 *
 * @param setUpdateWeather - A function to set the state for updating weather data.
 * @param loading - A boolean indicating whether the weather data is currently loading.
 * @param scrollTop - A function to scroll to the top of the page.
 *
 * @returns - A React component for the footer.
 */
function Footer({ setUpdateWeather, loading, scrollTop }: Props) {
  // State variable to store the current date and time
  const [date, setDate] = useState(new Date());

  // Format the current date and time using the provided configuration
  const formatedDate = formatDate(date, configDate);

  // Function to handle the refresh button click event
  const handleRefresh = () => {
    setUpdateWeather(true); // Set the state to update weather data
    setDate(new Date()); // Update the current date and time
    scrollTop(); // Scroll to the top of the page
  };

  // Update the current date and time every second
  useEffect(() => {
    setDate(new Date());
  }, []);

  // Determine the class name for the refresh icon based on the loading state
  const cls = loading
    ? "footer__icon footer__icon--animation"
    : "footer__icon ";

  // Render the footer component
  return (
    <div className="footer">
      <p className="footer__text">Weather App</p>
      <div className="footer-refresh">
        <p className="footer__text footer__text--sm">Updated {formatedDate}</p>
        <a className={`footer__item`} onClick={handleRefresh}>
          <RefreshIcon cls={cls} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
