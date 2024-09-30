import headerLogo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";

import "./Header.css";

function Header() {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const location = "New York"; // This is hard-coded. It needs to be the result of the fetch request .location made in Api.jsx, imported to App.jsx
  const userName = "Terence Tegegne"; //This is hard-coded - API fetch request implement needed

  return (
    <div className="header">
      <img className="header__logo" src={headerLogo} alt="Logo" />
      <span className="header__date-location">
        {currentDate},{location}
      </span>
      <button className="header__button">+ Add clothes</button>
      <span className="header__user-info">{userName}</span>
      <img className="header__avatar" src={avatar} alt="Avatar" />
    </div>
  );
}

export default Header;
