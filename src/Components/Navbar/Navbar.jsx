// // src/components/Navbar.js
// // import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/containers">Containers</Link></li>
//         <li><Link to="/categories">Categories</Link></li>
//         <li><Link to="/activities">Activities</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;



// src/components/Navbar.js
// import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Container Management</Link>
      <div className="navbar-links">
        <Link to="/containers">Containers</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/activities">Activities</Link>
      </div>
    </nav>
  );
};

export default Navbar;
