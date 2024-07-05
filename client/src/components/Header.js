// client/src/components/Header.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="bg-white p-4 flex justify-between items-center shadow">
      <div className="flex items-center">
        <Link to="/" className="text-xl font-bold">IA Music Hub</Link>
      </div>
      <div className="flex items-center">
        <input type="text" placeholder="Search..." className="border p-2 rounded mr-4" />
        {user ? (
          <>
            <button onClick={logout} className="bg-blue-500 text-white px-4 py-2 rounded">Log Out</button>
          </>
        ) : (
          <Link to="/auth" className="bg-blue-500 text-white px-4 py-2 rounded">Log In</Link>
        )}
      </div>
    </header>
  );
};

export default Header;