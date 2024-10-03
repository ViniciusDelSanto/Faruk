import React, { useState } from 'react';
import CartItem from '../../components/Cart/CartItem';
import CartSummary from '../../components/Cart/CartSummary';
import './Cart.css';

const cartItems = [
  { id: 1, name: 'Falafel', quantity: 2, price: 15.00 },
  { id: 2, name: 'Kebab', quantity: 1, price: 22.00 },
];

const Cart = () => {
  const [items, setItems] = useState(cartItems);

  const updateQuantity = (id, quantity) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="cart">
      <h2>Seu Carrinho</h2>
      <div className="cart-items">
        {items.map(item => (
          <CartItem 
            key={item.id}
            item={item}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
          />
        ))}
      </div>
      <CartSummary items={items} />
    </div>
  );
};

export default Cart;
