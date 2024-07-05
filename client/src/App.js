import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Home, User, Share2 } from 'lucide-react';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';
import PreviewPage from './pages/PreviewPage';
import CreatePage from './pages/CreatePage';
import { useAuth } from './contexts/AuthContext';

const App = () => {
  const { currentUser } = useAuth();

  return (
    <div className="flex min-h-screen">
      <nav className="w-64 bg-gray-800 text-white p-4">
        <div className="text-xl font-bold mb-8">IA Music Hub</div>
        <div className="flex items-center p-2 cursor-pointer" onClick={() => window.location.href = '/'}>
          <Home />
          <span className="ml-2">Accueil</span>
        </div>
        {currentUser && (
          <>
            <div className="flex items-center p-2 cursor-pointer" onClick={() => window.location.href = '/profile'}>
              <User />
              <span className="ml-2">Profil</span>
            </div>
            <div className="flex items-center p-2 cursor-pointer" onClick={() => window.location.href = '/create'}>
              <Share2 />
              <span className="ml-2">Créer</span>
            </div>
          </>
        )}
      </nav>
      <main className="flex-1 bg-gray-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/preview" element={<PreviewPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
