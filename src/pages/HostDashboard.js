// src/pages/HostDashboard.js
import React from 'react';
import './Dashboard.css'; // Import common dashboard CSS

const HostDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Host Dashboard</h1>
      <h2>Manage Events</h2>
      <button>Create New Event</button>
      <ul className="event-list">
        <li>Event 1 <button>Edit</button> <button>Delete</button></li>
        <li>Event 2 <button>Edit</button> <button>Delete</button></li>
      </ul>
    </div>
  );
};

export default HostDashboard;
