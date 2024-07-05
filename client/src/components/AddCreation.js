import React, { useState } from 'react';
import axios from 'axios';

const AddCreation = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/creations', { title, description, link });
      setSuccess('Création ajoutée avec succès !');
      setTitle('');
      setDescription('');
      setLink('');
    } catch (err) {
      setError('Erreur lors de l\'ajout de la création.');
      console.error(err);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Ajouter une Création</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {success && <div className="text-green-500 mb-4">{success}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 mb-2 rounded"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-2 mb-2 rounded"
        />
        <input
          type="text"
          placeholder="Lien"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="w-full border p-2 mb-2 rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Ajouter</button>
      </form>
    </div>
  );
};

export default AddCreation;
