import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
  

const TabButtons = ({ name, icon,getLocation }) => {
    const location = useLocation();

    console.log(getLocation,"--->",location.pathname)
  return (
    <Link to={getLocation} className={`sideNavTabs ${location.pathname==getLocation?'tapped':'upTapped'}`}>
      <FontAwesomeIcon icon={icon} style={{marginRight:20}}/>
      {name}
    </Link>
  );
};

export default TabButtons;
