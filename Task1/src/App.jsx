import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Events from "./components/Events";
import EventDetails from "./components/EventDetails";
import Booking from "./components/Booking";
import withLoginProtection from "./hoc/withLoginProtection";
import { AuthProvider } from "./context/AuthContext";

const ProtectedBooking = withLoginProtection(Booking);

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:eventId" element={<EventDetails />} />
        <Route path="/booking/:eventId" element={<ProtectedBooking />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

export default App;
