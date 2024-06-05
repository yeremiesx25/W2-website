import React, { useContext } from 'react';
import JobsContext from '../../Context/JobsContext';

function BuscadorJob() {
  const { searchTerm, setSearchTerm } = useContext(JobsContext);

  return (
    <div className="h-16 border border-gray-300 rounded-lg w-1/2 max-w-lg mb-8 flex">
      <input 
        type="text" 
        className="rounded-md p-3 w-full focus:outline-none" 
        placeholder="Buscar por puesto"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default BuscadorJob;
