import React, { useEffect, useState, useContext } from 'react';
import { supabase } from '../../supabase/supabase.config';
import { Link } from 'react-router-dom';
import { FaUserFriends } from 'react-icons/fa';
import { FaBriefcase, FaClock, FaDollarSign } from 'react-icons/fa';
import { MdOutlineVerifiedUser } from "react-icons/md";
import { UserAuth } from '../../Context/AuthContext';
import JobsContext from '../../Context/JobsContext';

const formatDate = (isoString) => {
  const date = new Date(isoString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const JobProceso = () => {
  const { user } = UserAuth();
  const { searchTerm } = useContext(JobsContext);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      if (user) {
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

        const { data: jobsData, error: jobsError } = await supabase
          .from('Oferta')
          .select('*')
          .eq('id_reclutador', idReclutador);

        if (jobsError) {
          console.error('Error fetching jobs:', jobsError);
        } else {
          const sortedJobs = jobsData.sort((a, b) => new Date(b.fecha_publicacion) - new Date(a.fecha_publicacion));
          setJobs(sortedJobs);
        }
      }
    };

    fetchJobs();
  }, [user]);

  const filteredJobs = jobs.filter((job) =>
    job.puesto.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full bg-transparent px-6 rounded-lg font-dmsans">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div
              key={job.id_oferta}
              className="bg-white rounded-lg border shadow-sm p-6 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center justify-between w-full">
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center">
                        <img
                          src={job.empresa_img_url}
                          alt="profile"
                          className="w-12 h-12 rounded-lg border-2 border-white"
                        />
                      </div>
                  </div>
                </div>
              </div>
              <div className="mb-2">
              <Link to={`/Entrevistas/${job.id_oferta}`}>
                  <h3 className="text-lg font-medium">{job.puesto}</h3>
                </Link>
                <p className="text-sm text-gray-500">
                  Publicado: {formatDate(job.fecha_publicacion)}
                </p>
              </div>
              <div className="text-[#00a76f] font-medium text-sm mb-2 flex items-center gap-2">
                <FaUserFriends />
                <p>{job.count_postulados} candidatos</p>
              </div>
              <hr className='mb-2' />
              <div className="text-gray-500 grid grid-cols-3 gap-4 mb-4 text-sm font-light">
                <div className="flex items-center gap-2">
                  <FaBriefcase />
                  <p>{job.modalidad}</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock />
                  <p>{job.ubicacion}</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaDollarSign />
                  <p>{job.sueldo}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No jobs found</p>
        )}
      </div>
    </div>
  );
};

export default JobProceso;