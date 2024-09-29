import React from 'react';
import './CartItem.css';

const CartItem = ({ item, updateQuantity, removeItem }) => {
  const increment = () => updateQuantity(item.id, item.quantity + 1);
  const decrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeItem(item.id);
    }
  };

  return (
    <div className="cart-item">
      <span className="item-name">{item.name}</span>
      <div className="item-controls">
        <button onClick={decrement}>-</button>
        <span>{item.quantity}</span>
        <button onClick={increment}>+</button>
      </div>
      <span className="item-price">R$ {(item.price * item.quantity).toFixed(2)}</span>
    </div>
  );
};

export default CartItem;
