import { HumidityIcon } from "./Icons";

type Props = {
  humidity: string;
  temp: string;
  hour: string;
  icon: string;
};

function HourlyCol({ hour, humidity, icon, temp }: Props) {
  return (
    <div className="container__item-col">
      <p className="container__item-hour">{hour}</p>
      <img className="container__item-img" src={icon} alt="" />
      <div className="container__item container__item--gap">
        <HumidityIcon cla={false} />
        <p className="container__item-hum">{humidity}</p>
      </div>
      <p>{temp}</p>
    </div>
  );
}

export default HourlyCol;
