import React, { useState } from "react";
import { faClipboard, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TopNav from "../reusebles/TopNav";
import FileBase64 from "react-file-base64";

const AddListing = () => {
  const [fac, setFac] = useState(["pool"]);

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
  const addFacility = (name) => {
    console.log(name);
  };

  const RenderFacility = ({ name }) => (
    <div className="facility">
      <h4>{name}</h4>
      <button className="remove">
        <FontAwesomeIcon
          icon={faTimes}
          style={{ marginRight: 10, marginLeft: 10 }}
        />
      </button>
    </div>
  );
  const RenderImageBox = ({ img }) => (
    <div className="galaryImgContainer">
      <img src={img} alt="image" />
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
          <textarea className="textarea" placeholder="Description" rows={5} />
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
            />
            <input
              className="listingInputs"
              placeholder="Rooms No."
              type="number"
            />
            <input
              className="listingInputs"
              placeholder="Avalible Rooms"
              type="number"
            />
          </div>
        </div>
        <div className="payments">
          <h4>Payments</h4>
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
              placeholder="Price (ZAR)"
              type="text"
            />
            <select className="listingInputs">
              <option>Payment Method</option>
              <option>EFT</option>
              <option>Credit Card</option>
            </select>
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
              <input className="listingInputs" type="date" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <h4 style={{ marginRight: 10 }}>to</h4>
              <input className="listingInputs" type="date" />
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
              {fac.map((name, index) => (
                <RenderFacility key={index} name={name} />
              ))}
            </div>
          </div>
        </div>

        <div className="galary">
          <h4>Room Images</h4>
          <div className="outter">
            <div className="inner galaryInner">
              <div style={{display:'flex',width:'100%'}}>
              <RenderImageBox img={""} />
              <RenderImageBox img={""} />
              <RenderImageBox img={""} />
              </div>

              <p>upload room images</p>
              <FileBase64
                type="file"
                multiple={true}
                onDone={(images) =>
                  console.log('images:',images)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddListing;
