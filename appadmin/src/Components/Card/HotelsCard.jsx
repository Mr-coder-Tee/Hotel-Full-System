import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faUnlockAlt,
  faUser
} from "@fortawesome/free-solid-svg-icons";

const HotelsCard = ({ hotel, index }) => {
  console.log(hotel);
  return (
    <div className="hotelTap">
      {/* <h3>{index+". "}</h3> */}
      <div className="imgContainer">
        {hotel.hotelAvatar ? (
          <img src={hotel.hotelAvatar} />
        ) : (
          <img src="https://images.unsplash.com/photo-1533836506892-a4c329362ff5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" />
        )}
          <button className="lockbtn">
            <FontAwesomeIcon icon={faUnlockAlt} className="reload" />
          </button>
      </div>
      <div className="nameContainer">
        <h3> {hotel.hotelname}</h3>
        <button className="btnHotel ">
          <FontAwesomeIcon icon={faTrashAlt} className="deleteIcon" />
        </button>
      </div>
       
    </div>
  );
};

export default HotelsCard;
