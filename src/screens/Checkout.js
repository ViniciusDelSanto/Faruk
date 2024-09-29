import React, { useState } from 'react';
import PaymentOptions from '../components/Checkout/PaymentOptions';
import './Checkout.css';

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    paymentMethod: '',
    observations: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Nome completo é obrigatório';
    if (!formData.address) newErrors.address = 'Endereço é obrigatório';
    if (!formData.paymentMethod) newErrors.paymentMethod = 'Selecione uma forma de pagamento';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Enviar os dados do pedido
      console.log('Pedido confirmado:', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="checkout">
      <h2>Finalizar Pedido</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Nome Completo</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="address">Endereço</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="city">Cidade</label>
          <select id="city" name="city" value={formData.city} onChange={handleChange}>
            <option value="">Selecione a cidade</option>
            <option value="Cidade A">Cidade A</option>
            <option value="Cidade B">Cidade B</option>
            <option value="Cidade C">Cidade C</option>
          </select>
        </div>

        <PaymentOptions
          selectedMethod={formData.paymentMethod}
          handleChange={handleChange}
        />
        {errors.paymentMethod && <span className="error">{errors.paymentMethod}</span>}

        <div className="form-group">
          <label htmlFor="observations">Observações</label>
          <textarea
            id="observations"
            name="observations"
            value={formData.observations}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="confirm-button">Confirmar Pedido</button>
      </form>
    </div>
  );
};

export default Checkout;
