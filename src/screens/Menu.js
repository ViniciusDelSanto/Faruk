import React, { useState } from 'react';
import MenuItem from '../components/Menu/MenuItem';
import MenuForm from '../components/Menu/MenuForm';
import './Menu.css';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Falafel', description: 'Bolinho frito de grão de bico temperado', price: 15.00 },
    { id: 2, name: 'Kebab', description: 'Carne grelhada no espeto, servida no pão pita', price: 22.00 },
    { id: 3, name: 'Esfiha', description: 'Massa recheada com carne e especiarias', price: 8.50 },
  ]);

  const handleAddItem = (newItem) => {
    setMenuItems([...menuItems, { ...newItem, id: menuItems.length + 1 }]);
  };

  const handleDeleteItem = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  return (
    <div className="menu">
      <h1>Gerenciamento do Cardápio</h1>
      <MenuForm onAddItem={handleAddItem} />
      <div className="menu-list">
        {menuItems.map(item => (
          <MenuItem 
            key={item.id} 
            item={item} 
            onDeleteItem={() => handleDeleteItem(item.id)} 
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
