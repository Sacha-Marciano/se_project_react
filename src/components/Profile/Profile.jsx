import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

function Profile({ settingArray, handler }) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection settingArray={settingArray} handler={handler} />
    </div>
  );
}

export default Profile;
