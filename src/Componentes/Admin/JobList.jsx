import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase/supabase.config'; // Asegúrate de importar tu cliente de Supabase correctamente

// Función para formatear la fecha a dd-mm-yyyy
const formatDate = (isoString) => {
  const date = new Date(isoString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses son de 0 a 11
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const { data, error } = await supabase
        .from('Oferta')
        .select('puesto, fecha_publicacion, estado');
        
      if (error) {
        console.error('Error fetching jobs:', error);
      } else {
        // Añadir valor temporal para "postulados" y formatear la fecha
        const jobsWithPostulados = data.map(job => ({
          ...job,
          fecha_publicacion: formatDate(job.fecha_publicacion), // Formatear la fecha
          postulados: "0 / 0" // Valor temporal para postulados
        }));
        setJobs(jobsWithPostulados);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="w-full bg-white p-8 rounded-lg font-dmsans ">
      <div className="grid grid-cols-4 gap-4 text-gray-500 text-md font-semibold ">
        <div>Puesto</div>
        <div>Fecha</div>
        <div>Postulados</div> {/* Nueva columna para postulados */}
        <div>Estado</div>
      </div>
      <div className="mt-4 space-y-4 h-80 overflow-y-scroll">
        {jobs.map((job, index) => (
          <div key={index} className="grid grid-cols-4 gap-4 items-center border-b pb-4">
            {/* Puesto */}
            <div>
              <p className="text-black font-font-base">{job.puesto}</p>
            </div>

            {/* Fecha */}
            <div>
              <p className="text-black">{job.fecha_publicacion}</p> {/* Fecha formateada */}
            </div>

            {/* Postulados */}
            <div className="text-black font-font-base">{job.postulados}</div> {/* Valor temporal de postulados */}

            {/* Estado */}
            <div>
              <span className={`px-2 py-1 text-sm font-bold rounded-full ${job.estado === 'Abierto' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                {job.estado}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
