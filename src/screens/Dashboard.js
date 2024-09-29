import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Faruk - Painel de Administração</h1>
      <div className="dashboard-grid">
        
        {/* Seção de Pedidos */}
        <div className="card orders">
          <h2 className="card-title">Pedidos</h2>
          <div className="card-content">
            <p>Total de pedidos hoje: 23</p>
            <button className="btn-primary">Ver Pedidos</button>
          </div>
        </div>

        {/* Seção de Cardápio */}
        <div className="card menu">
          <h2 className="card-title">Gerenciar Cardápio</h2>
          <div className="card-content">
            <p>Total de itens: 35</p>
            <button className="btn-primary">Editar Cardápio</button>
          </div>
        </div>

        {/* Seção de Relatórios */}
        <div className="card reports">
          <h2 className="card-title">Relatórios de Vendas</h2>
          <div className="card-content">
            <p>Vendas do mês: R$ 12,300</p>
            <button className="btn-primary">Ver Relatórios</button>
          </div>
        </div>

        {/* Seção de Usuários */}
        <div className="card users">
          <h2 className="card-title">Gerenciar Usuários</h2>
          <div className="card-content">
            <p>Usuários registrados: 10</p>
            <button className="btn-primary">Ver Usuários</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
