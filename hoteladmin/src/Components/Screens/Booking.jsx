import React from "react";
import TopNav from "../reusebles/TopNav";
import BookingCard from "../reusebles/BookingCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const Booking = () => {
  return (
    <div className="bookingContainer">
      <TopNav searchby="booking"/>
      <div style={{padding:20}}>
        <h4>
          <FontAwesomeIcon icon={faBook} style={{ marginRight: 20 }} />
          /Booking
        </h4>
      </div>
      <h2>Hotel Bookings</h2>
      <div style={{padding:20}}>
        <BookingCard/>
      </div>

    </div>
  );
};

export default Booking;
