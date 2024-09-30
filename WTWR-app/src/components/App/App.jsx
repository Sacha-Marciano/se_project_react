import { useState } from "react";

import Header from "../Header/Header.jsx";
import MainApp from "../MainApp/MainApp.jsx";
import Footer from "../Footer/Footer.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import "./App.css";

function App() {
  return (
    <div className="app__container">
      <Header />
      <MainApp />
      <Footer />
      <ModalWithForm />
      <ItemModal />
    </div>
  );
}

export default App;
