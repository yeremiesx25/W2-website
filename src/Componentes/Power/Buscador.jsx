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
      <form onSubmit={handleSearch} className="flex bg-white rounded-lg shadow-md overflow-hidden">
        <div className=" flex items-center">
          <FaSearch className="ml-4 text-gray-500" />
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Cargo o categoría."
            className="p-4 pl-12 border-r outline-none w-full"
          />
        </div>
        <div className=" flex items-center">
          <FaMapMarkerAlt className="ml-4 text-gray-500" />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Lugar"
            className="p-4 pl-12 border-r outline-none w-full"
          />
        </div>
        <button type="submit" className="bg-amber-400 text-white p-4 hover:bg-blue-700">
          <FaSearch />
        </button>
      </form>
    </div>
  );
}

export default Buscador;