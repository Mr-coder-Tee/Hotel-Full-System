import React, { useState, useEffect } from "react";
import TopNav from "../reusebles/TopNav";
import { faBook, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomTextInput from "../reusebles/CustomTextInput";

import FileBase64 from 'react-file-base64';

const Profile = () => {
  const [placeholder, setPlaceholder] = useState();

  const [email,setEmail]=useState()
  const [hotelName,setHotelName]=useState()
  const [password,setPassword]=useState()
  const [confirmPassword,setConfirmPassword]=useState()
  const [address,setAddress]=useState()
  const [city,setCity]=useState()
  const [postalCode,setPostalCode]=useState()
  const [phoneNumber,setPhoneNumber]=useState()
  const [avatar,setAvatar]=useState()


  const img =
    "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

  useEffect(() => {
    setPlaceholder(img);
  }, []);



  const getPicture=(_data)=>{
        const type=_data.type
        if(type==='image'){
        }
        console.log('avata',_data)
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
        <div className="hotelProfileOuterContainer">
          <div className="hotelProfileInnerContainer">
            {placeholder ? (
              <div className="imgCont">
                <img src={placeholder} />
              </div>
            ) : (
              <div style={{ marginBottom: 10 }}>Upload hotel picture</div>
            )}
            {/* <input
              type="file"
              className="fileSelector"
              accept=".jpg, .jpeg, .png"
              onChange={(img)=>setAvatar(img)}
            /> */}
            <FileBase64 type="file" multiple={ false } onDone={(base64)=>getPicture(base64)} />
          </div>
        </div>
        <div className="fields">
          {/* email and hotel name  */}
          <div className="divider">
            <CustomTextInput placeholder="Email" edit={true} value={email} type="email" onChange={(text)=>setEmail(text)}/>
            <CustomTextInput placeholder="Hotel Name" edit={true} value={hotelName} type="text" onChange={(text)=>setHotelName(text)}/>
          </div>
          {/* phone number and address*/}
          <div className="divider">
          <CustomTextInput placeholder="Phone Number" edit={true} value={phoneNumber} type="text"  onChange={(text)=>setPhoneNumber(text)}/>
            <CustomTextInput placeholder="Address Line 1" edit={true} value={address} type="text" onChange={(text)=>setAddress(text)}/>
          </div>
          {/* hoteladdress */}
          <div className="divider">
          <CustomTextInput placeholder="city" edit={true} value={city} type="text" onChange={(text)=>setCity(text)}/>
            <CustomTextInput placeholder="postalCode" edit={true} value={postalCode} type="text" onChange={(text)=>setPostalCode(text)}/>
          </div>
          {/* password */}
          <div className="">
          <CustomTextInput placeholder="Password" edit={true} value={password} type="password" onChange={(text)=>setPassword(text)}/>
          <CustomTextInput placeholder="Confirm Password" edit={true} value={confirmPassword} type="password" onChange={(text)=>setConfirmPassword(text)}/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
