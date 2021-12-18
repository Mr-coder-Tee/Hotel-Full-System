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
  const [myListing, setMyListing] = useState([]);
  const[image,setImage]=useState()

  

  useEffect(() => {
    const listings = () => {
      HotelAPI.getHotelListing(userID)
        .then(({ data }) => {
          setMyListing(data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    };
    const get = () => {
      HotelAPI.getUserDetails(userID)
        .then(({ data }) => {
          setImage(data.data.hotelAvatar)
        })
        .catch((err) => {
          console.log(err);
        });
    };
    get();
    listings();
  }, []);

  //
  // console.log("myListing", myListing);

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
        {!loadingbar ? (
          <>
            {myListing.map((room) => (
              <ListingCard room={room} key={room._id} altImage={image}/>
            ))}
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Listing;
