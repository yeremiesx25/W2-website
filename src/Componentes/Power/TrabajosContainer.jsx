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
    <div id='ofertas' className='w-full flex flex-col items-center font-dmsans pt-12 mb-8'>
      <h1 className='text-4xl font-semibold px-4 text-center'>
        Ofertas Laborales
      </h1>
      <Buscador />
      <div className='flex w-full justify-center items-center'>
        <div className='flex flex-col w-full justify-center items-center px-2 gap-4'>
        
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
        <div className="selected-job-info w-1/2">
          <h2>{selectedJob.jobTitle}</h2>
          <p>Empresa: {selectedJob.company}</p>
          <p>Ubicación: {selectedJob.location}</p>
          <p>Salario: {selectedJob.salary}</p>
        </div>
      )}
      </div>
      <div class="inline-flex rounded-xl mt-8">
    <ul class="flex items-center">
        <li class="px-2">
            <button aria-disabled="true" disabled="" class="w-9 h-9 flex items-center justify-center rounded-md border disabled">
                <span>
                    <svg width="8" height="15" viewBox="0 0 8 15" class="fill-current stroke-current"><path d="M7.12979 1.91389L7.1299 1.914L7.1344 1.90875C7.31476 1.69833 7.31528 1.36878 7.1047 1.15819C7.01062 1.06412 6.86296 1.00488 6.73613 1.00488C6.57736 1.00488 6.4537 1.07206 6.34569 1.18007L6.34564 1.18001L6.34229 1.18358L0.830207 7.06752C0.830152 7.06757 0.830098 7.06763 0.830043 7.06769C0.402311 7.52078 0.406126 8.26524 0.827473 8.73615L0.827439 8.73618L0.829982 8.73889L6.34248 14.6014L6.34243 14.6014L6.34569 14.6047C6.546 14.805 6.88221 14.8491 7.1047 14.6266C7.30447 14.4268 7.34883 14.0918 7.12833 13.8693L1.62078 8.01209C1.55579 7.93114 1.56859 7.82519 1.61408 7.7797L1.61413 7.77975L1.61729 7.77639L7.12979 1.91389Z" stroke-width="0.3"></path></svg>
                </span>
            </button>
        </li>
        <li class="px-2">
            <button class="w-9 h-9 rounded-md border hover:border-cyan-500 hover:text-indigo-500 text-indigo-500">1</button>
        </li>
        <li class="px-2">
            <button class="w-9 h-9 rounded-md border hover:border-cyan-500 hover:text-indigo-500">2</button>
        </li>
        <li class="px-2">
            <button class="w-9 h-9 rounded-md border hover:border-cyan-500 hover:text-indigo-500">3</button>
        </li>
        <li class="px-2">
            <button class="w-9 h-9 rounded-md border hover:border-cyan-500 hover:text-indigo-500">4</button>
        </li>
        <li class="px-2">
            <button class="w-9 h-9 rounded-md border hover:border-cyan-500 hover:text-indigo-500">5</button>
        </li>
        <li class="px-2">
            <button aria-disabled="false" class="w-9 h-9 flex items-center justify-center rounded-md border hover:text-indigo-500">
                <span>
                    <svg width="8" height="15" viewBox="0 0 8 15" class="fill-current stroke-current"><path d="M0.870212 13.0861L0.870097 13.086L0.865602 13.0912C0.685237 13.3017 0.684716 13.6312 0.895299 13.8418C0.989374 13.9359 1.13704 13.9951 1.26387 13.9951C1.42264 13.9951 1.5463 13.9279 1.65431 13.8199L1.65436 13.82L1.65771 13.8164L7.16979 7.93248C7.16985 7.93243 7.1699 7.93237 7.16996 7.93231C7.59769 7.47923 7.59387 6.73477 7.17253 6.26385L7.17256 6.26382L7.17002 6.26111L1.65752 0.398611L1.65757 0.398563L1.65431 0.395299C1.454 0.194997 1.11779 0.150934 0.895299 0.373424C0.695526 0.573197 0.651169 0.908167 0.871667 1.13067L6.37922 6.98791C6.4442 7.06886 6.43141 7.17481 6.38592 7.2203L6.38587 7.22025L6.38271 7.22361L0.870212 13.0861Z" stroke-width="0.3"></path></svg>
                </span>
            </button>
        </li>
    </ul>
</div>
    </div>
  );
}

export default TrabajosContainer;
