import React from 'react';

function Cart({ cartItems }) {
  const total = cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0).toFixed(2);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${total}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
