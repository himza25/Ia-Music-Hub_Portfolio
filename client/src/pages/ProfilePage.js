import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();

  const creations = [
    { id: 1, title: 'Création 1', youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { id: 2, title: 'Création 2', youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { id: 3, title: 'Création 3', youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  ];

  const handlePreview = (youtubeLink) => {
    navigate('/preview', { state: { youtubeLink } });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Mes Créations</h1>
      <div className="w-1/3">
        {creations.map((creation) => (
          <div key={creation.id} className="bg-white p-4 rounded shadow mb-2 flex justify-between items-center">
            <span>{creation.title}</span>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => handlePreview(creation.youtubeLink)}
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
