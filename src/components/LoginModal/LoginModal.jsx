import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

function LoginModal({ selectedPopup, onClose, handleLogin }) {
  const [data, setData] = useState({ email: "", password: "" });

  const _handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin(data);
    onClose();
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <ModalWithForm
      title="Log in"
      closePopup={onClose}
      isOpen={selectedPopup === "popup-login"}
      onSubmit={_handleSubmit}
      buttonText="Log in"
    >
      <label className="modal__label">
        Email
        <input
          className="modal__input"
          id="email-login-id"
          placeholder="Email"
          type="text"
          required
          name="email"
          value={data.email}
          onChange={handleChange}
        />
      </label>
      <label className="modal__label">
        Password
        <input
          className="modal__input"
          id="password-login-id"
          placeholder="Password"
          type="text"
          required
          name="password"
          value={data.password}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
