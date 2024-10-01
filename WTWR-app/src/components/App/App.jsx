import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import getInfo from "../../utils/weatherApi.js";
import { position, APIkey } from "../../utils/constants.js";
import MainApp from "../../components/MainApp/MainApp.jsx";
import Footer from "../Footer/Footer.jsx";

function App() {
  const [info, setInfo] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [openPopupClass, setOpenPopup] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleAddClick = () => {
    setOpenPopup("popup_add_open");
  };

  const handleCardClick = (card) => {
    setOpenPopup("popup_card_open");
    setSelectedCard(card);
  };

  useEffect(() => {
    setLoading(true);
    getInfo(position, APIkey)
      .then((obj) => {
        setInfo(obj);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return isLoading ? (
    <h1>LOADING, PLEASE WAIT</h1> //change to loading image
  ) : (
    <div className="app__container">
      <div className="app__content">
        <Header info={info} handler={handleAddClick} />
        <MainApp info={info} handler={handleCardClick} />
        <Footer />
      </div>
    </div>
  );
}

export default App;

//         {/* <ModalWithForm isActive={openPopupClass} /> */}
