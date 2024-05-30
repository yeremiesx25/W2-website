// TrabajosContainer.js

import React, { useState } from 'react';
import Buscador from './Buscador';
import CardTrabajo from './CardTrabajo';
import InfoJob from '../PowerAuth/InfoJob'; // Importa el nuevo componente
import agil from "../../assets/AGIL TALENT.png";
import flecha from "../../assets/flecha.png";

import asesor from "../../assets/Flyers Nuevos/2.png";
import repartidor from "../../assets/Flyers Nuevos/3.png";
import conductor from "../../assets/Flyers Nuevos/4.png";
import medico from "../../assets/Flyers Nuevos/5.png";
import operario from "../../assets/Flyers Nuevos/6.png";
import asistente from "../../assets/Flyers Nuevos/7.png";
import almacenero from "../../assets/Flyers Nuevos/8.png";
import trailer from "../../assets/Flyers Nuevos/9.png";

function TrabajosContainer() {
  const jobRequirements = ["Experiencia en React.js", "Experiencia en desarrollo asdyyyy", "Habilidades de comunicación"];  

  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobClick = (jobInfo) => {
    setSelectedJob(jobInfo);
  };

  return (
    <div id='ofertas' className='w-full flex flex-col items-center font-dmsans pt-12 px-4 justify-center'>
      <h2 className="font-dmsans sm:text-4xl text-2xl font-bold title-font text-center text-transparent bg-clip-text bg-gradient-to-r from-primarytext to-black mb-12 mt-6"> 
        <img src={flecha} alt="" className="inline-block w-16 h-12 mr-2" />
        Ofertas <span className="text-amber-500 xl:inline"> Laborales </span>
      </h2>
      <div className='flex w-full justify-center items-center'>
        <div className='flex flex-col w-full md:w-1/2 justify-start items-center py-4 gap-4 h-[650px] overflow-auto'>
          <CardTrabajo
            jobTitle="Asesor de Ventas"
            company=""
            location="Lima Este - Sur - Centro"
            salary="S/. 1025"
            companyLogo={agil}
            requirements={['Químico farmacéutico titulado', 'Residir en Chorrillos o zonas aledañas', 'Experiencia de 1 año como Analista de Aseguramiento de la Calidad.']}
            timeActive="Hace 2 días"
            imageUrl={asesor}
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
            jobTitle="Auxiliar de Reparto CBC"
            company=""
            location="Huachipa/Ate"
            salary="S/. 1025 - S/. 1451.50"
            companyLogo={agil}
            requirements={['Con estudios de las carreras Técnicas de Refrigeración o electricidad u carreras afines.', 'Experiencia como asistente operativo en equipos de refigeración.', 'Disponibilidad para realizar turnos rotativos y vivir en el Callao.']}
            timeActive="Hace 2 días"
            imageUrl={repartidor}
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
            jobTitle="Conductor de Reparto A3C - A3B"
            company=""
            location="Huachipa - Ate - Comas"
            salary="S/. 2100"
            companyLogo={agil}
            requirements={['DNI y licencia A3C vigente +  A4 + Buen récord del conductor.', 'Disponibilidad para rotar.', 'Experiencia manejando Semitrailer Americano y en ruta minera.']}
            timeActive="Hace 2 días"
            imageUrl={conductor}
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
            jobTitle="Representante Médico Junior"
            company=""
            location="Zona Sur"
            salary="S/. 1300"
            companyLogo={agil}
            requirements={['Experiencia mínima de 6 meses como almacenero.', 'DNI vigente + Vivir en zonas aledañas al Callao.', 'Disponibilidad para realizar turnos rotativos.']}
            timeActive="Hace 2 días"
            imageUrl={medico}
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
            jobTitle="Operario de Almacén"
            company="1200"
            location="Callao"
            salary=""
            companyLogo={agil}
            requirements={[]}
            timeActive="Hace 2 días"
            imageUrl={operario}
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
            jobTitle="Asistente Operativo de Planta Frío"
            company=""
            location="Callao"
            salary="S/. 1300"
            companyLogo={agil}
            requirements={[]}
            timeActive="Hace 2 días"
            imageUrl={asistente}
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
            jobTitle="Almacenero"
            company=""
            location="Callao"
            salary="S/. 1025"
            companyLogo={agil}
            requirements={[]}
            timeActive="Hace 2 días"
            imageUrl={almacenero}
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
            jobTitle="Conductores SemiTrailer Americano A3C y A4"
            company=""
            location="Callao"
            salary="S/. 2900"
            companyLogo={agil}
            requirements={[]}
            timeActive="Hace 2 días"
            imageUrl={trailer}
            onClick={() => handleJobClick({
              jobTitle: "Desarrollador backend Senior",
              company: "Mi Empresa",
              location: "Ciudad, País",
              salary: "$50,000 - $70,000 al año",
              companyLogo: startup,
              requirements: jobRequirements,
              timeActive: "Hace 2 días"
            })}
          />
        </div>
      </div>
    </div>
  );
}

export default TrabajosContainer;