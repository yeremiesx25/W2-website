// InfoJob.js

import React from 'react';

function InfoJob({ selectedJob }) {
  return (
    <div className="selected-job-info w-1/2 h-[650px] border rounded-lg flex flex-col mx-10">
      <h2>{selectedJob.puesto}</h2>
      <p>Empresa: {selectedJob.company}</p>
      <p>Ubicación: {selectedJob.ubicacion}</p>
      <p>Salario: {selectedJob.sueldo}</p>
    </div>
  );
}

export default InfoJob;
