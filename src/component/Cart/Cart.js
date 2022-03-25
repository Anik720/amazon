import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div>
      <h1>Order summery</h1>
      <h1>Total Proucts: {cart.length}</h1>
    </div>
  );
};

export default Cart;
