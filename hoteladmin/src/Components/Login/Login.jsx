import React, { useEffect, useState } from "react";
import image from "../../Image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faAt,
  faLock,
  faLongArrowAltRight
} from "@fortawesome/free-solid-svg-icons";
import HotelAPI from "../../ApiCalls/apiCalls";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate=useNavigate();
  const [type, setType] = useState("password");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const EyeChanger = () =>
    type === "password" ? (
      <FontAwesomeIcon icon={faEye} />
    ) : (
      <FontAwesomeIcon icon={faEyeSlash} />
    );

  const passwordVisibility = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  // HotelAPI.login()

  
  const loginprocess = () => {
    HotelAPI.login({ email, password })
    .then(({ data }) => {
      // localStorage.removeItem("userToken");
      localStorage.setItem("userToken", data.token);
      navigate('/booking')
      
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="logInContainer">
      <div className="imageContainer">
        <img
          src="https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
          alt="background image"
          className="image"
        />
        <img src={image} className="logo" />
      </div>
      <div className="loginForm">
        <div className="form">
          <h2
            style={{
              textAlign: "center",
              marginBottom: 20,
              marginTop: 10,
              fontFamily: "monospace",
              fontSize: 34
            }}
          >
            Sign In
          </h2>
          <div className="inputContainer">
            <FontAwesomeIcon icon={faAt} />
            <input
              placeholder="Email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputContainer">
            <FontAwesomeIcon icon={faLock} />
            <input
              placeholder="Password"
              className="input"
              type={type}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="passwordBtn"
              onClick={() => passwordVisibility()}
            >
              <EyeChanger />
            </button>
          </div>
          <div
            style={{ display: "flex", justifyContent: "right", marginTop: 20 }}
          >
            <button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                borderRadius: 10,
                border: "none",
                backgroundColor: "#0BB5FF",
                color: "white"
              }}
              onClick={() => loginprocess()}
            >
              Sign in
              <FontAwesomeIcon
                icon={faLongArrowAltRight}
                style={{ marginLeft: 10 }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
