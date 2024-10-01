import React, { useState, useContext, useEffect } from 'react';
import CardTrabajo from './CardTrabajo';
import InfoJobPower from './InfoJobPower';
import JobsContext from '../../Context/JobsContext';
import { useNavigate, useParams } from 'react-router-dom';
import flecha from "../../assets/flecha.png";

function TrabajosContainer() {
  const { userSearchResults } = useContext(JobsContext);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();
  const { id_oferta } = useParams();
  console.log('Resultados de búsqueda de trabajos:', userSearchResults);
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
    if (userSearchResults.length > 0) {
      const filteredResults = userSearchResults
        .filter(job => job.estado === 'activa') // Filtrar por estado "abierto"
        .slice()
        .sort((a, b) => new Date(b.fecha_publicacion) - new Date(a.fecha_publicacion));
      
      setSelectedJob(filteredResults[0]);
    }
  }, [userSearchResults]);

  useEffect(() => {
    if (id_oferta && userSearchResults.length > 0) {
      const foundJob = userSearchResults.find(job => job.id_oferta === parseInt(id_oferta) && job.estado === 'activa');
      if (foundJob) {
        setSelectedJob(foundJob);
      } else {
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
    <div id='ofertas' className='w-full flex flex-col items-center font-dmsans pt-6 px-4 justify-center pb-10 bg-[#F5F7F9]'>
      <h1 className='text-3xl font-bold mb-4'> <img src={flecha} alt="" className="mt-4 mb-5 inline-block w-16 h-12 mr-2"></img> OFERTAS <span className="text-primarycolor xl:inline"> LABORALES </span></h1>
      <div className='flex w-full justify-center items-center'>
        <div
          className='flex flex-col w-full md:w-1/2 justify-start items-center gap-4 h-[650px] overflow-auto'
          style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}
        >
          {userSearchResults
            .filter(job => job.estado === 'activa') // Filtrar por estado "abierto"
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
