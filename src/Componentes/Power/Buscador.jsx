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
    <div className="flex justify-center mt-10 w-full">
      <form
        onSubmit={handleSearch}
        className="relative bg-white flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300 w-full max-w-2xl"
      >
        <div className="relative flex items-center w-full border-r">
          <FaSearch className="absolute left-4 text-gray-500" />
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Título del empleo"
            className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white pl-12"
          />
        </div>
        <div className="relative flex items-center w-full border-r">
          <FaMapMarkerAlt className="absolute left-4 text-gray-500" />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Ciudad o Lugar"
            className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white pl-12"
          />
        </div>
        <button
          type="submit"
          className="w-full md:w-auto min-w-[150px] px-6 py-3 bg-blue-600 border-blue-600 text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70"
        >
          <div className="relative flex items-center justify-center">
            <span className="text-sm font-semibold whitespace-nowrap">Buscar empleos</span>
          </div>
        </button>
      </form>
    </div>
  );
}

export default Buscador;