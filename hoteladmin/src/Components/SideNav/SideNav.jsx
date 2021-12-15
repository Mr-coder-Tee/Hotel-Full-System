import React from "react";
import image from "../../Image/logo.png";
import TabButtons from "../reusebles/TabButtons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBed,
  faClipboard,
  faComment,
  faBell,
  faIdBadge,
  faPhoneVolume,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const SideNav = () => {
  const navigate=useNavigate()

  const logOut=()=>{
    localStorage.removeItem("userID")
    navigate('/')
  }
  return (
    <div className="sideNav">
      <img src={image} />
      <div className="bookingSection">
        <h3>Booking</h3>
        <TabButtons name="Booking" icon={faBook} getLocation="/booking" />
        <TabButtons name="Guests" icon={faBed} getLocation="/Guests" />
      </div>
      <div className="bookingSection">
        <h3>Management</h3>
        <TabButtons name="Listing" icon={faClipboard} getLocation="/Listing" />
        <TabButtons name="Reviews" icon={faComment} getLocation="/Reviews" />
        <TabButtons
          name="Notifications"
          icon={faBell}
          getLocation="/Notifications"
        />
        <TabButtons name="Clients" icon={faIdBadge} getLocation="/Clients" />
      </div>
      <div className="bookingSection">
        <h3>Support</h3>
        <TabButtons name="Contacts" icon={faPhoneVolume} getLocation="/Contacts" />
      </div>

      <div style={{ display: "flex", flexDirection: "column",position:'absolute',bottom:50,cursor:'pointer' }}>
        <div className="logOutBtn" onClick={()=>logOut()}>
          <FontAwesomeIcon icon={faSignOutAlt} className="logOutIcon" />
          Log Out
        </div>
      </div>
    </div>
  );
};

export default SideNav;
