// src/components/AuthModal.js
import React, { useState } from 'react';
import './AuthModal.css'; // Ensure you have the styles imported

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

  if (!isOpen) return null; // Don't render if modal is not open

  const handleToggle = () => {
    setIsLogin(!isLogin); // Toggle between login and signup
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        
        <form>
          <label>
            Email:
            <input type="email" required />
          </label>
          <label>
            Password:
            <input type="password" required />
          </label>
          {!isLogin && ( // Show this field only on signup
            <label>
              Confirm Password:
              <input type="password" required />
            </label>
          )}
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>

        <button className="toggle-button" onClick={handleToggle}>
          {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
        </button>
        <button onClick={onClose} className="close-button">Close</button>
      </div>
    </div>
  );
};

export default AuthModal;
