import React, { useState } from 'react';
import './MenuForm.css';

const MenuForm = ({ onAddItem }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && price) {
      onAddItem({ name, description, price: parseFloat(price) });
      setName('');
      setDescription('');
      setPrice('');
    }
  };

  return (
    <form className="menu-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nome do Item</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Descrição</label>
        <textarea 
          id="description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="price">Preço (R$)</label>
        <input 
          type="number" 
          id="price" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          required 
          step="0.01" 
        />
      </div>
      <button className='menu-button' type="submit">Adicionar Item</button>
    </form>
  );
};

export default MenuForm;
