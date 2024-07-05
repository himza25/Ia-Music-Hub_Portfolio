import React from 'react';
import Signup from '../components/Signup';
import Login from '../components/Login';

const AuthPage = () => (
  <div className="flex justify-around min-h-screen items-center bg-gray-100">
    <Signup />
    <Login />
  </div>
);

export default AuthPage;
