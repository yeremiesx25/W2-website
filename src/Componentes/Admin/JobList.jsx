import React, { useEffect, useState, useContext } from 'react';
import { supabase } from '../../supabase/supabase.config';
import { Link } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import JobsContext from '../../Context/JobsContext'; // Importa el contexto

// Función para formatear la fecha a dd-mm-yyyy
const formatDate = (isoString) => {
  const date = new Date(isoString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const JobList = () => {
  const { userSearchResults, jobs, setJobs } = useContext(JobsContext); // Obtén los trabajos filtrados y el estado original
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const fetchJobs = async () => {
      if (!user) return; // Esperar a que el usuario esté cargado

      const { data, error } = await supabase
        .from('Oferta')
        .select('id_oferta, puesto, fecha_publicacion, estado, count_postulados')
        .eq('id_reclutador', user.id); // Filtrar por id_reclutador

      if (error) {
        console.error('Error fetching jobs:', error);
      } else {
        const jobsWithPostulados = data.map(job => ({
          ...job,
          fecha_publicacion: formatDate(job.fecha_publicacion),
          postulados: job.count_postulados
        }));
        setJobs(jobsWithPostulados); // Actualiza los trabajos en el contexto
      }
    };

    fetchJobs();
  }, [user, setJobs]); // Agrega setJobs como dependencia

  const handleChangeStatus = async (index, newStatus) => {
    const jobToUpdate = userSearchResults[index]; // Usamos userSearchResults para cambiar el estado

    const { error } = await supabase
      .from('Oferta')
      .update({ estado: newStatus })
      .eq('id_oferta', jobToUpdate.id_oferta);

    if (error) {
      console.error('Error updating job status:', error);
    } else {
      const updatedJobs = [...userSearchResults];
      updatedJobs[index].estado = newStatus;
      setJobs(updatedJobs); // Actualiza tanto userSearchResults como jobs
    }
  };

  return (
    <div className="w-full bg-white pr-8 rounded-lg font-dmsans">
      <div className="grid grid-cols-5 gap-4 text-gray-500 text-md font-semibold bg-gray-200 p-4 rounded-lg">
        <div>Puesto</div>
        <div>Fecha</div>
        <div>Postulados</div>
        <div>Estado</div>
        <div>Acciones</div>
      </div>
      <div className="mt-4 space-y-4 h-80 overflow-y-scroll px-4">
        {userSearchResults.map((job, index) => ( // Mostrar trabajos filtrados
          <div
            key={job.id_oferta}
            className="grid grid-cols-5 gap-4 items-center border-b pb-4"
          >
            {/* Puesto */}
            <Link to={`/Postulados/${job.id_oferta}`}>
              <p className="text-gray-600 font-base">{job.puesto}</p>
            </Link>

            {/* Fecha */}
            <div>
              <p className="text-gray-600 font-base">{job.fecha_publicacion}</p>
            </div>

            {/* Postulados */}
            <div className="text-gray-600 font-base">{job.postulados}</div>

            {/* Estado */}
            <div>
              <select
                value={job.estado}
                onChange={(e) => handleChangeStatus(index, e.target.value)}
                className={`px-4 py-1 text-sm border border-gray-400 rounded-full font-base outline-none transition-all duration-300 font-semibold ${
                  job.estado === "activa" ? "text-green-500" : "text-red-500"
                }`}
              >
                <option value="activa" className="text-green-500">
                  Abierto
                </option>
                <option value="cerrada" className="text-red-500">
                  Cerrado
                </option>
              </select>
            </div>
            <div>
              <button className='flex items-center gap-2 bg- px-4 py-1 rounded-full text-primarycolor'><FaEdit /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
