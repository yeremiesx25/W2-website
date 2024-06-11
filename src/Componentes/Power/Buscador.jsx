import React, { useState, useContext } from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import JobsContext from '../../Context/JobsContext'; // Ajusta la ruta según sea necesario

function Buscador() {
  const { searchJobs, resetSearchResults } = useContext(JobsContext);
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (keyword || location) {
      searchJobs(keyword, location);
    } else {
      resetSearchResults();
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <form onSubmit={handleSearch} className="flex bg-white rounded-full shadow-md overflow-hidden w-full max-w-4xl border">
        <div className="relative flex items-center w-full border-r">
          <FaSearch className="absolute left-4 text-gray-500" />
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Título del empleo"
            className="p-4 pl-12 outline-none w-full"
          />
        </div>
        <div className="relative flex items-center w-full border-r">
          <FaMapMarkerAlt className="absolute left-4 text-gray-500" />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Ciudad o Lugar"
            className="p-4 pl-12 outline-none w-full"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-4 hover:bg-blue-700 rounded-r-full">
          Buscar empleos
        </button>
      </form>
    </div>
  );
}

export default Buscador;