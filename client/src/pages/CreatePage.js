import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const CreatePage = () => {
  const [title, setTitle] = useState('');
  const [youtubeLink, setYoutubeLink] = useState('');
  const { currentUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Ajoute ici la logique d'ajout de création (par exemple, appel API)
      console.log('Création ajoutée:', { title, youtubeLink, user: currentUser });
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la création', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Ajouter une Création</h1>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow w-1/3">
        <input
          type="text"
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 mb-2 rounded"
        />
        <input
          type="text"
          placeholder="Lien YouTube"
          value={youtubeLink}
          onChange={(e) => setYoutubeLink(e.target.value)}
          className="w-full border p-2 mb-2 rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Ajouter</button>
      </form>
    </div>
  );
};

export default CreatePage;