import { useContext } from "react";
import { Link } from "react-router-dom";

import "./SideBar.css";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SideBar({ handleUpdateClick, handleLogout }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <section className="side-bar">
      <div className="side-bar__user-info">
        <img
          className="side-bar__avatar"
          src={currentUser.avatar}
          alt="Avatar"
        />
        <p className="side-bar__username">{currentUser.name}</p>
      </div>
      <div className="side-bar__actions">
        <button
          className="side-bar__button"
          type="button"
          id="side-bar-update-button"
          onClick={handleUpdateClick}
        >
          Change profile data
        </button>
        <button
          className="side-bar__button"
          type="button"
          id="side-bar-logout-button"
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
    </section>
  );
}

export default SideBar;
