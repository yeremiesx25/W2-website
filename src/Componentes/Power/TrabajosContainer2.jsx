import React, { useState, useContext, useEffect } from 'react';
import CardTrabajo2 from './CardTrabajo2';
import InfoJob from '../PowerAuth/InfoJob';
import JobsContext from '../../Context/JobsContext';
import { useNavigate, useParams } from 'react-router-dom';

function TrabajosContainer2() {
  const { userSearchResults } = useContext(JobsContext);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();
  const { id_oferta } = useParams();
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const filteredResults = userSearchResults
      .filter(job => job.estado === 'activa')
      .sort((a, b) => new Date(b.fecha_publicacion) - new Date(a.fecha_publicacion));

    setSelectedJob(filteredResults[0] || null); // Manejo de trabajos filtrados vacíos
  }, [userSearchResults]);

  useEffect(() => {
    if (id_oferta && userSearchResults.length > 0) {
      const foundJob = userSearchResults.find(job => job.id_oferta === parseInt(id_oferta, 10) && job.estado === 'activa');
      if (foundJob) {
        setSelectedJob(foundJob);
      } else {
        navigate('/Power'); // Redirigir si no se encuentra el trabajo
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
    <div id='ofertas' className='w-full flex flex-col items-center font-dmsans pt-4 px-4 justify-center pb-6'>
      <div className='flex w-full justify-center items-center'>
        <div
          className='flex flex-col w-full md:w-1/2 justify-start items-center gap-4 h-[620px] overflow-auto'
          style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}
        >
          {userSearchResults
            .filter(job => job.estado === 'activa')
            .sort((a, b) => new Date(b.fecha_publicacion) - new Date(a.fecha_publicacion))
            .map(job => (
              <CardTrabajo2
                key={job.id_oferta} // Usar id_oferta como clave
                job={job}
                onSelectJob={() => handleCardClick(job)}
                isSelected={selectedJob === job}
              />
            ))}
        </div>
        {selectedJob && !isMobile && (
          <InfoJob selectedJob={selectedJob} />
        )}
      </div>
    </div>
  );
}

export default TrabajosContainer2;
