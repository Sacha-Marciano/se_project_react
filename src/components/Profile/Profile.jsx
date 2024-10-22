import "./Profile.css";

import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

function Profile({
  settingArray,
  handler,
  onClick,
  handleUpdateClick,
  handleLogout,
  onCardLike,
}) {
  return (
    <div className="profile">
      <SideBar
        handleUpdateClick={handleUpdateClick}
        handleLogout={handleLogout}
      />
      <ClothesSection
        settingArray={settingArray}
        handler={handler}
        onClick={onClick}
        onCardLike={onCardLike}
      />
    </div>
  );
}

export default Profile;
