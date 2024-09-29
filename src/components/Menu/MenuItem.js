import React from 'react';
import './MenuItem.css';

const MenuItem = ({ item, onDeleteItem }) => {
  return (
    <div className="menu-item">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p className="menu-price">R$ {item.price.toFixed(2)}</p>
      <button className="delete-button" onClick={onDeleteItem}>Remover</button>
    </div>
  );
};

export default MenuItem;
