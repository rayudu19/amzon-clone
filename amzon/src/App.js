import React, { useState } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="App">
      <Header cartItems={cartItems} />
      <ProductList addToCart={addToCart} />
      <Cart cartItems={cartItems} />
      <Footer />
    </div>
  );
}

export default App;
