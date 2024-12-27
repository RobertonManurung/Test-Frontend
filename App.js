import React from 'react';
import './App.css';
import Header from './components/header';
import SearchBar from './components/SearchBar';
import Product from './components/Product';

// Gambar produk
import hpCartridge from './assets/hp62.jpg';
import canonToner from './assets/canon.jpg';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <div className="featured-products">
        <h2>FEATURED PRODUCTS</h2>
        <div className="products">
          <Product image={hpCartridge} title="HP 62 Black Ink Cartridge" price="9.49" />
          <Product image={canonToner} title="Canon MF-3110 Toner" price="36.45" />
          <Product image={hpCartridge} title="HP 62 Black Ink Cartridge" price="5.99" />
        </div>
      </div>
    </div>
  );
}

export default App;
