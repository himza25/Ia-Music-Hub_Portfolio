import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://musical-guide-577xxwq64g9fvxwv-5000.app.github.dev/users/login', { email, password });
      if (response.data.user) {
        login(response.data.user);
        navigate('/profile');
      } else {
        setError('Email ou mot de passe incorrect.');
      }
    } catch (error) {
      console.error('Erreur lors de la connexion', error);
      setError('Email ou mot de passe incorrect.');
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow w-1/3">
      <h2 className="text-xl font-bold mb-4">Connexion</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 mb-2 rounded"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 mb-2 rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mb-2">
          Se connecter
        </button>
        <button className="w-full bg-red-500 text-white p-2 rounded">Connexion avec Google</button>
      </form>
    </div>
  );
};

export default Login;
