import ItemCard from "../ItemCard/ItemCard.jsx";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import "./MainApp.css";

function MainApp() {
  return (
    <>
      <h1>MAINAPP (</h1>
      <WeatherCard />
      <ItemCard />
      <h1>)</h1>
    </>
  );
}

export default MainApp;
