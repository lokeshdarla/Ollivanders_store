import React from 'react';

const AlertCard = ({ title, content }) => {
  return (
    <div className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-800">{content}</p>
    </div>
  );
};

export default AlertCard;
