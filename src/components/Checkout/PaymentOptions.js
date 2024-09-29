import React from 'react';
import './PaymentOptions.css';

const PaymentOptions = ({ selectedMethod, handleChange }) => {
  return (
    <div className="form-group">
      <label>Forma de Pagamento</label>
      <div className="payment-options">
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="cartao"
            checked={selectedMethod === 'cartao'}
            onChange={handleChange}
          />
          Cartão de Crédito
        </label>

        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="dinheiro"
            checked={selectedMethod === 'dinheiro'}
            onChange={handleChange}
          />
          Dinheiro
        </label>

        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="pix"
            checked={selectedMethod === 'pix'}
            onChange={handleChange}
          />
          PIX
        </label>
      </div>
    </div>
  );
};

export default PaymentOptions;
