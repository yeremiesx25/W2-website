import React, { useState, useContext, useEffect } from 'react';
import CardTrabajo2 from './CardTrabajo2';
import InfoJob from '../PowerAuth/InfoJob';
import JobsContext from '../../Context/JobsContext';

function TrabajosContainer2() {
  const { userSearchResults } = useContext(JobsContext);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    if (userSearchResults.length > 0) {
      // Ordenar los resultados por fecha de publicación de manera descendente
      const sortedResults = userSearchResults.slice().sort((a, b) => new Date(b.fecha_publicacion) - new Date(a.fecha_publicacion));
      setSelectedJob(sortedResults[0]); // Seleccionar el primer trabajo (el más reciente)
    }
  }, [userSearchResults]);

  return (
    <div id='ofertas' className='w-full flex flex-col items-center font-dmsans pt-6 px-4 justify-center pb-10'>
      <div className='flex w-full justify-center items-center'>
        <div
          className='flex flex-col w-full md:w-1/2 justify-start items-center gap-4 h-[650px] overflow-auto pl-12 ml-10'
          style={{
            msOverflowStyle: 'none',  // IE and Edge
            scrollbarWidth: 'none'   // Firefox
          }}
        >
          {userSearchResults
            .slice()
            .sort((a, b) => new Date(b.fecha_publicacion) - new Date(a.fecha_publicacion))
            .map((job, index) => (
              <CardTrabajo2
                key={index}
                job={job}
                onSelectJob={setSelectedJob}
                isSelected={selectedJob === job}
              />
            ))}
        </div>
        {selectedJob && (
          <InfoJob selectedJob={selectedJob} />
        )}
      </div>
    </div>
  );
}

export default TrabajosContainer2;