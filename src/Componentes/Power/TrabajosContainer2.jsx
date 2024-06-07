import React, { useState, useContext, useEffect } from 'react';
import CardTrabajo2 from './CardTrabajo2';
import InfoJob from '../PowerAuth/InfoJob';
import flecha from "../../assets/flecha.png";
import JobsContext from '../../Context/JobsContext'; // Ajusta la ruta según sea necesario

function TrabajosContainer2() {
  const { userSearchResults } = useContext(JobsContext);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    if (userSearchResults.length > 0) {
      setSelectedJob(userSearchResults[0]);
    }
  }, [userSearchResults]);

  return (
    <div id='ofertas' className='w-full flex flex-col items-center font-dmsans pt-6 px-4 justify-center'>
      <h2 className="font-dmsans sm:text-4xl text-2xl font-bold title-font text-center text-transparent bg-clip-text bg-gradient-to-r from-primarytext to-black mb-12 mt-6 "> 
        Ofertas <span className="text-amber-500 xl:inline"> Laborales </span>
      </h2>
      <div className='flex w-full justify-center items-center'>
        <div className='flex flex-col w-full md:w-1/2 justify-start items-center gap-4 h-[650px] overflow-auto pl-12 ml-10'>
          {userSearchResults.map((job, index) => (
            <CardTrabajo2
              key={index}
              job={job}
              onSelectJob={setSelectedJob}
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