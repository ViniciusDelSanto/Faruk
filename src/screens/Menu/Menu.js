import React, { useState, useEffect } from 'react';
import MenuItem from '../../components/Menu/MenuItem';
import MenuForm from '../../components/Menu/MenuForm';
import './Menu.css';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Falafel', description: 'Bolinho frito de grão de bico temperado', price: 15.00 },
    { id: 2, name: 'Kebab', description: 'Carne grelhada no espeto, servida no pão pita', price: 22.00 },
    { id: 3, name: 'Esfiha', description: 'Massa recheada com carne e especiarias', price: 8.50 },
  ]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const adminStatus = localStorage.getItem('is_admin') === 'true';
    setIsAdmin(adminStatus);
  }, []);

  const handleAddItem = (newItem) => {
    setMenuItems([...menuItems, { ...newItem, id: menuItems.length + 1 }]);
  };

  const handleDeleteItem = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  return (
    <div className="menu">
      <h1>Gerenciamento do Cardápio</h1>
      {isAdmin ? (
        <MenuForm onAddItem={handleAddItem} />
      ) : (
        <p>Você não tem permissão para editar o cardápio.</p>
      )}
      <div className="menu-list">
        {menuItems.map(item => (
          <MenuItem 
            key={item.id} 
            item={item} 
            onDeleteItem={isAdmin ? () => handleDeleteItem(item.id) : undefined} 
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
