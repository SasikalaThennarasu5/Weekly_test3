import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Properties from './Components/Properties';
import PropertyDetails from './Components/PropertyDetails';
import Navbar from './Components/Navbar';
import { AuthProvider } from './context/AuthContext';

const App = () => (
  <AuthProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:id" element={<PropertyDetails />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
