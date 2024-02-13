import React from 'react';

const Alert = ({ type, message }) => {
  const alertClasses = `p-4 mb-4 text-sm rounded-lg ${type === 'success' ? 'text-green-800 bg-green-50' : 'text-red-800 bg-red-50'}`;

  return (
    <div className={alertClasses} role="alert">
      <span className="font-medium">{type === 'success' ? 'Success !' : 'Error! '}</span> {message}
    </div>
  );
};

export default Alert;
