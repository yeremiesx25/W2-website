import React from 'react';
import { FaLocationDot } from "react-icons/fa6";

function InfoJob({ selectedJob }) {
  return (
    <div className="selected-job-info w-1/2 h-[650px] border rounded-lg flex flex-col mx-10">
      <div className="flex items-center">
        <span className="inline-block bg-brown-600 text-white py-1 px-3 text-xs rounded-full uppercase font-semibold tracking-wide self-start md:self-center" style={{ backgroundColor: '#964A00', display: 'flex', alignItems: 'center' }}>
          <FaLocationDot style={{ color: 'white', marginRight: '5px' }} />
          {selectedJob.ubicacion}
        </span>
      </div>
      <h2>{selectedJob.puesto}</h2>
      <p>Empresa: {selectedJob.company}</p>
      <p>Fecha: {selectedJob.fecha_publicacion}</p>
    </div>
  );
}

export default InfoJob;