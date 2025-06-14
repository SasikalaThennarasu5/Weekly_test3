import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Tickets from "./components/Tickets";
import TicketDetail from "./components/TicketDetail";

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/tickets/:ticketId" element={<TicketDetail />} />
    </Routes>
  </>
);

export default App;
