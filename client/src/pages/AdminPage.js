import React from 'react';

const AdminPage = () => (
  <div>
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-xl font-bold mb-2">Gestion des utilisateurs</h2>
      {['Utilisateur 1', 'Utilisateur 2', 'Utilisateur 3'].map((user, index) => (
        <div key={index} className="mb-2">{user}</div>
      ))}
    </div>
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-xl font-bold mb-2">Modération des contenus</h2>
      {['Contenu 1', 'Contenu 2', 'Contenu 3'].map((content, index) => (
        <div key={index} className="mb-2">{content}</div>
      ))}
    </div>
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">Statistiques globales</h2>
      <p>Utilisateurs totaux : 1000</p>
      <p>Créations totales : 5000</p>
    </div>
  </div>
);

export default AdminPage;