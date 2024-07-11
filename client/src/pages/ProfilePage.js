import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [creations, setCreations] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  const fetchCreations = async () => {
    try {
      const res = await axios.get('https://musical-guide-577xxwq64g9fvxwv-5000.app.github.dev/creations');
      setCreations(res.data.filter(creation => creation.userId === user._id));
    } catch (error) {
      console.error('Erreur lors de la récupération des créations', error);
    }
  };

  useEffect(() => {
    fetchCreations();
  }, [user._id]);

  const handlePreview = (youtubeLink) => {
    navigate('/preview', { state: { youtubeLink } });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Mes Créations</h1>
      <div className="w-1/3">
        {creations.map((creation) => (
          <div key={creation._id} className="bg-white p-4 rounded shadow mb-2 flex justify-between items-center">
            <span>{creation.title}</span>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => handlePreview(creation.link)}
            >
              Prévisualiser
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
