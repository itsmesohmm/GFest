// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Use Link for internal navigation
import './Navbar.css';
import AuthModal from './AuthModal'; // Import your AuthModal

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">Gfest</div>

        <div className="nav-links">
          <Link to="/">HOME</Link>
          <Link to="/events">EVENTS</Link>
          <Link to="/services">SERVICES</Link>
          <Link to="/shop">SHOP</Link>
          <Link to="/forum">FORUM</Link>
          <Link to="/contact">CONTACT</Link>
        </div>

        <div className="login-button">
          <button className="navbar-button" onClick={handleOpenModal}>Login / Sign Up</button>
        </div>
      </nav>

      <AuthModal isOpen={isModalOpen} onClose={handleCloseModal} /> {/* Render the modal */}
    </>
  );
};

export default Navbar;
