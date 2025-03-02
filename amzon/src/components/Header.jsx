import React from 'react';
import CartIcon from './CartIcon';

function Header({ cartItems }) {
  return (
    <header className="header">
      <div className="logo">Amazon Clone</div>
      <input type="text" className="search-bar" placeholder="Search products..." />
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#deals">Deals</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <CartIcon cartItems={cartItems} />
    </header>
  );
}

export default Header;
