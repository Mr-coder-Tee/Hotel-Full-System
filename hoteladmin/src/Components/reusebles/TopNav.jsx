import React from "react";
import { Link, useLocation } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopNav = ({ searchby }) => {
  const location = useLocation();
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
            <h2>Hotel name</h2>
            <p>ower</p>
          </div>
          <div className="imgContainer">
            <img
              src={
                "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              }
            />
          </div>
        </Link>
      )}
    </div>
  );
};

export default TopNav;
