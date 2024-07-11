import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleStartAdventure = () => {
    navigate('/auth');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Bienvenue sur IA Music Hub</h1>
      <button
        className="bg-blue-500 text-white px-6 py-3 rounded"
        onClick={handleStartAdventure}
      >
        Commencer l'aventure
      </button>
    </div>
  );
};

export default HomePage;