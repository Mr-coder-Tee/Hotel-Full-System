import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "../reusebles/TopNav";
import { faBook, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomTextInput from "../reusebles/CustomTextInput";
import HotelAPI from "../../ApiCalls/apiCalls";
import Loading from "../Loading and Error/Loading";
import FileBase64 from "react-file-base64";

const Profile = () => {
  const navigate=useNavigate();
  const id = localStorage.getItem("userID");
  const [data, setData] = useState();
  const [email, setEmail] = useState();
  const [hotelName, setHotelName] = useState();
  const [currentPwd, setCurrentPwd] = useState();
  const [newPassword, setNewPassword] = useState();
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
      HotelAPI.getUserDetails(id)
        .then(({ data }) => {
          setData(data.data);
        })
        .catch((err) => console.log(err));
    };
    getUserData();
  }, []);

 

  const update = () => {
    const currentlocation = {
      longitude: longitude||data?.location?.longitude||"",
      latitude: latitude||data?.location?.latitude||""
    };
    const fulladdress = {
      address: address||data?.hoteladdress?.address,
      city: city||data?.hoteladdress?.city,
      postalCode: postalCode||data?.hoteladdress?.postalCode,
      country: "RSA"
    };
    const updatedData = {
      email: email,
      hotelname: hotelName,
      password: newPassword,
      hoteladdress: fulladdress,
      location: currentlocation,
      hotelAvatar: avatar,
      phonenumber: phoneNumber
    };
    setData(updatedData);
    //updaing password,make sure that update of name is unique
    
    HotelAPI.updateUserInfo(updatedData, data._id)
    .then((res) => {
      console.log("update successful", res);
      navigate('/profile')
    })
    .catch((error) => console.error);
    
  };

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
            placeholder={data?.location?.longitude||"Longitude"}
            edit={true}
            value={longitude}
            type="text"
            onChange={(text) => setLongitude(text)}
          />
          <CustomTextInput
            placeholder={data?.location?.latitude||"Latitude"}
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

console.log('data',data)

  if(!data){
    return <Loading/>
  }

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
            ) :  data?.hotelAvatar?(<div style={{ marginBottom: 10 }}>Upload new hotel picture</div>):(
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
              placeholder={`${data?.email|| 'Email'}`}
              edit={true}
              value={email}
              type="email"
              onChange={(text) => setEmail(text)}
            />
            <CustomTextInput
              placeholder={data?.hotelname||"Hotel Name"}
              edit={true}
              value={hotelName}
              type="text"
              onChange={(text) => setHotelName(text)}
            />
          </div>
          {/* phone number and address*/}
          <div className="divider">
            <CustomTextInput
              placeholder={data?.phonenumber||"Phone Number"}
              edit={true}
              value={phoneNumber}
              type="text"
              onChange={(text) => setPhoneNumber(text)}
            />
            <CustomTextInput
              placeholder={data?.hoteladdress?.address||"Address Line 1"}
              edit={true}
              value={address}
              type="text"
              onChange={(text) => setAddress(text)}
            />
          </div>
          {/* hoteladdress */}
          <div className="divider">
            <CustomTextInput
              placeholder={data?.hoteladdress?.city||"city"}
              edit={true}
              value={city}
              type="text"
              onChange={(text) => setCity(text)}
            />
            <CustomTextInput
              placeholder={data?.hoteladdress?.postalCode||"postalCode"}
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
          <div style={{ marginTop: 10 }}>
            <h3 style={{ marginLeft: 50 }}>Change password</h3>
            <div className="divider">
              <CustomTextInput
                placeholder="Current Password"
                edit={true}
                value={currentPwd}
                type="password"
                onChange={(text) => setCurrentPwd(text)}
              />
              <CustomTextInput
                placeholder="New Password"
                edit={true}
                value={newPassword}
                type="password"
                onChange={(text) => setNewPassword(text)}
              />
            </div>
          </div>
        </div>
        <div className="btnContainer">
          <button className="updateBtn" onClick={() => update()}>
            update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
