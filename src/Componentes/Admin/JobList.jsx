import React, { useEffect, useState, useContext } from 'react';
import { supabase } from '../../supabase/supabase.config';
import { Link } from 'react-router-dom';
import { GrEdit } from "react-icons/gr";
import { UserAuth } from '../../Context/AuthContext'; // Usa el hook personalizado

// Función para formatear la fecha a dd-mm-yyyy
const formatDate = (isoString) => {
  const date = new Date(isoString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const JobList = () => {
  const { user } = UserAuth(); // Usa el hook personalizado para acceder al usuario

  const [jobs, setJobs] = useState([]);
  
  // Obtener el reclutador (id_reclutador) usando el user.id del perfil
  useEffect(() => {
    const fetchJobs = async () => {
      if (user) {
        // Consulta la tabla perfiles para obtener el id_reclutador del usuario logueado
        const { data: profileData, error: profileError } = await supabase
          .from('perfiles')
          .select('id')
          .eq('id', user.id)
          .single();
        
        if (profileError) {
          console.error('Error fetching profile:', profileError);
          return;
        }

        const idReclutador = profileData.id;

        // Ahora consulta las ofertas filtradas por id_reclutador
        const { data: jobsData, error: jobsError } = await supabase
          .from('Oferta')
          .select('*')
          .eq('id_reclutador', idReclutador); // Filtra las ofertas por el reclutador

        if (jobsError) {
          console.error('Error fetching jobs:', jobsError);
        } else {
          // Ordenar las ofertas por fecha de publicación (más reciente primero)
          const sortedJobs = jobsData.sort((a, b) => new Date(b.fecha_publicacion) - new Date(a.fecha_publicacion));
          setJobs(sortedJobs); // Guarda los trabajos filtrados en el estado
        }
      }
    };

    fetchJobs();
  }, [user]);

  // Función para manejar el cambio de estado de las ofertas
  const handleChangeStatus = async (index, newStatus) => {
    const jobToUpdate = jobs[index];
    
    const { error } = await supabase
      .from('Oferta')
      .update({ estado: newStatus })
      .eq('id_oferta', jobToUpdate.id_oferta);

    if (error) {
      console.error('Error updating job status:', error);
    } else {
      // Actualiza el estado local para reflejar el cambio
      const updatedJobs = [...jobs];
      updatedJobs[index].estado = newStatus;
      setJobs(updatedJobs);
    }
  };

  return (
    <div className="w-full bg-transparent px-6 rounded-lg font-lato">
      <div className="grid grid-cols-5 gap-4 justify-items-center text-white text-md font-regular bg-newprimarycolor px-4 py-3 rounded-lg">
        <div>Puesto</div>
        <div>Fecha</div>
        <div>Postulados</div>
        <div>Estado</div>
        <div>Acciones</div>
      </div>
      <div className="mt-2 h-96 overflow-y-scroll">
        {jobs.map((job, index) => (
          <div
            key={job.id_oferta}
            className={`grid grid-cols-5 justify-center justify-items-center gap-4 py-5 px-4  
              ${index % 2 === 0 ? 'bg-white' : 'bg-[#edf6ff]'}`} // Alterna los fondos
          >
            {/* Puesto */}
            <Link to={`/Postulados/${job.id_oferta}`}>
              <p className="text-newprimarycolor font-regular">{job.puesto}</p>
            </Link>

            {/* Fecha */}
            <div>
              <p className="text-gray-600 font-regular">{formatDate(job.fecha_publicacion)}</p>
            </div>

            {/* Postulados */}
            <div className="text-gray-600 font-regular pl-8">{job.count_postulados}</div>

            {/* Estado */}
            <div>
              <select
                value={job.estado}
                onChange={(e) => handleChangeStatus(index, e.target.value)}
                className={`px-4 py-1 text-sm border border-gray-400 rounded-full font-regular outline-none transition-all duration-300  ${
                  job.estado === 'activa' ? 'text-green-500' : 'text-red-500'
                }`}
              >
                <option value="activa" className="text-green-500">Abierto</option>
                <option value="cerrada" className="text-red-500">Cerrado</option>
              </select>
            </div>

            {/* Acciones */}
            <div>
              <Link to={`/EditJob/${job.id_oferta}`}>
                <button className="flex items-center gap-2 px-4 py-1 rounded-full border border-primarycolor text-primarycolor text-sm font-regular">
                  Editar <GrEdit />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
