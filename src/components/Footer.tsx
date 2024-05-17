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
  // ref: HTMLDivElement | null;
  scrollTop: () => void;
};

function Footer({ setUpdateWeather, loading, scrollTop }: Props) {
  const [date, setDate] = useState(new Date());
  // const date = new Date();
  const formatedDate = formatDate(date, configDate);

  const handleRefresh = () => {
    setUpdateWeather(true);
    setDate(new Date());
    scrollTop();
  };

  useEffect(() => {
    setDate(new Date());
  }, []);

  const cls = loading
    ? "footer__icon footer__icon--animation"
    : "footer__icon ";
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
