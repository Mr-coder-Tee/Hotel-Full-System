import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HotelAPI from "../../ApiCalls/apiCalls";

const TopNav = ({ searchby }) => {
  const location = useLocation();
  const userToken = localStorage.getItem("userToken");
  const [userData, setUserData] = useState();
  const [img, setImg] = useState();

  useEffect(() => {
    const getUserData = async () => {
      if (userToken) {
        HotelAPI.getUserDetails(userToken)
          .then(({ data }) => {
            setUserData(data.data.isExist);
            
          })
          .catch((err) => console.log(err));
        }
      };
      getUserData();
    }, []);
    
    // setImg(userData?.hotelname);
  // console.log("topnav", userData);
  return (
    <div
      className={`topNavContainer ${searchby ? "flexSpaceBetween" : "flexEnd"}`}
    >
      {searchby && (
        <div className="searchContainer">
          <FontAwesomeIcon icon={faSearch} className="icon" />
          <input
            placeholder={"Search " + searchby}
            className={`searchinputs`}
          />
        </div>
      )}
      {location.pathname !== "/Profile" && (
        <Link className="profilebtnContainer" to="/Profile">
          <div className="nameDetails">
            <h2>{userData?.hotelname}</h2>
            <p>ower</p>
          </div>
          <div className="imgContainer">
            <img
              src={
                userData?.hotelAvatar||"https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
              }
            />
          </div>
        </Link>
      )}
    </div>
  );
};

export default TopNav;
