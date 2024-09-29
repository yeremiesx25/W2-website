import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase/supabase.config';
import { Link } from 'react-router-dom';

// Función para formatear la fecha a dd-mm-yyyy
const formatDate = (isoString) => {
  const date = new Date(isoString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const JobList = () => {
  const [jobs, setJobs] = useState([]);
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
        .select('id_oferta, puesto, fecha_publicacion, estado')
        .eq('id_reclutador', user.id); // Filtrar por user_id

      if (error) {
        console.error('Error fetching jobs:', error);
      } else {
        const jobsWithPostulados = data.map(job => ({
          ...job,
          fecha_publicacion: formatDate(job.fecha_publicacion),
          postulados: "0 / 0"
        }));
        setJobs(jobsWithPostulados);
      }
    };

    fetchJobs();
  }, [user]); // Dependencia en user

  const handleChangeStatus = async (index, newStatus) => {
    const jobToUpdate = jobs[index];

    const { error } = await supabase
      .from('Oferta')
      .update({ estado: newStatus })
      .eq('id_oferta', jobToUpdate.id_oferta); // Asegúrate de usar el ID correcto

    if (error) {
      console.error('Error updating job status:', error);
    } else {
      const updatedJobs = [...jobs];
      updatedJobs[index].estado = newStatus;
      setJobs(updatedJobs);
    }
  };

  return (
    <div className="w-full bg-white p-8 rounded-lg font-dmsans">
      <div className="grid grid-cols-4 gap-4 text-gray-500 text-md font-semibold">
        <div>Puesto</div>
        <div>Fecha</div>
        <div>Postulados</div>
        <div>Estado</div>
      </div>
      <div className="mt-4 space-y-4 h-80 overflow-y-scroll">
        {jobs.map((job, index) => (
          <div key={job.id_oferta} className="grid grid-cols-4 gap-4 items-center border-b pb-4">
            {/* Puesto */}
            <Link to={`/Postulados/${job.id_oferta}`}>
              <p className="text-black font-font-base">{job.puesto}</p>
            </Link>

            {/* Fecha */}
            <div>
              <p className="text-black">{job.fecha_publicacion}</p>
            </div>

            {/* Postulados */}
            <div className="text-black font-font-base">{job.postulados}</div>

            {/* Estado */}
            <div>
              <select
                value={job.estado}
                onChange={(e) => handleChangeStatus(index, e.target.value)}
                className="px-2 py-1 text-sm font-bold border rounded-full"
              >
                <option value="Abierto">Abierto</option>
                <option value="Cerrado">Cerrado</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;