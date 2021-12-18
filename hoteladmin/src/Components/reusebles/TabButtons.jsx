import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
  

const TabButtons = ({ name, icon,getLocation }) => {
    const location = useLocation();

    const [currectLocation,setCurrentLocatioin]=useState('/')

    const path=location.pathname
    console.log('geo--->',path.includes(name),'name:-',name,'path:->',path)

  return (
    <Link to={getLocation} className={`sideNavTabs ${path.includes(name)?'tapped':'upTapped'}`}>
      <FontAwesomeIcon icon={icon} style={{marginRight:20}}/>
      {name}
    </Link> 
  );
};

export default TabButtons;
