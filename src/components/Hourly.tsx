import HourlyCol from "./HourlyCol";

const hours = [
  {
    hour: "8 am",
    img: "https://openweathermap.org/img/wn/10d@2x.png",
    humidity: "24%",
    temp: "27°",
  },
  {
    hour: "9 am",
    img: "https://openweathermap.org/img/wn/10d@2x.png",
    humidity: "24%",
    temp: "27°",
  },
  {
    hour: "10 am",
    img: "https://openweathermap.org/img/wn/10d@2x.png",
    humidity: "24%",
    temp: "27°",
  },
  {
    hour: "10 am",
    img: "https://openweathermap.org/img/wn/10d@2x.png",
    humidity: "24%",
    temp: "27°",
  },
];

function Hourly() {
  return (
    <div className="container">
      <h3 className="container__title">Hourly</h3>
      <div className="container__item container__item--gap">
        {hours.map((hour) => (
          <HourlyCol
            key={hour.hour}
            hour={hour.hour}
            icon={hour.img}
            humidity={hour.humidity}
            temp={hour.temp}
          />
        ))}
      </div>
    </div>
  );
}

export default Hourly;
