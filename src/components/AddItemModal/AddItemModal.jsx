import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

function AddItemModal({ isOpen, onClose, onAddItem }) {
  const [data, setData] = useState({
    name: "",
    url: "",
    type: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  // const [name, setName] = useState("");
  // const handleNameChange = (evt) => {
  //   setName(evt.target.value);
  // };
  // const [url, setUrl] = useState("");
  // const handleUrlChange = (evt) => {
  //   setUrl(evt.target.value);
  // };

  // const [type, setType] = useState("");
  // const handleTypeChange = (evt) => {
  //   setType(evt.target.id);
  // };

  // const resetInputs = () => {
  //   setName("");
  //   setUrl("");
  // };

  const _handleSubmit = (evt) => {
    evt.preventDefault();
    onAddItem(data.name, data.url, data.type);
  };

  // useEffect(() => {
  //   resetInputs();
  // }, [isOpen]);

  return (
    <ModalWithForm
      title="New garnment"
      closePopup={onClose}
      isOpen={isOpen}
      onSubmit={_handleSubmit}
      buttonText="Add garnment"
    >
      <label className="modal__label">
        Name
        <input
          className="modal__input"
          id="name"
          placeholder="Name"
          type="text"
          required
          minLength="2"
          name="name"
          value={data.name}
          onChange={handleChange}
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
          name="url"
          value={data.url}
          onChange={handleChange}
        />
      </label>
      <fieldset className="modal__fieldset" onChange={handleChange}>
        <legend className="modal__legend">Select the weather type:</legend>
        <label className="modal__label_type_radio">
          <input
            className="modal__input_type_radio"
            id="hot"
            name="type"
            type="radio"
            required
            value="hot"
          />
          Hot
        </label>
        <label className="modal__label_type_radio">
          <input
            className="modal__input_type_radio"
            id="warm"
            name="type"
            type="radio"
            required
            value="warm"
          />
          Warm
        </label>
        <label className="modal__label_type_radio">
          <input
            className="modal__input_type_radio"
            id="cold"
            name="type"
            type="radio"
            required
            value="cold"
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
