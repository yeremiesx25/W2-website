import React, { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";

function InfoJob({ selectedJob }) {
  const [activeIndices, setActiveIndices] = useState([]);

  const jobDetails = [
    {
      title: "¿Por qué deberías unirte a nosotros?",
      content: selectedJob.beneficios
    },
    {
      title: "¿Qué buscamos?",
      content: selectedJob.requisitos
    },
    {
      title: "¿Qué es lo que harás?",
      content: selectedJob.funciones
    },
    {
      title: "Horario de Trabajo",
      content: selectedJob.horario
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndices(prevIndices => 
      prevIndices.includes(index)
        ? prevIndices.filter(i => i !== index)
        : [...prevIndices, index]
    );
  };

  return (
   <div className="selected-job-info w-full sm:w-1/2 border rounded-lg flex flex-col p-4 mx-8 bg-white shadow-lg" style={{ height: '650px', overflowY: 'auto', position: 'relative' }}>
      <h2 className="ml-1 mt-3 font-bold text-4xl text-black">{selectedJob.puesto}</h2>
      <div className="flex items-center justify-between mb-2 mt-2">
        <div className="flex flex-col">
          <span className="inline-block text-black py-1 px-3 text-s rounded-full uppercase font-semibold tracking-wide" style={{ display: 'flex', alignItems: 'center' }}>
            {selectedJob.empresa}
          </span>
          <span className="inline-block mt-2 text-black py-1 px-3 text-s rounded-full uppercase font-semibold tracking-wide" style={{ display: 'flex', alignItems: 'center' }}>
            <FaLocationDot style={{ color: 'black', marginRight: '5px' }} />
            {selectedJob.ubicacion}
          </span>
          <span className="inline-block mt-2 text-black py-1 px-3 text-s rounded-full uppercase font-semibold tracking-wide" style={{ display: 'flex', alignItems: 'center' }}>
            S/. {selectedJob.sueldo} al mes
          </span>
        </div>
      </div>
      <div className="flex justify-start mt-2">
        <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full mb-4">POSTULARME</button>
      </div>
      <div className="border-t border-gray-300 my-2" style={{ width: '100%' }}></div>
      <div className="mx-auto mt-3 w-full overflow-y-auto" style={{ height: 'calc(100% - 180px)' }}>
        <h3>Descripción del Empleo:</h3>
        {jobDetails.map((detail, index) => (
          <div
            key={index}
            className="py-5 border-b border-gray-200"
          >
            <div
              className="flex justify-between items-center font-semibold font-dmsans text-primarytext text-orange-500 cursor-pointer"
              onClick={() => toggleAccordion(index)}
              style={{ cursor: 'pointer' }}
            >
              <div>{detail.title}</div>
              <svg
                className={`h-6 w-6 transition-transform ${activeIndices.includes(index) ? 'transform rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </div>
            {activeIndices.includes(index) && (
              <p className="mt-3 text-gray-800" style={{ wordWrap: 'break-word', overflowWrap: 'break-word', width: '100%' }}>{detail.content}</p>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-start mt-4">
        <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full mr-4">POSTULARME</button>
        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-full">WhatsApp</button>
      </div>
    </div>
  );
}

export default InfoJob;