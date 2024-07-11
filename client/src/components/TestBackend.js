import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestBackend = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('https://musical-guide-577xxwq64g9fvxwv-5000.app.github.dev/test-backend')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        setMessage('Error connecting to backend');
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default TestBackend;