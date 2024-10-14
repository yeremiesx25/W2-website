import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="relative inline-flex">
      <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
      <div className="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-ping"></div>
      <div className="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
    </div>
  );
};

export default LoadingSpinner;