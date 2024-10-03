import React from 'react';
import OrderSummary from '../../components/OrderConfirmation/OrderSummary';
import './OrderConfirmation.css';

const OrderConfirmation = ({ orderDetails, deliveryTime }) => {
  const handleBackToHome = () => {
    console.log('Voltar para a página inicial');
  };

  return (
    <div className="order-confirmation">
      <h2>Pedido Confirmado!</h2>
      <OrderSummary orderDetails={orderDetails} />
      <div className="delivery-time">
        <h3>Tempo estimado de entrega:</h3>
        <p>{deliveryTime} minutos</p>
      </div>
      <button className="back-button" onClick={handleBackToHome}>
        Voltar ao Início
      </button>
    </div>
  );
};

export default OrderConfirmation;
