import { useContext, useEffect, useState } from 'react';
import React from 'react';
import JobsContext from '../../Context/JobsContext';
import DeleteButton from './DeleteButton';
import AddButton from './AddButton';
import { FaRegEdit } from "react-icons/fa";
import { UserAuth } from "../../Context/AuthContext";
import { supabase } from '../../supabase/supabase.config';
import { Link, useNavigate } from 'react-router-dom';

const removeAccents = (str) => {
  return str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";
};

const fetchPendingPostuladosCount = async (jobId) => {
  const { data, error } = await supabase
    .from('Postulacion')
    .select('id_postulacion')
    .eq('id_oferta', jobId)
    .eq('estado', 'pendiente');
  
  if (error) {
    console.error('Error fetching pending postulados count:', error);
    return 0;
  }

  return data.length;
};

function JobList() {
  const { searchTerm, deleteJob } = useContext(JobsContext);
  const { user } = UserAuth();
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [pendingCounts, setPendingCounts] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const fetchJobs = async () => {
        const { data, error } = await supabase
          .from('Oferta')
          .select('id_oferta, puesto, ubicacion, fecha_publicacion, count_postulados, estado')
          .eq('user_id', user.id);

        if (error) {
          console.error('Error fetching jobs:', error);
        } else {
          console.log('Jobs fetched successfully:', data);
          // Formatear la fecha aquí
          const formattedData = data.map(job => ({
            ...job,
            fecha_publicacion: new Date(job.fecha_publicacion).toLocaleDateString('es-ES'),
          }));
          setJobs(formattedData);
        }
      };

      fetchJobs();
    }
  }, [user]);

  useEffect(() => {
    const fetchPendingCounts = async () => {
      try {
        const counts = await Promise.all(
          jobs.map(async (job) => ({
            id_oferta: job.id_oferta,
            count: await fetchPendingPostuladosCount(job.id_oferta),
          }))
        );
        
        const countsMap = counts.reduce((acc, { id_oferta, count }) => {
          acc[id_oferta] = count;
          return acc;
        }, {});

        setPendingCounts(countsMap);
      } catch (error) {
        console.error('Error fetching pending counts:', error);
      }
    };

    if (jobs.length > 0) {
      fetchPendingCounts();
    }
  }, [jobs]);

  useEffect(() => {
    const filtered = jobs.filter(job => 
      removeAccents(job.puesto.toLowerCase()).includes(removeAccents(searchTerm.toLowerCase()))
    );
    setFilteredJobs(filtered);
  }, [searchTerm, jobs]);

  const handleEdit = (jobId) => {
    navigate(`/edit-job/${jobId}`);
  };

  const handleStatusChange = async (jobId, newStatus) => {
    try {
      const { error } = await supabase
        .from('Oferta')
        .update({ estado: newStatus })
        .eq('id_oferta', jobId);

      if (error) {
        console.error('Error updating job status:', error);
      } else {
        setJobs(jobs.map(job => 
          job.id_oferta === jobId ? { ...job, estado: newStatus } : job
        ));
      }
    } catch (error) {
      console.error('Error updating job status:', error);
    }
  };
  return (
    <div className='w-full flex justify-center overflow-y-scroll font-dmsans scroll-smooth'>
      {filteredJobs.length > 0 ? (
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Puesto
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Postulados
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pendientes
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ubicación
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fecha de creación
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estado
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredJobs.map((job) => (
              <tr key={job.id_oferta}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        <Link to={`/job/${job.id_oferta}`} className="text-blue-600 hover:text-blue-800">{job.puesto}</Link>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-600">{job.count_postulados}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-600">{pendingCounts[job.id_oferta] || 0}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-600">{job.ubicacion}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-600">{job.fecha_publicacion}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select 
                    className="form-select outline-none text-gray-600 mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                    value={job.estado}
                    onChange={(e) => handleStatusChange(job.id_oferta, e.target.value)}
                  >
                    <option className='hover:bg-gray-300' value="abierto">Abierto</option>
                    <option value="cerrado">Cerrado</option>
                  </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button 
                    className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-red active:bg-blue-800 transition duration-150 ease-in-out"
                    onClick={() => handleEdit(job.id_oferta)}
                  >
                    <FaRegEdit />
                  </button>
                  {/* <DeleteButton id_oferta={job.id_oferta} /> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="h-auto justify-center mt-8">
          <center className="m-auto">
            <svg className="emoji-404" enableBackground="new 0 0 226 249.135" height="150.135" id="Layer_1" overflow="visible" version="1.1" viewBox="0 0 226 249.135" width="226" xmlSpace="preserve">
              <circle cx="113" cy="113" fill="#FFE585" r="109" />
              <line enableBackground="new" fill="none" opacity="0.29" stroke="#6E6E96" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" x1="88.866" x2="136.866" y1="245.135" y2="245.135" />
              <line enableBackground="new" fill="none" opacity="0.17" stroke="#6E6E96" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" x1="154.732" x2="168.732" y1="245.135" y2="245.135" />
              <line enableBackground="new" fill="none" opacity="0.17" stroke="#6E6E96" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" x1="69.732" x2="58.732" y1="245.135" y2="245.135" />
              <circle cx="68.732" cy="93" fill="#6E6E96" r="9" />
              <path d="M115.568,5.947c-1.026,0-2.049,0.017-3.069,0.045  c54.425,1.551,98.069,46.155,98.069,100.955c0,55.781-45.219,101-101,101c-55.781,0-101-45.219-101-101  c0-8.786,1.124-17.309,3.232-25.436c-3.393,10.536-5.232,21.771-5.232,33.436c0,60.199,48.801,109,109,109s109-48.801,109-109  S175.768,5.947,115.568,5.947z" enableBackground="new" fill="#FF9900" opacity="0.24" />
              <circle cx="156.398" cy="93" fill="#6E6E96" r="9" />
              <ellipse cx="67.732" cy="140.894" enableBackground="new" fill="#FF0000" opacity="0.18" rx="17.372" ry="8.106" />
              <ellipse cx="154.88" cy="140.894" enableBackground="new" fill="#FF0000" opacity="0.18" rx="17.371" ry="8.106" />
              <path d="M13,118.5C13,61.338,59.338,15,116.5,15c55.922,0,101.477,44.353,103.427,99.797  c0.044-1.261,0.073-2.525,0.073-3.797C220,50.802,171.199,2,111,2S2,50.802,2,111c0,50.111,33.818,92.318,79.876,105.06  C41.743,201.814,13,163.518,13,118.5z" fill="#FFEFB5" />
              <circle cx="113" cy="113" fill="none" r="109" stroke="#6E6E96" strokeWidth="8" />
            </svg>
            <div className="tracking-widest mt-4">
              <span className="text-gray-500 text-xl">Aún no has creado ninguna oferta.</span>
            </div>
          </center>
          <center className="mt-6">
            <AddButton />
          </center>
        </div>
      )}
    </div>
  );
}

export default JobList;
