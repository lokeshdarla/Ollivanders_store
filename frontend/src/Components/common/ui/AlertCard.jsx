import React from 'react';

const AlertCard = ({ title, content }) => {
  return (
    <div className="p-6 rounded-md shadow-md bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300">
      <h2 className="mb-2 text-2xl font-bold">{title}</h2>
      <p className="text-gray-800">{content}</p>
    </div>
  );
};

export default AlertCard;
