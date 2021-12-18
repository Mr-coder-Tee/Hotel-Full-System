import React, { useState, useEffect } from "react";
import { faClipboard, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TopNav from "../reusebles/TopNav";
import FileBase64 from "react-file-base64";
import HotelAPI from "../../ApiCalls/apiCalls";
const facilities = [
  {
    name: "pool",
    iconname: "pool",
    icontype: "font-awesome"
  },
  {
    name: "wifi",
    iconname: "wifi",
    icontype: "font-awesome"
  },
  {
    name: "gym",
    iconname: "fitness-center",
    icontype: "material"
  },
  {
    name: "food",
    iconname: "fastfood",
    icontype: "material"
  },
  {
    name: "tv",
    iconname: "tv",
    icontype: "material"
  },
  {
    name: "laundry",
    iconname: "local-laundry-service",
    icontype: "material"
  },
  {
    name: "bath tub",
    iconname: "bathtub",
    icontype: "material"
  },
  {
    name: "Aircon",
    iconname: "ac-unit",
    icontype: "material"
  },
  {
    name: "parking",
    iconname: "local-parking",
    icontype: "material"
  }
];

const AddListing = () => {
  const hotelID = localStorage.getItem("userID");

  const [loading, setLoading] = useState(false);
  const [fac, setFac] = useState(["pool"]);
  const [description, setDescription] = useState();
  const [email, setEmail] = useState();
  const [city, setCity] = useState();
  const [beds, setBeds] = useState();
  const [adults, setAdults] = useState();
  const [children, setChildren] = useState();
  const [rooms, setRooms] = useState();
  const [avaliable, setAvalible] = useState();
  const [price, setPrice] = useState();
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [facility, setFacility] = useState([]);
  const [galary, setImageGalary] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState([]);

  useEffect(() => {
    const getUserData = () => {
      HotelAPI.getUserDetails(hotelID)
        .then(({ data }) => {
          setEmail(data.data.email);
          setCity(data.data.hoteladdress?.city);
        })
        .catch((err) => console.log(err));
    };
    getUserData();
  }, []);

  const getExtension = (imageString) => {
    var parts = imageString.split(".");
    return parts[parts.length - 1];
  };

  const setMethod = (method) => {
    //check if method is not already in array
    if (paymentMethods.includes(method)) {
      console.log("Already selected");
    } else {
      if (method !== "Payment Method") {
        const temp = [...paymentMethods];
        temp.push(method);
        setPaymentMethods(temp);
      }
    }
  };
  const getImageGalary = async (collection) => {
    let temp = [...galary];
    collection.forEach((image) => {
      var extension = getExtension(image.name);
      if (extension === "jpg" || extension === "png" || extension === "jpeg") {
        // file must be less than 5 mb
        const size = image.size.split(" ");
        if (size[0] >= 5242880) {
          console.log("Image too large(Note: Image must be 5mb or less)");
        } else {
          temp.push(image.base64);
        }
      } else {
        console.log("wrong file type");
      }
    });
    setImageGalary(temp);
  };
  const addFacility = (name) => {
    if (facility.includes(name)) {
      console.log("Already selected");
    } else {
      const temp = [...facility];
      temp.push(name);
      setFacility(temp);
    }
  };
  const deleteItem = (index, from) => {
    if (from === "facility") {
      const temp = [...facility];
      temp.splice(index, 1);
      setFacility(temp);
    } else if (from === "galary") {
      const temp = [...galary];
      temp.splice(index, 1);
      setImageGalary(temp);
    } else {
      const temp = [...paymentMethods];
      temp.splice(index, 1);
      setPaymentMethods(temp);
    }
  };

  const submitListing = () => {
    const room = {
      beds,
      adults,
      children,
      rooms,
      avaliableRooms: avaliable
    };
    const avaliableDate = {
      startDate: fromDate,
      endDate: toDate
    };

    const listing = {
      hotelID,
      email,
      city,
      description,
      room,
      price,
      avaliableDate,
      facilities: facility,
      galary,
      paymentMethods
    };

    // console.log("the listing--->>", listing);
    setLoading(true)
    HotelAPI.addNewListing(listing)
      .then((result) => {
        console.log(":", result);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false)
      });
  };

  const RenderFacility = ({ name, index, from }) => (
    <div className="facility">
      <h4>{name}</h4>
      <button className="remove" onClick={() => deleteItem(index, from)}>
        <FontAwesomeIcon
          icon={faTimes}
          style={{ marginRight: 10, marginLeft: 10 }}
        />
      </button>
    </div>
  );
  const RenderImageBox = ({ img, index }) => (
    <div className="galaryImgContainer">
      <img src={img} alt="image" />
      <button
        className="remove abs"
        onClick={() => deleteItem(index, "galary")}
      >
        <FontAwesomeIcon
          icon={faTimes}
          style={{ marginRight: 10, marginLeft: 10 }}
        />
      </button>
    </div>
  );

  return (
    <div className="addListingContainer">
      <TopNav />
      <div style={{ padding: 20 }}>
        <h4>
          <FontAwesomeIcon icon={faClipboard} style={{ marginRight: 10 }} />
          /Listing/add
        </h4>
      </div>
      <div className="ListingContent">
        <div className="descriptionInputContainer">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea"
            placeholder="Description"
            rows={5}
            required
          />
        </div>
        <div className="roomDetails">
          <h4>Room Details</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: 5
            }}
          >
            <input
              className="listingInputs"
              placeholder="Bed No."
              type="number"
              value={beds}
              onChange={(e) => setBeds(e.target.value)}
              required
            />
            <input
              className="listingInputs"
              placeholder="Rooms No."
              type="number"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              required
            />
            <input
              className="listingInputs"
              placeholder="Avalible Rooms"
              type="number"
              value={avaliable}
              onChange={(e) => setAvalible(e.target.value)}
              required
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 5
            }}
          >
            <input
              className="listingInputs"
              placeholder="Adults"
              type="number"
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              required
            />
            <input
              className="listingInputs"
              placeholder="Children"
              type="number"
              value={children}
              onChange={(e) => setChildren(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="payments">
          <h4>Payments</h4>
          <div
            style={{
              marginBottom: 5,
              marginTop: 5
            }}
          >
            <input
              className="listingInputs"
              placeholder="Price (ZAR)"
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div>
            <select
              className="listingInputs"
              onChange={(e) => setMethod(e.target.value)}
            >
              <option>Payment Method</option>
              <option value={"eft"}>EFT</option>
              <option value={"creditcard"}>Credit Card</option>
            </select>
            <div className="outter payment">
              <div className="inner">
                {paymentMethods.map((name, index) => (
                  <RenderFacility
                    key={index}
                    name={name}
                    index={index}
                    from="payment"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="dates">
          <h4>Avalibile</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: 5
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <h4 style={{ marginRight: 10 }}>from</h4>
              <input
                className="listingInputs"
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                required
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <h4 style={{ marginRight: 10 }}>to</h4>
              <input
                className="listingInputs"
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        <div className="facilities">
          <h4>Facilities</h4>
          <select
            onChangeCapture={(e) => addFacility(e.target.value)}
            className="listingInputs selector"
          >
            <option>---Select a facility---</option>
            {facilities.map((opt) => (
              <option key={opt.name} value={opt.name}>
                {opt.name}
              </option>
            ))}
          </select>
          <div className="outter">
            <div className="inner">
              {facility.map((name, index) => (
                <RenderFacility
                  key={index}
                  name={name}
                  index={index}
                  from="facility"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="galary">
          <h4>Room Images</h4>
          <div className="outter">
            <div className="inner galaryInner">
              <div style={{ display: "flex", width: "100%" }}>
                {galary.map((_img, index) => (
                  <RenderImageBox key={index} img={_img} index={index} />
                ))}
              </div>

              <p>upload room images</p>
              <FileBase64
                type="file"
                multiple={true}
                onDone={(images) => getImageGalary(images)}
              />
            </div>
          </div>
        </div>

        <div className="addBtnContainer">
          {!loading ? (
            <button className="addListingBtn" onClick={() => submitListing()}>
              Add
            </button>
          ) : (
            <h3>Adding... please wait</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddListing;
