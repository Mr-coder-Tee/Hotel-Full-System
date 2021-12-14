import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const BookingCard = () => {
  const btn = "checkin";
  const Button = () =>
    btn === "checkin" ? (
      <button>check in</button>
    ) : (
      <button>cancel booking</button>
    );

  return (
    <div className="bookingCardContainer ">
      <div className={`line green-line`} />
      <div className="profileImgContainer">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="profile"
        />
      </div>
      <div className="bookingContent">
        <div className="refDetail">
          <h3>Arron Tylor</h3>
          <h4>Booking Code:0239FN93</h4>
        </div>
        <div className="roomDetails">
          <p>2 room 2 adults</p>
        </div>
        <div className="dates">
          <FontAwesomeIcon icon={faCalendar} style={{ marginRight: 20 }} />
          <p>24 Nov 2021-27 Nov 2021</p>
        </div>
        <div>
          <p>Payed</p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
