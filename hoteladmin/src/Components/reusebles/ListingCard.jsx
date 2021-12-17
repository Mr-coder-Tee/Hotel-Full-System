import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ListingCard = () => {
  return (
    <div className="listingCardContainer">
      <div className="listingCardImageContainer"></div>
      <div className="listingCardDetails">
        <h3>Beds: 2</h3>
        <h3>Rooms: 2</h3>
        <h3>Adults: 2</h3>
        <h3>children: 2</h3>
        <h3>Remaing Rooms: 2</h3>
      </div>
      <div className="listingCardBtns ">
        <div>
          <button>
            <FontAwesomeIcon icon={faPencilAlt} className="cardIcon" />
          </button>
        </div>
        <div>
          <button className="deletebtn">
            <FontAwesomeIcon icon={faTrashAlt} className="cardIcon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
