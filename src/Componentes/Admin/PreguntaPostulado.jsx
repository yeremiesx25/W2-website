import React from 'react';

const PreguntaPostulado = ({ preguntas, respuestas }) => {
  if (!preguntas || !respuestas || preguntas.length !== respuestas.length) {
    return <p className="text-center text-red-500">No hay preguntas o respuestas disponibles.</p>;
  }

  return (
    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
      <h3 className="text-lg font-semibold mb-4">Respuestas del Postulado</h3>
      {preguntas.map((pregunta, index) => (
        <div key={index} className="mb-4">
          <p className="text-sm font-medium text-gray-900">
            <strong>{pregunta}</strong>
          </p>
          <p className="text-sm text-gray-700 mt-1">
            {respuestas[index] || 'No respondido'}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PreguntaPostulado;
