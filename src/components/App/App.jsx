import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header.jsx";
import getInfo from "../../utils/weatherApi.js";
import MainApp from "../MainApp/MainApp.jsx";
import Footer from "../Footer/Footer.jsx";
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
  const [clothesList, setClothesList] = useState(defaultClothingItems);

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

  const handleAddItemSubmit = (newName, newUrl, newType) => {
    const newCard = {
      _id: clothesList.length,
      name: newName,
      weather: newType,
      imageUrl: newUrl,
    };
    setClothesList([newCard, ...clothesList]);
  };

  const handleCardDelete = () => {
    setClothesList(
      clothesList.filter((item) => {
        return item._id !== selectedCard._id;
      })
    );
    closePopup();
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
                  settingArray={clothesList}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile settingArray={clothesList} handler={handleCardClick} />
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

//         {/* <ModalWithForm isActive={openPopupClass} /> */}
