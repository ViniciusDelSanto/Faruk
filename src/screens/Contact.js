import React, { useState } from 'react';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';
import './Contact.css';

const Contact = () => {
  const [error, setError] = useState('');

  const handleFormSubmit = ({ name, email, message }) => {
    if (!name || !email || !message) {
      setError('Todos os campos são obrigatórios.');
      return;
    }

    // Regex para validação de e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }

    setError('');
    console.log('Mensagem enviada:', { name, email, message });

    // adicionar a lógica para enviar os dados
  };

  return (
    <div className="contact-container">
      <h2>Contato</h2>
      <ContactForm onSubmit={handleFormSubmit} error={error} />
      <ContactInfo />
    </div>
  );
};

export default Contact;
