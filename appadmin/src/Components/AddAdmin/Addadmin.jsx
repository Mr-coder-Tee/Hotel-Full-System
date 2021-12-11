import React, { useState, useEffect } from "react";
import HotelsCard from "../Card/HotelsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faEye,
  faEyeSlash,
  faAt,
  faLock,
  faAngleLeft,
  faAngleRight,
  faHotel
} from "@fortawesome/free-solid-svg-icons";
import Backend from "../../Api/apiCalls";

const hotels = [
  { id: 1, name: "hotel 1" },
  { id: 2, name: "hotel 2" },
  { id: 3, name: "hotel 3" },
  { id: 4, name: "hotel 4" },
  { id: 5, name: "hotel 5" },
  { id: 6, name: "hotel 6" },
  { id: 7, name: "hotel 7" },
  { id: 8, name: "hotel 8" },
  { id: 9, name: "hotel 9" },
  { id: 10, name: "hotel 10" },
  { id: 11, name: "hotel 11" }
];

const AddAdmin = () => {
  const [hotelsData, setHotelsData] = useState([]);
  const [type, setType] = useState("password");
  const [hotelSlice, setHotelSlice] = useState([]);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(5);
  const [prevBtn, setPrevBtn] = useState(true);
  const [nextBtn, setNextBtn] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [hotelname, setHotelname] = useState();
  const [disablebtn, setDisablebtn] = useState(false);

  const getFromDB = () => {
    Backend.getHotel()
      .then((res) => {
        setHotelsData(res.data.data);
      })
      .catch((err) => {
        console.log("some error occured");
      });
    
  };

  useEffect(() => {
    getFromDB()
  }, [hotelsData]);

  const submit = (e) => {
    e.preventDefault();
    setDisablebtn(true);
    if (!email || !password || !hotelname) {
      setErrorMessage("Enter all relevent details");
      setError(true);
      setDisablebtn(false);
    } else {
      setError(false);
      const data = { email: email, password: password, hotelname: hotelname };
      Backend.createHotelUser(data)
        .then((res) => {
          const results = res.data;
          if (results.status === "Error") {
            setErrorMessage(results.message);
            setError(true);
            setDisablebtn(false);
            setEmail("");
            setPassword("");
            setHotelname("");
          }
        })
        .catch((error) => {
          console.log("some error occured");
        });

      setEmail("");
      setPassword("");
      setHotelname("");
      setDisablebtn(false);
    }
  };

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

  const getSlice = () => {
    const data = [];
    if (hotels.length > 5) {
      hotels.slice(from, to).map((item) => {
        data.push(item);
      });
      setHotelSlice(data);
    } else {
      setHotelSlice();
    }
  };

  const next = () => {
    const size = hotels.length - to - 1;
    if (from > 5) {
      setTo(to + 5);
    } else {
      setTo(to + size);
    }
    setFrom(to);
    setPrevBtn(false);
    getSlice();
  };
  const prev = () => {
    const dis = to - from;
    setTo(from);
    if (dis === 0) {
      setFrom(from - 5);
      console.log("from-to->", from, to, dis);
    } else {
      console.log("from -to", from, to, dis);
    }
  };
  const setValues = () => {
    setFrom(0);
    if (hotels.length > 5) {
      setTo(5);
    } else {
      setTo(hotels.length - 1);
    }
  };

  useEffect(() => {
    setValues();
    getSlice();
  }, []);

  return (
    <div className={`taps addAdminContainer`}>
      <div className="searchBar">
        <div className="searchInputContainer">
          <FontAwesomeIcon icon={faSearch} className="icon" />
          <input placeholder="search" className={`inputs`} />
        </div>
      </div>

      <div className={"mainContainer"}>
        <div className="hotelList">
          {hotelsData.map((hotel, index) => (
            <HotelsCard hotel={hotel} index={index + 1} />
          ))} 
        </div>
        <div className="addForm">
          {error && (
            <h4 style={{ marginBottom: 10, color: "red" }}>{errorMessage}</h4>
          )}

          <div className="inputHolder">
            <div className="textInputContainer">
              <div className="inputIcons">
                <FontAwesomeIcon icon={faHotel} />
                <input
                  value={hotelname}
                  onChange={(e) => {
                    setHotelname(e.target.value);
                  }}
                  placeholder="Hotel Name"
                  className="inputs"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="inputHolder">
            <div className="textInputContainer">
              <div className="inputIcons">
                <FontAwesomeIcon icon={faAt} />
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Email"
                  className="inputs"
                  type="email"
                />
              </div>
            </div>
          </div>
          <div className="inputHolder">
            <div className="textInputContainer">
              <div className="inputIcons">
                <FontAwesomeIcon icon={faLock} />
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                  className="inputs"
                  type={type}
                />
                <button
                  type="button"
                  onClick={() => passwordVisibility()}
                  className="passwordbtn"
                >
                  <EyeChanger />
                </button>
              </div>
            </div>
          </div>
          <button
            disabled={disablebtn}
            onClick={(e) => submit(e)}
            className={`addBtn ${disablebtn && " gray"}`}
          >
            Add Hotel Admin
          </button>
        </div>
      </div>

      <div className="hotelNavigation">
        <button
          className={`navBtn  ${prevBtn ? "prevDis" : "prev"}`}
          onClick={() => prev()}
          disabled={prevBtn}
        >
          <FontAwesomeIcon icon={faAngleLeft} style={{ marginRight: 5 }} />
          Prev
        </button>
        <button
          className={`navBtn  ${nextBtn ? "nextDis" : "next"}`}
          onClick={() => next()}
        >
          Next
          <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: 5 }} />
        </button>
      </div>
    </div>
  );
};

export default AddAdmin;
