import { useContext, useEffect, useState } from 'react';
import React from 'react';
import JobsContext from '../../Context/JobsContext';
import DeleteButton from './DeleteButton';
import { FaRegEdit } from "react-icons/fa";
import { UserAuth } from "../../Context/AuthContext";
import { supabase } from '../../supabase/supabase.config';
import { Link, useNavigate } from 'react-router-dom';

const removeAccents = (str) => {
  return str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";
};

function JobList() {
  const { searchTerm, userSearchResults, deleteJob } = useContext(JobsContext);
  const { user } = UserAuth();
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const fetchJobs = async () => {
        const { data, error } = await supabase
          .from('Oferta')
          .select('id_oferta, puesto, ubicacion, fecha_publicacion, count_postulados')
          .eq('user_id', user.id);
  
        if (error) {
          console.error('Error fetching jobs:', error);
        } else {
          console.log('Jobs fetched successfully:', data);
          setJobs(data);
        }
      };
  
      fetchJobs();
    }
  }, [user]);

  useEffect(() => {
    const filtered = jobs.filter(job => 
      removeAccents(job.puesto.toLowerCase()).includes(removeAccents(searchTerm.toLowerCase()))
    );
    setFilteredJobs(filtered);
  }, [searchTerm, jobs]);

  const handleEdit = (jobId) => {
    navigate(`/edit-job/${jobId}`);
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
              Postulados
            </th>
            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ubicación
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fecha de creación
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
                <div className="text-sm text-gray-600">{job.ubicacion}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-600">{job.fecha_publicacion}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
              <button 
                    className="px-2 py-2  bg-[#eaf3fb] rounded-full cursor-pointer hover:bg-blue-100 text-primarycolor"
                    onClick={() => handleEdit(job.id_oferta)}
                  >
                    <FaRegEdit />
                  </button>
                  <DeleteButton id_oferta={job.id_oferta} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      ) : (
        <p>No hay ofertas que coincidan</p>
      )}
    </div>
  );
}

export default JobList;