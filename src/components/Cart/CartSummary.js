import React from 'react';
import './CartSummary.css';

const CartSummary = ({ items }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-summary">
      <h3>Total: R$ {total.toFixed(2)}</h3>
      <button className="checkout-button">Finalizar Pedido</button>
    </div>
  );
};

export default CartSummary;
