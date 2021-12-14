import React, { useState, useEffect } from "react";
import TopNav from "../reusebles/TopNav";
import { faBook, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomTextInput from "../reusebles/CustomTextInput";
import HotelAPI from "../../ApiCalls/apiCalls";

import FileBase64 from "react-file-base64";

const Profile = () => {
  const userToken = localStorage.getItem("userToken");
  const [data, setData] = useState({});
  const [email, setEmail] = useState();
  const [hotelName, setHotelName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [postalCode, setPostalCode] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [avatar, setAvatar] = useState();
  const [fileError, setFileError] = useState("");
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [selected, setSelected] = useState();

  useEffect(() => {
    const getUserData = () => {
      HotelAPI.getUserDetails(userToken)
        .then(({ data }) => {
          setData(data.data.isExist);
        })
        .catch((err) => console.log(err));
    };
    getUserData();
  }, []);

  useEffect(() => {
    setAvatar(data?.hotelAvatar);
    setEmail(data?.email);
    setHotelName(data?.hotelname);
    setPhoneNumber(data?.phonenumber);
    setAddress(data?.hoteladdress?.address);
    setCity(data?.hoteladdress?.city);
    setPostalCode(data?.hoteladdress?.postalCode);
    setPassword(data?.password)
    //setLatitude(data?.location[0]?.latitude);
    // setLongitude(data?.location[0]?.longitude);
  }, [data]);

  const update = () => {
    const currentlocation = {
      longitude: longitude,
      latitude: latitude
    };
    const fulladdress = {
      address: address,
      city: city,
      postalCode: postalCode,
      country: "RSA"
    };
    const updatedData = {
      'email': email,
      'hotelname': hotelName,
      'password': password,
      'hoteladdress': fulladdress,
      'location': currentlocation,
      'hotelAvatar': avatar
    };
    setData( updatedData);
    // console.log('updatedData',updatedData)
    // console.log('data',data)
    HotelAPI.updateUserInfo(updatedData, data._id)
      .then((res) => console.log("res--->",res))
      .catch((error) => console.error);
  };

  console.log("data", data);

  const getExtension = (imageString) => {
    var parts = imageString.split(".");
    return parts[parts.length - 1];
  };
  const varifyImage = (imagename, image, size) => {
    var extension = getExtension(imagename);
    if (extension === "jpg" || extension === "png" || extension === "jpeg") {
      if (false) {
        // file must be less than 5 mb
        setFileError("Image too large(Note: Image must be 5mb or less)");
      } else {
        setAvatar(image);
        setFileError("");
      }
    } else {
      setFileError("this is not an image file");
    }
  };

  const RenderLocationSelected = () => {
    if (selected === "gps") {
      return <div>map here</div>;
    } else if (selected === "coordinates") {
      return (
        <div className="divider">
          <CustomTextInput
            placeholder="Longitude"
            edit={true}
            value={longitude}
            type="text"
            onChange={(text) => setLongitude(text)}
          />
          <CustomTextInput
            placeholder="Latitude"
            edit={true}
            value={latitude}
            type="text"
            onChange={(text) => setLatitude(text)}
          />
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="profileContainer">
      <TopNav />
      <div style={{ padding: 20 }}>
        <h4>
          <FontAwesomeIcon icon={faUser} style={{ marginRight: 10 }} />
          /Profile
        </h4>
      </div>
      <div className="profilemainContainer">
        {/* profile picture  */}
        {fileError && (
          <p style={{ textAlign: "center", color: "red" }}>{fileError}</p>
        )}
        <div className="hotelProfileOuterContainer">
          <div className="hotelProfileInnerContainer">
            {avatar ? (
              <div className="imgCont">
                <img src={avatar} />
              </div>
            ) : (
              <div style={{ marginBottom: 10 }}>Upload hotel picture</div>
            )}
            <FileBase64
              type="file"
              multiple={false}
              onDone={({ name, base64, size }) =>
                varifyImage(name, base64, size)
              }
            />
          </div>
        </div>
        <div className="fields">
          {/* email and hotel name  */}
          <div className="divider">
            <CustomTextInput
              placeholder="Email"
              edit={true}
              value={email}
              type="email"
              onChange={(text) => setEmail(text)}
            />
            <CustomTextInput
              placeholder="Hotel Name"
              edit={true}
              value={hotelName}
              type="text"
              onChange={(text) => setHotelName(text)}
            />
          </div>
          {/* phone number and address*/}
          <div className="divider">
            <CustomTextInput
              placeholder="Phone Number"
              edit={true}
              value={phoneNumber}
              type="text"
              onChange={(text) => setPhoneNumber(text)}
            />
            <CustomTextInput
              placeholder="Address Line 1"
              edit={true}
              value={address}
              type="text"
              onChange={(text) => setAddress(text)}
            />
          </div>
          {/* hoteladdress */}
          <div className="divider">
            <CustomTextInput
              placeholder="city"
              edit={true}
              value={city}
              type="text"
              onChange={(text) => setCity(text)}
            />
            <CustomTextInput
              placeholder="postalCode"
              edit={true}
              value={postalCode}
              type="text"
              onChange={(text) => setPostalCode(text)}
            />
          </div>
          {/* location */}

          <div className="coordinatesContainer">
            <select
              className="dropdown"
              onChange={(e) => setSelected(e.target.value)}
            >
              <option>---Pick how to get your location---</option>
              <option value="gps">GPS current location</option>
              <option value="coordinates">Type coordinates</option>
            </select>
            <RenderLocationSelected />
          </div>

          {/* password */}
          <div className="">
            <CustomTextInput
              placeholder="Password"
              edit={true}
              value={password}
              type="password"
              onChange={(text) => setPassword(text)}
            />
            <CustomTextInput
              placeholder="Confirm Password"
              edit={true}
              value={confirmPassword}
              type="password"
              onChange={(text) => setConfirmPassword(text)}
            />
          </div>
        </div>
        <div className="btnContainer">
          <button onClick={() => update()}>update</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
