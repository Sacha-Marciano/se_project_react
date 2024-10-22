import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

function LoginModal({
  selectedPopup,
  setSelectedPopup,
  onClose,
  handleLogin,
  validationError,
  setValidationError,
}) {
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setValidationError(false);
  };

  const _handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin(data);
    setData({ email: "", password: "" });
  };

  const handleRedirect = () => {
    onClose();
    setSelectedPopup("popup-register");
  };

  return (
    <ModalWithForm
      title="Log in"
      closePopup={onClose}
      isOpen={selectedPopup === "popup-login"}
      onSubmit={_handleSubmit}
      buttonText="Log in"
      alternateOptionText="or Register"
      alternateOptionHandler={handleRedirect}
      validationError={validationError}
    >
      <label className="modal__label">
        Email
        <input
          className="modal__input"
          id="email-login-id"
          placeholder="Email"
          type="email"
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
          type="password"
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
