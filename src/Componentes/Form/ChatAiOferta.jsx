import React, { useState } from 'react';
import getAssistantResponse from './getAssistantResponse';

const ChatAiOferta = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSendMessage = async () => {
    const assistantResponse = await getAssistantResponse(input);
    setResponse(assistantResponse);
  };

  return (
    <div className="chat-container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe tu mensaje aquí..."
      />
      <button onClick={handleSendMessage}>Enviar</button>
      <div className="response">
        <p>{response}</p>
      </div>
    </div>
  );
};

export default ChatAiOferta;
