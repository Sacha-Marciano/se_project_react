//import React properties
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

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
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import EditProfileModal from "../EditProfileModal/EditProfileModal.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

//Import context
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

// Import authentication functions
import { signUserIn, signUserUp, getUserByToken } from "../../utils/auth.js";

//Other imports
import { position, APIkey } from "../../utils/constants.js"; //For WeatherApi call
import LoadingImage from "../../assets/Loading-image.png"; //Loading image
import {
  getServerItems,
  addServerItem,
  deleteServerItem,
  updateUserData,
  addCardLike,
  removeCardLike,
} from "../../utils/api.js"; //API calls to local server

function App() {
  //Hooks
  const [info, setInfo] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [selectedPopup, setSelectedPopup] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothesList, setClothesList] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [validationError, setValidationError] = useState(false);

  //Functions up-lifted for components
  const handleAddClick = () => {
    setSelectedPopup("popup-add");
  };
  const handleCardClick = (card) => {
    setSelectedPopup("popup-card");
    setSelectedCard(card);
  };
  const handleRegisterClick = () => {
    setSelectedPopup("popup-register");
  };
  const handleLoginClick = () => {
    setSelectedPopup("popup-login");
  };
  const handleUpdateClick = () => {
    setSelectedPopup("popup-update");
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
  const handleAddItemSubmit = (newName, newUrl, newType, resetInputs) => {
    const newCard = {
      name: newName,
      weather: newType,
      imageUrl: newUrl,
    };
    addServerItem(newCard)
      .then((response) => {
        setClothesList([response, ...clothesList]);
        closePopup();
        resetInputs();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  //Sends DELETE request to server and updates card's list
  const handleCardDelete = () => {
    deleteServerItem(selectedCard._id)
      .then(() => {
        setClothesList(
          clothesList.filter((item) => {
            return item._id !== selectedCard._id;
          })
        );
        closePopup();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  //Checks if login is succesfull and add token to local storage
  const handleLogin = (data) => {
    signUserIn(data)
      .then((response) => {
        localStorage.setItem("jwt", response.token);
        return getUserByToken(localStorage.getItem("jwt"));
      })
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
        closePopup();
      })
      .catch((err) => {
        setValidationError(true);
        console.log(err);
      });
  };

  //Removes the token from local storage on log out
  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
  };

  // Update profile on server and on display
  const handleProfileUpdate = (data) => {
    updateUserData(data).then((response) => {
      setCurrentUser(response);
    });
  };

  // Handle cards likes
  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    !isLiked
      ? addCardLike(id, token)
          .then((updatedCard) => {
            setClothesList((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      : removeCardLike(id, token)
          .then((updatedCard) => {
            setClothesList((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err));
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
    getServerItems()
      .then((data) => {
        setClothesList(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    getUserByToken(localStorage.getItem("jwt"))
      .then((response) => {
        if (!response) {
          <Navigate to="/" />;
        }
        setCurrentUser(response);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.error(`${err} - User is not logged in`);
      });
  }, []);

  //Add event listener when mounting popup with "selectedPopup"
  useEffect(() => {
    if (!selectedPopup) return;
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        closePopup();
      }
    };
    document.addEventListener("keydown", handleEscClose);

    //Remove event listener on unmounting
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [selectedPopup]);

  return isLoading ? (
    <img className="app__loading" src={LoadingImage} alt="Loading image" />
  ) : (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="app__container">
          <div className="app__content">
            <Header
              info={info}
              handler={handleAddClick}
              isLoggedIn={isLoggedIn}
              handleRegisterClick={handleRegisterClick}
              handleLoginClick={handleLoginClick}
            />
            <Routes>
              <Route path="*" element={<Navigate to="/" />} />
              <Route
                path="/"
                element={
                  <Main
                    info={info}
                    handler={handleCardClick}
                    onCardLike={handleCardLike}
                    settingArray={clothesList}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      settingArray={clothesList}
                      handler={handleCardClick}
                      onClick={handleAddClick}
                      handleUpdateClick={handleUpdateClick}
                      handleLogout={handleLogout}
                      onCardLike={handleCardLike}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Footer />
          </div>
          <AddItemModal
            selectedPopup={selectedPopup}
            onClose={closePopup}
            onAddItem={handleAddItemSubmit}
          />
          <ItemModal
            isOpen={selectedPopup === "popup-card"}
            selectedCard={selectedCard}
            closePopup={closePopup}
            deleteCard={handleCardDelete}
          />
          <LoginModal
            selectedPopup={selectedPopup}
            setSelectedPopup={setSelectedPopup}
            onClose={closePopup}
            handleLogin={handleLogin}
            validationError={validationError}
            setValidationError={setValidationError}
          ></LoginModal>
          <RegisterModal
            selectedPopup={selectedPopup}
            setSelectedPopup={setSelectedPopup}
            onClose={closePopup}
            signUserUp={signUserUp}
            handleLogin={handleLogin}
          ></RegisterModal>
          <EditProfileModal
            selectedPopup={selectedPopup}
            onClose={closePopup}
            handleProfileUpdate={handleProfileUpdate}
          ></EditProfileModal>
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
