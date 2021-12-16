import React, { useEffect, useState } from "react";
import TopNav from "../reusebles/TopNav";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

import HotelAPI from "../../ApiCalls/apiCalls";

const Listing = () => {
  const userID = localStorage.getItem("userID");
  const navigate=useNavigate();
  const [hotelname, setHotelName] = useState();

  useEffect(() => {
    const getHotelName = () => {
      HotelAPI.getUserDetails(userID)
        .then(({ data }) => {
            const name=data.data?.hotelname.trim()
            console.log('name: ',name)
          setHotelName(name);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getHotelName();
  }, []);

  useEffect(()=>{
    const getListings=()=>{
        HotelAPI.getHotelListing(hotelname).then((data)=>{
            console.log('listing',data)
        }).catch((error)=>{
            console.log('listing',error)
        })
    }
    if(hotelname){
        getListings()
    }
  },[hotelname])

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
          <button className="addBtn" onClick={()=>navigate('/Listing/add')}>+add room</button>
        </div>
      </div>
    </div>
  );
};

export default Listing;
