import React from 'react';
import './FeaturedMenu.css';

const featuredItems = [
  { id: 1, name: 'Falafel', price: 12.00 },
  { id: 2, name: 'Kebab', price: 20.00 },
  { id: 3, name: 'Esfiha', price: 8.50 },
];

const FeaturedMenu = () => {
  return (
    <div className="featured-menu">
      <h2>Destaques do Cardápio</h2>
      <div className="menu-items">
        {featuredItems.map(item => (
          <div key={item.id} className="menu-item">
            <h3>{item.name}</h3>
            <p>R$ {item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedMenu;
