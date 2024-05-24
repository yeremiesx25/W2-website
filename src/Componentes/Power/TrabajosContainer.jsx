// TrabajosContainer.js

import React, { useState } from 'react';
import Buscador from './Buscador';
import CardTrabajo from './CardTrabajo';
import startup from '../../assets/STARTUP TALENT.png';

function TrabajosContainer() {
  const jobRequirements = ["Experiencia en React.js", "Experiencia en desarrollo asdyyyy", "Habilidades de comunicación"];  

  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobClick = (jobInfo) => {
    setSelectedJob(jobInfo);
  };

  return (
    <div id='ofertas' className='w-full flex flex-col items-center font-dmsans pt-12 pl-14 justify-center'>
      <div className='flex w-full justify-center items-center'>
        <div className='flex flex-col w-1/2  justify-start items-center py-4 gap-4 h-[650px] overflow-auto'>
        
          <CardTrabajo
            
            jobTitle="QF - Analista de Aseguramiento de la Calidad "
            company="Dicar"
            location="Chorrillos"
            salary="S/. 3500"
            companyLogo={startup}
            requirements={['Químico farmacéutico titulado', 'Residir en Chorrillos o zonas aledañas', 'Experiencia de 1 año como Analista de Aseguramiento de la Calidad.']}
            timeActive="Hace 2 días"
            onClick={() => handleJobClick({
              jobTitle: "QF - Analista de Aseguramiento de la Calidad",
              company: "Mi Empresa",
              location: "Ciudad, País",
              salary: "$50,000 - $70,000 al año",
              companyLogo: startup,
              requirements: jobRequirements,
              timeActive: "Hace 2 días"
            })}
          />
          <CardTrabajo
            
            jobTitle="Asistente Operativo de Planta Frío"
            company="Ransa"
            location="Callao"
            salary="S/. 1300"
            companyLogo={startup}
            requirements={['Con estudios de las carreras Técnicas de Refrigeración o electricidad u carreras afines.', 'Experiencia como asistente operativo en equipos de refigeración.', 'Disponibilidad para realizar turnos rotativos y vivir en el Callao.' ]}
            timeActive="Hace 2 días"
            onClick={() => handleJobClick({
              jobTitle: "Asistente Operativo de Planta Frío",
              company: "Ransa",
              location: "Ciudad, País",
              salary: "S/. 1300",
              companyLogo: startup,
              requirements: jobRequirements,
              timeActive: "Hace 2 días"
            })}
          />
          <CardTrabajo
            
            jobTitle="Conductores Semitrailer Americano A3C Y A4"
            company="Ransa"
            location="Callao"
            salary="S/. 1900"
            companyLogo={startup}
            requirements={['DNI y licencia A3C vigente +  A4 + Buen récord del conductor.', 'Disponibilidad para rotar.', 'Experiencia manejando Semitrailer Americano y en ruta minera.']}
            timeActive="Hace 2 días"
            onClick={() => handleJobClick({
              jobTitle: "Conductores Semitrailer Americano A3C Y A4",
              company: "Ransa",
              location: "Callao",
              salary: "S/. 1900",
              companyLogo: startup,
              requirements: jobRequirements,
              timeActive: "Hace 2 días"
            })}
          />
          <CardTrabajo
            
            jobTitle="Almacenero"
            company="Ransa"
            location="Callao"
            salary="S/. 1025"
            companyLogo={startup}
            requirements={['Experiencia mínima de 6 meses como almacenero.', 'DNI vigente + Vivir en zonas aledañas al Callao.', 'Disponibilidad para realizar turnos rotativos.']}
            timeActive="Hace 2 días"
            onClick={() => handleJobClick({
              jobTitle: "Almacenero",
              company: "Ransa",
              location: "Callao",
              salary: "S/. 1025",
              companyLogo: startup,
              requirements: jobRequirements,
              timeActive: "Hace 2 días"
            })}
          />
          <CardTrabajo
            
            jobTitle="Auxiliar de reparto"
            company="Ate - Huachipa"
            location="Callao"
            salary=""
            companyLogo={startup}
            requirements={[]}
            timeActive="Hace 2 días"
            onClick={() => handleJobClick({
              jobTitle: "Desarrollador bcakend Senior",
              company: "Mi Empresa",
              location: "Ciudad, País",
              salary: "$50,000 - $70,000 al año",
              companyLogo: startup,
              requirements: jobRequirements,
              timeActive: "Hace 2 días"
            })}
          />
          <CardTrabajo
            
            jobTitle="Asesor de ventas"
            company="Topsa"
            location="Lima este - Lima sur - Lima centro"
            salary=""
            companyLogo={startup}
            requirements={[]}
            timeActive="Hace 2 días"
            onClick={() => handleJobClick({
              jobTitle: "Desarrollador bcakend Senior",
              company: "Mi Empresa",
              location: "Ciudad, País",
              salary: "$50,000 - $70,000 al año",
              companyLogo: startup,
              requirements: jobRequirements,
              timeActive: "Hace 2 días"
            })}
          />
       
      </div>
      {selectedJob && (
        <div className="selected-job-info w-1/2 h-[650px] border rounded-lg flex flex-col mx-10">
          <h2>{selectedJob.jobTitle}</h2>
          <p>Empresa: {selectedJob.company}</p>
          <p>Ubicación: {selectedJob.location}</p>
          <p>Salario: {selectedJob.salary}</p>
        </div>
      )}
      </div>
    </div>
  );
}

export default TrabajosContainer;
