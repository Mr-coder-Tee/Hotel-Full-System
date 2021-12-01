import React, { useState, useEffect } from "react";
import HotelsCard from "../Card/HotelsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faEye,
  faEyeSlash,
  faAt,
  faLock,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const hotels = [
  { id: 1, name: "hotel 1" },
  { id: 2, name: "hotel 2" },
  { id: 3, name: "hotel 3" },
  { id: 4, name: "hotel 4" },
  { id: 5, name: "hotel 5" },
  { id: 6, name: "hotel 6" },
  { id: 7, name: "hotel 7" },
  { id: 8, name: "hotel 8" },
  { id: 9, name: "hotel 9" },
  { id: 10, name: "hotel 10" },
  { id: 11, name: "hotel 11" },
];

const AddAdmin = () => {
  const [type, setType] = useState("password");
  const [hotelSlice, setHotelSlice] = useState([]);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(5);
  const [prevBtn, setPrevBtn] = useState(true);
  const [nextBtn, setNextBtn] = useState(false);

  const EyeChanger = () =>
    type === "password" ? (
      <FontAwesomeIcon icon={faEye} />
    ) : (
      <FontAwesomeIcon icon={faEyeSlash} />
    );
  const passwordVisibility = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  const getSlice = () => {
    const data = [];
    if (hotels.length > 5) {
      hotels.slice(from, to).map((item) => {
        data.push(item);
      });
      setHotelSlice(data);
    } else {
      setHotelSlice();
    }
  };

  const next = () => {
    const size = hotels.length - to-1;
    if (from > 5) {
      setTo(to + 5);
    } else {
      setTo(to + size);
    }
    setFrom(to);
    setPrevBtn(false)
    getSlice();
  };
  const prev = () => {
      
    const dis=to-from;
    setTo(from);
    if (dis === 0) {
        setFrom(from-5)
        console.log("from-to->", from, to,dis);
    }else{
        console.log("from -to", from, to,dis);
    } 
  };
  const setValues = () => {
    setFrom(0);
    if (hotels.length > 5) {
      setTo(5);
    } else {
      setTo(hotels.length - 1);
    }
  };

  useEffect(() => {
    setValues();
    getSlice();
  }, []);

  return (
    <div className={`taps addAdminContainer`}>
      <div className="searchBar">
        <div className="searchInputContainer">
          <FontAwesomeIcon icon={faSearch} className="icon" />
          <input placeholder="search" className={`inputs`} />
        </div>
      </div>

      <div className="addForm">
        <div className="inputHolder">
          <div className="textInputContainer">
            <div className="inputIcons">
              <FontAwesomeIcon icon={faAt} />
              <input placeholder="Email" className="inputs" type="email" />
            </div>
          </div>
        </div>
        <div className="inputHolder marginLeft">
          <div className="textInputContainer">
            <div className="inputIcons">
              <FontAwesomeIcon icon={faLock} />
              <input placeholder="Password" className="inputs" type={type} />
              <button
                type="button"
                onClick={() => passwordVisibility()}
                className="passwordbtn"
              >
                <EyeChanger />
              </button>
            </div>
          </div>
        </div>
        <button className="addBtn">Add Hotel Admin</button>
      </div>
      <div className="hotelList">
        {hotelSlice.map((hotel, index) => (
          <HotelsCard hotel={hotel} index={index + 1} />
        ))}
      </div>
      <div className="hotelNavigation">
        <button
          className={`navBtn  ${prevBtn ? "prevDis" : "prev"}`}
          onClick={() => prev()}
          disabled={prevBtn}
        >
          <FontAwesomeIcon icon={faAngleLeft} style={{ marginRight: 5 }} />
          Prev
        </button>
        <button
          className={`navBtn  ${nextBtn ? "nextDis" : "next"}`}
          onClick={() => next()}
        >
          Next
          <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: 5 }} />
        </button>
      </div>
    </div>
  );
};

export default AddAdmin;
