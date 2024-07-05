import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreationsList = () => {
  const [creations, setCreations] = useState([]);

  useEffect(() => {
    const fetchCreations = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/creations');
        setCreations(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCreations();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Liste des Créations</h2>
      <div className="grid grid-cols-3 gap-4">
        {creations.map((creation) => (
          <div key={creation._id} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">{creation.title}</h3>
            <p>{creation.description}</p>
            <a href={creation.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              Voir la création
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreationsList;
