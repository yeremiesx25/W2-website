import React, { useState, useContext } from 'react';
import CardTrabajo2 from './CardTrabajo2';
import InfoJob from '../PowerAuth/InfoJob';
import flecha from "../../assets/flecha.png";
import JobsContext from '../../Context/JobsContext'; // Ajusta la ruta según sea necesario

function TrabajosContainer2() {
  const { userSearchResults } = useContext(JobsContext);
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div id='ofertas' className='w-full flex flex-col items-center font-dmsans pt-6 px-4 justify-center'>
      <h2 className="font-dmsans sm:text-4xl text-2xl font-bold title-font text-center text-transparent bg-clip-text bg-gradient-to-r from-primarytext to-black mb-12 mt-6 "> 
        <img src={flecha} alt="" className="inline-block w-16 h-12 mr-2" />
        Ofertas <span className="text-amber-500 xl:inline"> Laborales </span>
      </h2>
      <div className='flex w-full justify-center items-center'>
        <div className='flex flex-col w-full md:w-1/2 justify-start items-center py-4 gap-4 h-[650px] overflow-auto pl-12'>
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