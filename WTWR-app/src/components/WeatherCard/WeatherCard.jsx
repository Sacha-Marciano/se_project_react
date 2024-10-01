import "./WeatherCard.css";
import { weatherConditions } from "../../utils/constants";

function WeatherCard({ info }) {
  const actualCondition = weatherConditions.filter((item) => {
    return item.day === info.isDay && item.condition === info.condition;
  });

  return (
    <section className="weather-card">
      <p className="weather-card__temp">{Math.round(info.temp)} &deg;F</p>
      <img
        className="weather-card__image"
        src={actualCondition[0].src}
        alt="Weather card"
      />
    </section>
  );
}

export default WeatherCard;
