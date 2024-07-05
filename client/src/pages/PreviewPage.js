import React from 'react';
import { useLocation } from 'react-router-dom';

const PreviewPage = () => {
  const location = useLocation();
  const { youtubeLink } = location.state;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Prévisualisation</h1>
      <div className="bg-white p-4 rounded shadow w-1/2">
        <iframe
          width="100%"
          height="315"
          src={youtubeLink.replace('watch?v=', 'embed/')}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video"
        ></iframe>
      </div>
    </div>
  );
};

export default PreviewPage;
