import React, { useContext } from 'react';
import JobsContext from '../../Context/JobsContext';
import AddButton from './AddButton';

function BuscadorJob() {
  const { searchTerm, setSearchTerm } = useContext(JobsContext);

  return (
      
      <form className="w-1/2 flex gap-4">
            
            <div class="sm:flex items-center bg-white rounded-full overflow-hidden px-2 py-1 justify-between w-3/5">
              <input
                class="text-base text-gray-400 flex-grow outline-none px-2 "
                type="text"
                placeholder="Buscar por puesto"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div class="ms:flex items-center px-2 rounded-full space-x-4 mx-auto ">
                <button class="bg-yellowprimary text-primarycolor text-semibold rounded-full px-4 py-2">
                  O
                </button>
                
              </div>
            </div><AddButton />
          </form>

  );
}

export default BuscadorJob;
