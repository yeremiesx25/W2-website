import React, { useContext } from 'react';
import JobsContext from '../../Context/JobsContext';

function BuscadorJob() {
  const { searchTerm, setSearchTerm } = useContext(JobsContext);

  return (
    <div className="relative p-3 border border-gray-200 rounded-lg w-1/2 max-w-lg mb-8">
      <input 
        type="text" 
        className="rounded-md p-3 w-full focus:outline-none" 
        placeholder="Buscar por puesto"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className="absolute right-6 top-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </button>
    </div>
  );
}

export default BuscadorJob;
