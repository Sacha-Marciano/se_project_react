//import React properties
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

//import styles
import "./App.css";

//import components
import Header from "../Header/Header.jsx";
import getInfo from "../../utils/weatherApi.js";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import Profile from "../Profile/Profile.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";

//Import context
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";

//Other imports
import { position, APIkey } from "../../utils/constants.js"; //For WeatherApi call
import LoadingImage from "../../assets/Loading-image.png"; //Loading image
import {
  getServerItems,
  addServerItem,
  deleteServerItem,
} from "../../utils/api.js"; //API calls to local server

function App() {
  //Hooks
  const [info, setInfo] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [selectedPopup, setSelectedPopup] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothesList, setClothesList] = useState([]);

  //Functions up-lifted for components
  const handleAddClick = () => {
    setSelectedPopup("popup-add");
  };
  const handleCardClick = (card) => {
    setSelectedPopup("popup-card");
    setSelectedCard(card);
  };
  const closePopup = () => {
    setSelectedPopup("");
  };
  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  //Sends POST request to server and updates card's list
  const handleAddItemSubmit = (newName, newUrl, newType) => {
    const newCard = {
      _id: clothesList.length,
      name: newName,
      weather: newType,
      imageUrl: newUrl,
    };
    addServerItem(newCard).then(setClothesList([newCard, ...clothesList]));
  };

  //Sends DELETE request to server and updates card's list
  const handleCardDelete = () => {
    deleteServerItem(selectedCard._id)
      .then(
        setClothesList(
          clothesList.filter((item) => {
            return item._id !== selectedCard._id;
          })
        )
      )
      .finally(closePopup());
  };

  //On start/refresh
  useEffect(() => {
    setLoading(true);
    getInfo(position, APIkey)
      .then((obj) => {
        setInfo(obj);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getServerItems().then((data) => {
      setClothesList(data);
    });
  }, []);

  return isLoading ? (
    <img className="app__loading" src={LoadingImage} alt="Loading image" />
  ) : (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="app__container">
        <div className="app__content">
          <Header info={info} handler={handleAddClick} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  info={info}
                  handler={handleCardClick}
                  settingArray={clothesList}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  settingArray={clothesList}
                  handler={handleCardClick}
                  onClick={handleAddClick}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
        <AddItemModal
          selectedPopup={selectedPopup}
          handler={closePopup}
          onAddItem={handleAddItemSubmit}
        />
        <ItemModal
          isOpen={selectedPopup === "popup-card"}
          selectedCard={selectedCard}
          closePopup={closePopup}
          deleteCard={handleCardDelete}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
