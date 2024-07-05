import React from 'react';

const SocialPage = () => (
  <div>
    {[
      { user: 'Alice', action: 'a aimé votre création' },
      { user: 'Bob', action: 'a commenté votre création' },
    ].map((item, index) => (
      <div key={index} className="bg-white p-4 rounded shadow mb-2 flex items-center">
        <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
        <div>
          <span className="font-bold">{item.user}</span> {item.action}
        </div>
      </div>
    ))}
  </div>
);

export default SocialPage;
