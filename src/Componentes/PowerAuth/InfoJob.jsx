import React, { useState, useEffect, useRef } from 'react';
import { FaLocationDot } from "react-icons/fa6";

function InfoJob({ selectedJob }) {
  const [atBottom, setAtBottom] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
        if (scrollTop + clientHeight >= scrollHeight - 1) {
          setAtBottom(true);
        } else {
          setAtBottom(false);
        }
      }
    };

    if (contentRef.current) {
      contentRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (contentRef.current) {
        contentRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  if (!selectedJob) {
    return null; // Evitar renderizar si selectedJob es null
  }

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

  const whatsappBaseUrl = selectedJob.wtsp_url ? selectedJob.wtsp_url.split('?')[0] : '';
  const whatsappMessage = `Hola, estoy interesado en el puesto de ${selectedJob.puesto}`;
  const whatsappUrl = `${whatsappBaseUrl}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="selected-job-info w-full sm:w-1/2 border rounded-lg flex flex-col p-4 mx-8 bg-white shadow-lg" style={{ height: '650px', overflowY: 'auto', position: 'relative' }}>
      <h2 className="ml-1 mt-3 font-bold text-4xl text-black">{selectedJob.puesto}</h2>
      <div className="flex items-center justify-between mb-2 mt-2">
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-start">
            <span className="text-black text-sm uppercase font-semibold tracking-wide" style={{ display: 'flex', alignItems: 'center' }}>
              {selectedJob.empresa}
            </span>
            <span className="inline-block mx-4 h-4 w-px bg-gray-400"></span>
            <span className="text-black text-sm uppercase font-semibold tracking-wide" style={{ display: 'flex', alignItems: 'center' }}>
              <FaLocationDot style={{ color: 'black', marginRight: '5px' }} />
              {selectedJob.ubicacion}
            </span>
            <span className="inline-block mx-4 h-4 w-px bg-gray-400"></span>
            <span className="text-black text-sm uppercase font-semibold tracking-wide" style={{ display: 'flex', alignItems: 'center' }}>
              S/. {selectedJob.sueldo} al mes
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-start mt-2">
        <button className="bg-[#0057c2] text-white font-bold py-2 px-4 rounded-full mb-4">POSTULARME</button>
      </div>
      <div className="border-t border-gray-300 my-2" style={{ width: '100%' }}></div>
      <div ref={contentRef} className="mx-auto mt-3 w-full overflow-y-auto" style={{ height: 'calc(100% - 180px)' }}>
        <h3>Descripción del Empleo:</h3>
        {jobDetails.map((detail, index) => (
          <div
            key={index}
            className="py-5 border-b border-gray-200"
          >
            <div className="font-semibold font-dmsans text-primarytext text-orange-500">
              <div>{detail.title}</div>
            </div>
            <p className="mt-3 text-gray-800" style={{ wordWrap: 'break-word', overflowWrap: 'break-word', width: '100%' }}>{detail.content}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-start mt-4" style={{ opacity: atBottom ? 1 : 0, transition: 'opacity 0.3s' }}>
        <button className="bg-[#0057c2] text-white font-bold py-2 px-4 rounded-full mr-4">POSTULARME</button>
        {whatsappBaseUrl && (
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-full">WhatsApp</button>
          </a>
        )}
      </div>
    </div>
  );
}

export default InfoJob;