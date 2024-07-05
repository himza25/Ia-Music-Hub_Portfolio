import React from 'react';

const DiscoverPage = () => (
  <div>
    <input type="text" placeholder="Rechercher des créations" className="w-full border p-2 mb-4 rounded" />
    <div className="grid grid-cols-3 gap-4">
      {[1, 2, 3, 4, 5, 6].map(i => (
        <div key={i} className="bg-white p-4 rounded shadow">
          <div className="bg-gray-200 h-48 mb-2"></div>
          <h3 className="font-bold">Création {i}</h3>
          <p>Description de la création</p>
        </div>
      ))}
    </div>
  </div>
);

export default DiscoverPage;
