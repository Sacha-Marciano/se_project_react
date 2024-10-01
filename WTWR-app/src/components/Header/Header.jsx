import "./Header.css";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";

function Header({ info, handler }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Logo" />
      <p className="header__date-location">
        {currentDate}, {info.location}
      </p>
      <button className="header__add-button" type="button" onClick={handler}>
        + Add clothes
      </button>
      <div className="header__user-info">
        <p className="header__username">Terrence Tegegne</p>
        <img className="header__avatar" src={avatar} alt="Avatar" />
      </div>
    </header>
  );
}

export default Header;
