import React, { useEffect, useState, useContext } from 'react';
import { supabase } from '../../supabase/supabase.config';
import { Link } from 'react-router-dom';
import { GrEdit } from "react-icons/gr";
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
        .eq('id_reclutador', user.id) // Filtrar por id_reclutador
        .order('fecha_publicacion', { ascending: false }); // Ordenar por fecha_publicacion de más reciente a más antigua

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

  // Función para manejar el cambio de estado de la oferta
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

  // Configurar la suscripción en Supabase para actualizar los postulados en tiempo real
  useEffect(() => {
    const subscription = supabase
      .channel('public:Oferta')
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'Oferta' },
        (payload) => {
          const updatedJob = payload.new;
          // Actualiza el trabajo en el estado jobs con los nuevos datos
          setJobs((prevJobs) => 
            prevJobs.map((job) => 
              job.id_oferta === updatedJob.id_oferta 
                ? { ...job, postulados: updatedJob.count_postulados } 
                : job
            )
          );
        }
      )
      .subscribe();

    // Cleanup: se debe cancelar la suscripción cuando se desmonte el componente
    return () => {
      supabase.removeChannel(subscription);
    };
  }, [setJobs]);

  return (
    <div className="w-full bg-transparent px-6  rounded-lg font-dmsans">
      <div className="grid grid-cols-5 gap-4 text-white text-md font-regular bg-newprimarycolor px-4 py-3 rounded-lg">
        <div>Puesto</div>
        <div>Fecha</div>
        <div>Postulados</div>
        <div>Estado</div>
        <div>Acciones</div>
      </div>
      <div className="mt-2 h-96 overflow-y-scroll">
        {userSearchResults.map((job, index) => (
          <div
            key={job.id_oferta}
            className={`grid grid-cols-5 gap-4 items-center py-5 px-4  
              ${index % 2 === 0 ? 'bg-white' : 'bg-[#edf6ff]'}`} // Alterna los fondos
          >
            {/* Puesto */}
            <Link to={`/Postulados/${job.id_oferta}`}>
              <p className="text-newprimarycolor font-light">{job.puesto}</p>
            </Link>

            {/* Fecha */}
            <div>
              <p className="text-gray-600 font-light">{job.fecha_publicacion}</p>
            </div>

            {/* Postulados */}
            <div className="text-gray-600 font-light">{job.postulados}</div>

            {/* Estado */}
            <div>
              <select
                value={job.estado}
                onChange={(e) => handleChangeStatus(index, e.target.value)}
                className={`px-4 py-1 text-sm border border-gray-400 rounded-full font-light outline-none transition-all duration-300  ${
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
                <button className="flex items-center gap-2 px-4 py-1 rounded-full border border-primarycolor text-primarycolor text-sm font-light">
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
