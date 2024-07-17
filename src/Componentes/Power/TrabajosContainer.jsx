import React, { useState, useContext, useEffect } from 'react';
import CardTrabajo from './CardTrabajo';
import InfoJobPower from './InfoJobPower';
import JobsContext from '../../Context/JobsContext';
import { useNavigate, useParams } from 'react-router-dom'; // Importa useParams para obtener el parámetro de la URL
import flecha from "../../assets/flecha.png";

function TrabajosContainer() {
  const { userSearchResults } = useContext(JobsContext);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();
  const { id_oferta } = useParams(); // Obtiene el parámetro de la URL

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (userSearchResults.length > 0) {
      const sortedResults = userSearchResults.slice().sort((a, b) => new Date(b.fecha_publicacion) - new Date(a.fecha_publicacion));
      setSelectedJob(sortedResults[0]);
    }
  }, [userSearchResults]);

  useEffect(() => {
    // Check if id_oferta exists in params and userSearchResults
    if (id_oferta && userSearchResults.length > 0) {
      const foundJob = userSearchResults.find(job => job.id_oferta === parseInt(id_oferta));
      if (foundJob) {
        setSelectedJob(foundJob);
      } else {
        // Handle case where job with id_oferta is not found
        navigate('/');
      }
    }
  }, [id_oferta, userSearchResults, navigate]);

  const handleCardClick = (job) => {
    if (isMobile) {
      navigate(`/info-job-movil/${job.id_oferta}`);
    } else {
      setSelectedJob(job);
    }
  };

  return (
    <div id='ofertas' className='w-full flex flex-col items-center font-dmsans pt-6 px-4 justify-center pb-10'>
       <h1 className='text-3xl font-bold mb-4'> <img src={flecha} alt="" className="mt-4 mb-5 inline-block w-16 h-12 mr-2"></img> OFERTAS <span className="text-amber-400 xl:inline"> LABORALES </span></h1>
      <div className='flex w-full justify-center items-center'>
        <div
          className='flex flex-col w-full md:w-1/2 justify-start items-center gap-4 h-[650px] overflow-auto md:pl-12 md:ml-10'
          style={{
            msOverflowStyle: 'none',  // IE and Edge
            scrollbarWidth: 'none'   // Firefox
          }}
        >
          {userSearchResults
            .slice()
            .sort((a, b) => new Date(b.fecha_publicacion) - new Date(a.fecha_publicacion))
            .map((job, index) => (
              <CardTrabajo
                key={index}
                job={job}
                onSelectJob={() => handleCardClick(job)}
                isSelected={selectedJob === job}
              />
            ))}
        </div>
        {selectedJob && !isMobile && (
          <InfoJobPower selectedJob={selectedJob} />
        )}
      </div>
    </div>
  );
}

export default TrabajosContainer;