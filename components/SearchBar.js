import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search-container">
      <h2>FIND THE RIGHT CARTRIDGES FOR YOUR PRINTER</h2>
      <div className="search-bar">
        <select>
          <option>1. Printer Brand</option>
          <option>HP</option>
          <option>Canon</option>
        </select>
        <select>
          <option>2. Printer Series</option>
          <option>HP 62</option>
          <option>Canon MF-3110</option>
        </select>
        <select>
          <option>3. Printer Model</option>
          <option>Model 1</option>
          <option>Model 2</option>
        </select>
        <button>FIND CARTRIDGES</button>
      </div>
    </div>
  );
}

export default SearchBar;
