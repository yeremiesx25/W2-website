import React, { useState } from 'react';

const PreguntaPostulado = ({ preguntas }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleModal} className="text-blue-500">
        Ver preguntas
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow-lg max-w-lg w-full">
            <h2 className="text-xl font-semibold mb-4">Preguntas y Respuestas</h2>
            <ul>
              {preguntas.map((pregunta, index) => (
                <li key={index} className="mb-2">
                  <p className="font-semibold">Pregunta: {pregunta.pregunta}</p>
                  <p>Respuesta: {pregunta.respuesta}</p>
                </li>
              ))}
            </ul>
            <button onClick={toggleModal} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PreguntaPostulado;
