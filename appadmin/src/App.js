import React, { useState } from "react";
import "./App.css";
import { SideNav, OverView, AddAdmin, LoginPage } from "./Components/index";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [login,setLogin]=useState('yes')

  const loginfunction=()=>{
    setLogin('yes')
  }

  return (
    <BrowserRouter>
      <div className="app">
        {login === "yes" ? (
          <>
            <SideNav />
            <Routes>
              <Route path="/" element={<OverView />} />
              <Route path="/addadmin" element={<AddAdmin />} />
            </Routes>
          </>
        ) : (
          <>
            <Routes>
              <Route path="/" element={<LoginPage login={loginfunction}/>} />
            </Routes>
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;

//https://reactrouter.com/docs/en/v6/upgrading/v5
