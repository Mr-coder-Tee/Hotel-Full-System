import React, { useEffect, useState } from "react";
import TopNav from "../reusebles/TopNav";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import HotelAPI from "../../ApiCalls/apiCalls";
import Loading from "../Loading and Error/Loading";
import ListingCard from "../reusebles/ListingCard";


const Listing = () => {
  const userID = localStorage.getItem("userID");
  const navigate = useNavigate();
  const [loadingbar, setLoading] = useState(true);
  const [myListing,setMyListing]=useState([])

  // useEffect(() => {
  //   const get = () => {
  //     HotelAPI.getUserDetails(userID)
  //       .then(({ data }) => {
  //           const name=data.data?..trim()
  //           console.log('name: ',name)
  //         set(name);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   get();
  // }, []);

  // 
  
  

  return (
    <div className="lisitingContainer">
      <TopNav searchby={"Listing"} />
      <div style={{ padding: 20 }}>
        <h4>
          <FontAwesomeIcon icon={faClipboard} style={{ marginRight: 10 }} />
          /Listing
        </h4>
      </div>
      <div className="listingRowone">
        <h3>Lisings</h3>
        <div>
          <button className="addBtn" onClick={() => navigate("/Listing/add")}>
            +add room
          </button>
        </div>
      </div>
      <div className="cardHolder">
      <ListingCard/>
        {/* {!loadingbar ? <ListingCard/> : <Loading />} */}
        </div>
    </div>
  );
};

export default Listing;
