// src/components/Dashboard.js
// import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Quick Links</h2>
        <ul>
          <li><Link to="/containers">Manage Containers</Link></li>
          <li><Link to="/categories">Manage Categories</Link></li>
          <li><Link to="/activities">View Activities</Link></li>
        </ul>
      </div>
      {/* You can add charts, stats, and more here */}
    </div>
  );
};

export default Dashboard;
