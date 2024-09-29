import React from 'react';
import './OrderSummary.css';

const OrderSummary = ({ orderDetails }) => {
  // Verifica se orderDetails e items estão definidos
  if (!orderDetails || !orderDetails.items) {
    return <div>Sem detalhes do pedido disponíveis.</div>;
  }

  return (
    <div className="order-summary">
      <h3>Resumo do Pedido</h3>
      <ul>
        {orderDetails.items.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <span>{item.quantity}x</span>
            <span>R${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>

      <div className="summary-details">
        <p><strong>Endereço de Entrega:</strong> {orderDetails.address}</p>
        <p><strong>Método de Pagamento:</strong> {orderDetails.paymentMethod}</p>
        <p><strong>Total:</strong> R${orderDetails.total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default OrderSummary;
