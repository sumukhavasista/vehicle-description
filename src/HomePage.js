import React, { useState } from 'react';
import './HomePage.css';
import 'boxicons/css/boxicons.min.css';

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="home-page">
      <header>
        <h1>Vehicle-desc</h1>
        <div className={`user-icon ${menuOpen ? 'menu-open' : ''}`} onClick={toggleMenu}>
          <i className='bx bxs-user'></i>
        </div>
      </header>

      <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#">Know your personal details</a></li>
          <li><a href="#">Know your vehicle details</a></li>
          <li><a href="#">Logout</a></li>
          <li><a href="#">Register</a></li>
        </ul>
      </div>

      <div className="content">
        <p>This is the homepage of the website after logging in.</p>
      </div>

      <footer>
        <p>&copy; 2024 Vehicle-desc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
