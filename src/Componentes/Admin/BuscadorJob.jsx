import React, { useContext } from 'react';
import JobsContext from '../../Context/JobsContext';
import { IoSearch } from "react-icons/io5";

function BuscadorJob() {
  const { searchTerm, setSearchTerm } = useContext(JobsContext);

  return (
      
      <form className="bg-white border border-gray-300 rounded-full flex items-center pl-2 text-gray-700  lg:w-96 md:w-64">
        <IoSearch className='ml-2' />
            <div className="sm:flex items-center  overflow-hidden px-2 py-2 justify-between w-3/5">
              <input
                className="text-base text-gray-700 placeholder:text-gray-600 flex-grow outline-none px-2 "
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
