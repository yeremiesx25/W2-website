import React, { useState, useEffect } from 'react';
import getAssistantResponse from './getAssistantResponse';

const ChatAiOferta = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [displayedResponse, setDisplayedResponse] = useState('');

  const handleSendMessage = async () => {
    const assistantResponse = await getAssistantResponse(input);
    setResponse(assistantResponse);
    setDisplayedResponse(''); // Reinicia el texto mostrado
  };

  useEffect(() => {
    if (response) {
      let index = 0;
      const interval = setInterval(() => {
        if (index < response.length) {
          setDisplayedResponse((prev) => prev + response[index]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, .3); // Ajusta la velocidad aquí

      return () => clearInterval(interval); // Limpia el intervalo al desmontar
    }
  }, [response]);

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center pt-16">
      <div className="rounded-lg p-6 w-full">
        <h2 className="text-xl font-semibold mb-4 text-center">Crea una oferta con IA</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded">
            Títulos atractivos
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded">
            Ahorra tiempo
          </button>
        </div>

        <div className="flex flex-col items-center">
          <div className="response mt-4 text-center h-80 overflow-y-scroll">
          <p dangerouslySetInnerHTML={{ __html: displayedResponse }} />
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escriba un puesto de trabajo"
            className="w-full p-3 rounded-lg bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 ring-1 ring-indigo-500 focus:ring-indigo-500 mt-4"
          />
          <button
            onClick={handleSendMessage}
            className="mt-4 bg-primarycolor hover:bg-indigo-500 text-white py-2 px-6 rounded"
          >
            Generar Oferta
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatAiOferta;
