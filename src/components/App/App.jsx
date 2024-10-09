import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header.jsx";
import getInfo from "../../utils/weatherApi.js";
import MainApp from "../MainApp/MainApp.jsx";
import Footer from "../Footer/Footer.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import Profile from "../Profile/Profile.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";

import {
  position,
  APIkey,
  defaultClothingItems,
} from "../../utils/constants.js";
import LoadingImage from "../../assets/Loading-image.png";

import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";

function App() {
  const [info, setInfo] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [selectedPopup, setOpenPopup] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleAddClick = () => {
    setOpenPopup("popup-add");
  };

  const handleCardClick = (card) => {
    setOpenPopup("popup-card");
    setSelectedCard(card);
  };

  const closePopup = () => {
    setOpenPopup("");
  };

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

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };
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
                <MainApp
                  info={info}
                  handler={handleCardClick}
                  settingArray={defaultClothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  settingArray={defaultClothingItems}
                  handler={handleCardClick}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
        <ModalWithForm
          title="New garnment"
          isOpen={selectedPopup === "popup-add"}
          closePopup={closePopup}
        >
          <label className="modal__label">
            Name
            <input
              className="modal__input"
              id="name"
              placeholder="Name"
              type="text"
              required
            />
          </label>
          <label className="modal__label">
            Image
            <input
              className="modal__input"
              id="imageUrl"
              placeholder="Image Url"
              type="url"
              required
            />
          </label>
          <fieldset className="modal__fieldset">
            <legend className="modal__legend">Select the weather type:</legend>
            <label className="modal__label_type_radio">
              <input
                className="modal__input_type_radio"
                id="hot"
                name="weather-type"
                type="radio"
                required
              />
              Hot
            </label>
            <label className="modal__label_type_radio">
              <input
                className="modal__input_type_radio"
                id="warm"
                name="weather-type"
                type="radio"
                required
              />
              Warm
            </label>
            <label className="modal__label_type_radio">
              <input
                className="modal__input_type_radio"
                id="cold"
                name="weather-type"
                type="radio"
                required
              />
              Cold
            </label>
          </fieldset>
        </ModalWithForm>
        <ItemModal
          isOpen={selectedPopup === "popup-card"}
          selectedCard={selectedCard}
          closePopup={closePopup}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;

//         {/* <ModalWithForm isActive={openPopupClass} /> */}
