// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Forum from './pages/Forum'; 
import Home from './pages/Home'; 
import Shop from './pages/Shop'; 
import Services from './pages/Services'; 
import Contact from './pages/Contact';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal'; // Import the AuthModal
import Events from './pages/Events';
import AdminDashboard from './pages/AdminDashboard';
import HostDashboard from './pages/HostDashboard';
import ArtisanDashboard from './pages/ArtisanDashboard';
import SellerDashboard from './pages/SellerDashboard';
import CulturalFestivals from './pages/CulturalFestivals'; 

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false); // State for modal visibility
  const [bookings, setBookings] = useState([]); // State for storing bookings

  const openModal = () => setModalIsOpen(true); // Function to open modal
  const closeModal = () => setModalIsOpen(false); // Function to close modal

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar openModal={openModal} /> {/* Pass openModal to Navbar if you want a button there */}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/shop" element={<Shop />} />
            <Route 
              path="/services" 
              element={<Services setBookings={setBookings} />} 
            /> {/* Pass setBookings to Services */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/adminDash" element={<AdminDashboard />} />
            <Route path="/sellerDash" element={<SellerDashboard />} />
            <Route 
              path="/artisanDash" 
              element={<ArtisanDashboard bookings={bookings} />} 
            /> {/* Pass bookings to ArtisanDashboard */}
            <Route path="/hostDash" element={<HostDashboard />} />
            <Route path="/cultural-festivals" element={<CulturalFestivals />} />
          </Routes>
        </div>
        <Footer />
        <AuthModal isOpen={modalIsOpen} onRequestClose={closeModal} /> {/* Include the AuthModal */}
      </div>
    </Router>
  );
};

export default App;
