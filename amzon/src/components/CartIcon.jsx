import React from 'react';

function CartIcon({ cartItems }) {
  return (
    <div className="cart-icon">
      <span className="cart-count">{cartItems.length}</span>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Amazon_Shopping_Bag_icon.svg" alt="Cart" />
    </div>
  );
}

export default CartIcon;
