import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => (
  <div className="contact-info">
    <h3>Informações de Contato</h3>
    <p>Telefone: (xx) xxxx-xxxx</p>
    <p>Endereço: Rua Exemplo, 123 - Cidade, Estado</p>
    <div className="social-links">
      <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
      <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
      <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
    </div>
  </div>
);

export default ContactInfo;
