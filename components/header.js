import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>CARTRIDGE KINGS</h1>
      </div>
      <div className="nav">
        <a href="#">Home</a>
        <a href="#">Ink Cartridges</a>
        <a href="#">Toner Cartridges</a>
        <a href="#">Contact Us</a>
        <a href="#">Login / Register</a>
        <div className="cart">
          <span>Cart (1)</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
