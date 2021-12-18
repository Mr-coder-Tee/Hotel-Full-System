import React from "react";
import image from "../../img/logo.png";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHotel,
  faChartLine,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

const SideNav = () => {
  const location = useLocation();
  return (
    <div className="sideNavContainer">
      <div className="logoHolder">
        <img src={image} alt="logo" />
      </div>
      <div className="buttons">
        <Link
          className={`btn ${
            location.pathname === "/" ? "currentlocation" : "otherLocation"
          }`}
          to="/"
        >
          <FontAwesomeIcon icon={faChartLine} className="icon" />
          OverView
        </Link>
        <Link
          className={`btn ${
            location.pathname ==="/addadmin"
              ? "currentlocation"
              : "otherLocation"
          }`}
          to="/addadmin"
        >
          <FontAwesomeIcon icon={faHotel} className="icon" />
          Add Admin
        </Link>
      </div>
      <div className="logOut">
        <Link className="logoutbtn" to="/">
          <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
          Log out
        </Link>
      </div>
    </div>
  );
};

export default SideNav;

//https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
//https://fontawesome.com/v5.15/icons?d=gallery&p=2
