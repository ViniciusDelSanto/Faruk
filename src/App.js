import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home/Home';
import Menu from './screens/Menu/Menu';
import Cart from './screens/Cart/Cart';
import Checkout from './screens/Checkout/Checkout';
import OrderConfirmation from './screens/OrderConfirmation/OrderConfirmation';
import Contact from './screens/Contact/Contact';
import Login from './screens/Login/Login';
import Dashboard from './screens/Dashboard/Dashboard';

import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Adicione outras rotas conforme necessário */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
