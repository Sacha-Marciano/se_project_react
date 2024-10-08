import "./WeatherCard.css";
import { weatherConditions } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

function WeatherCard({ info }) {
  const actualCondition = weatherConditions.filter((item) => {
    return item.day === info.isDay && item.condition === info.condition;
  });

  const currentTempUnit = useContext(
    CurrentTemperatureUnitContext
  ).currentTemperatureUnit;

  return (
    <section className="weather-card">
      <p className="weather-card__temp">{info.temp[currentTempUnit]}</p>
      <img
        className="weather-card__image"
        src={actualCondition[0].src}
        alt="Weather card"
      />
    </section>
  );
}

export default WeatherCard;
