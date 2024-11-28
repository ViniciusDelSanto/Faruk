import React, { useState, useEffect } from 'react';
import useCSRFToken from '../../components/useCSRFToken';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const csrfToken = useCSRFToken();

  useEffect(() => {
    const checkLoginStatus = async () => {
      const isAuthenticated = localStorage.getItem('is_authenticated');
      const isAdminStatus = localStorage.getItem('is_admin');

      if (isAuthenticated === 'true') {
        setIsLoggedIn(true);
        setIsAdmin(isAdminStatus === 'true');
        setUsername(localStorage.getItem('username') || '');
      } else {
        setIsLoggedIn(false);
        setIsAdmin(false);
      }
    };

    checkLoginStatus();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,
        },
        credentials: 'include',
        body: JSON.stringify({
          username: email,
          password,
        }),
      });

      const data = await response.json();
      if (response.ok && data.status === 'success') {
        setIsLoggedIn(true);
        setUsername(data.username || email);
        setIsAdmin(data.is_admin || false);

        localStorage.setItem('is_authenticated', true);
        localStorage.setItem('is_admin', data.is_admin);
        localStorage.setItem('username', data.username);

        window.location.href = '/dashboard';
      } else {
        alert(data.message || 'Erro ao efetuar login.');
      }
    } catch (error) {
      console.error('Erro durante o login:', error);
      alert('Erro ao efetuar login. Tente novamente.');
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/logout/', {
        method: 'POST',
        headers: {
          'X-CSRFToken': csrfToken,
        },
        credentials: 'include',
      });

      if (response.ok) {
        setIsLoggedIn(false);
        setUsername('');
        setIsAdmin(false);

        localStorage.removeItem('is_authenticated');
        localStorage.removeItem('is_admin');
        localStorage.removeItem('username');
      } else {
        alert('Erro ao efetuar logout.');
      }
    } catch (error) {
      console.error('Erro durante o logout:', error);
    }
  };

  const goToDashboard = () => {
    window.location.href = '/dashboard';
  };

  return (
    <div className="login-container">
      {isLoggedIn ? (
        <div className="logged-in">
          <h1>Bem-vindo!</h1>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
          {isAdmin && (
            <button onClick={goToDashboard} className="dashboard-button">
              Ir para o Dashboard
            </button>
          )}
        </div>
      ) : (
        <div className="login-card">
          <h1 className="login-title">Faruk - Admin</h1>
          <form onSubmit={handleLogin} className="login-form">
            <div className="login-form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="login-input"
              />
            </div>
            <div className="login-form-group">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="login-input"
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
