import React, { useEffect, useState } from "react";
import "./App.css";
import { LoginPage, SideNav, Profile } from "./Components/index";
import {
  Booking,
  Guests,
  Listing,
  Reviews,
  Notifications,
  Clients,
  Contacts,
  AddListing
} from "./Components/Screens/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    const varifyUser = async () => {
      const storage = await localStorage.getItem("userID");
      setUser(storage);
    };
    varifyUser();
  }, []);

  return (
    <BrowserRouter>
      <div className="appContainer">
        {user ? (
          <>
            <SideNav />
            <Routes>
              <Route path="/booking" element={<Booking />} />
              <Route path="/Guests" element={<Guests />} />
              <Route path="/Reviews" element={<Reviews />} />
              <Route path="/Notifications" element={<Notifications />} />
              <Route path="/Clients" element={<Clients />} />
              <Route path="/Contacts" element={<Contacts />} />
              <Route path="/Listing" element={<Listing />} />
              <Route path="/Listing/add" element={<AddListing />} />
              <Route path="/Profile" element={<Profile />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/" exact element={<LoginPage />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
