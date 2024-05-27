// InfoJob.js

import React from 'react';

function InfoJob({ selectedJob }) {
  return (
    <div className="selected-job-info w-1/2 h-[650px] border rounded-lg flex flex-col mx-10">
      <h2>{selectedJob.jobTitle}</h2>
      <p>Empresa: {selectedJob.company}</p>
      <p>Ubicación: {selectedJob.location}</p>
      <p>Salario: {selectedJob.salary}</p>
    </div>
  );
}

export default InfoJob;
