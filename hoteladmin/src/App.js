import "./App.css";
import { LoginPage, SideNav } from "./Components/index";
import {
  Booking,
  Guests,
  Listing,
  Reviews,
  Notifications,
  Clients,
  Contacts,
} from "./Components/Screens/index";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="appContainer">
        <SideNav />
        <Routes>
          <Route path="/" element={<Booking />} />
          <Route path="/Guests" element={<Guests />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Notifications" element={<Notifications />} />
          <Route path="/Clients" element={<Clients />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Listing" element={<Listing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
