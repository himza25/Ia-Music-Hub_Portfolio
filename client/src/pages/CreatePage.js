import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const CreatePage = () => {
  const [title, setTitle] = useState('');
  const [youtubeLink, setYoutubeLink] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const creationData = {
        userId: user._id,
        title,
        description: 'No description provided',
        link: youtubeLink,
      };
      const res = await axios.post('https://musical-guide-577xxwq64g9fvxwv-5000.app.github.dev/creations/add', creationData);
      setSuccess('Création ajoutée avec succès !');
      setError('');  // Clear error message
      setTitle('');
      setYoutubeLink('');
      navigate('/profile'); // Redirect to profile page to see the new creation
    } catch (error) {
      setError('Erreur lors de l\'ajout de la création.');
      setSuccess('');  // Clear success message
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Ajouter une Création</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {success && <div className="text-green-500 mb-4">{success}</div>}
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
