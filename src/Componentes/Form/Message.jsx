import React from 'react';

const Message = ({ text, sender }) => {
  return (
    <div className={`my-2 p-2 rounded-lg ${sender === 'user' ? 'bg-blue-200 text-right' : 'bg-gray-200 text-left'}`}>
      <p>{text}</p>
    </div>
  );
};

export default Message;