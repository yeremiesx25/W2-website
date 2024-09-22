import React, { useContext } from 'react';
import JobsContext from '../../Context/JobsContext';
import { IoSearch } from "react-icons/io5";

function BuscadorJob() {
  const { searchTerm, setSearchTerm } = useContext(JobsContext);

  return (
      
      <form className="bg-white flex items-center pl-2 text-gray-700">
        <IoSearch />
            <div class="sm:flex items-center  overflow-hidden px-2 py-1 justify-between w-3/5">
              <input
                class="text-base text-gray-700 placeholder:text-gray-600 flex-grow outline-none px-2 "
                type="text"
                placeholder="Buscar por puesto"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              
            </div>
          </form>

  );
}

export default BuscadorJob;
