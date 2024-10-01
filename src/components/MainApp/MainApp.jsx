import "./MainApp.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard.jsx";

function MainApp({ info, handler, settingArray }) {
  return (
    <main className="main-app">
      <WeatherCard info={info} />
      <p className="main-app__phrase">
        Today is {info.temp} &deg;F / You may want to wear :
      </p>
      <ul className="main-app_list">
        {settingArray
          .filter((item) => {
            return item.weather === info.type;
          })
          .map((item) => {
            return (
              <ItemCard key={item._id} item={item} onCardClick={handler} />
            );
          })}
      </ul>
    </main>
  );
}

export default MainApp;
