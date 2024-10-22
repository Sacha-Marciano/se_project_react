import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

function RegisterModal({
  selectedPopup,
  setSelectedPopup,
  onClose,
  signUserUp,
  handleLogin,
}) {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    avatar: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const _handleSubmit = (evt) => {
    evt.preventDefault();
    signUserUp(data).then((response) => {
      onClose();
      handleLogin({ email: response.email, password: data.password });
    });
  };

  const handleRedirect = () => {
    onClose();
    setSelectedPopup("popup-login");
  };

  return (
    <ModalWithForm
      title="Sign up"
      closePopup={onClose}
      isOpen={selectedPopup === "popup-register"}
      onSubmit={_handleSubmit}
      buttonText="Next"
      alternateOptionText="or Log in"
      alternateOptionHandler={handleRedirect}
    >
      <label className="modal__label">
        Email*
        <input
          className="modal__input"
          id="email-register-id"
          placeholder="Email"
          type="email"
          required
          name="email"
          value={data.email}
          onChange={handleChange}
        />
      </label>
      <label className="modal__label">
        Password*
        <input
          className="modal__input"
          id="password-register-id"
          placeholder="Password"
          type="password"
          required
          minLength="4"
          maxLength="30"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
      </label>
      <label className="modal__label">
        Name
        <input
          className="modal__input"
          id="name-register-id"
          placeholder="Name"
          type="text"
          required
          minLength="2"
          maxLength="30"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
      </label>
      <label className="modal__label">
        Avatar URL
        <input
          className="modal__input"
          id="avatar"
          placeholder="Avatar URL"
          type="url"
          required
          name="avatar"
          value={data.avatar}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;