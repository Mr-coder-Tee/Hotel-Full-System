import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faUnlockAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const HotelsCard = ({hotel,index}) => {
  return (
    <div className="hotelTap">
      {/* <h3>{index+". "}</h3> */}
      <div className="hotelName">
        <div className="profileIconContainer ma-5-right">
          <FontAwesomeIcon icon={faUser} className="profieIcon" />
        </div>
        <h3> {hotel.name}</h3>
      </div>
      <div className="btnSetter">
        <button className="btnHotel ">
          <FontAwesomeIcon icon={faTrashAlt} className="deleteIcon" />
        </button>
        <button className="btnHotel">
          <FontAwesomeIcon icon={faUnlockAlt} className="reload"/>
        </button>
      </div>
    </div>
  );
};

export default HotelsCard;
