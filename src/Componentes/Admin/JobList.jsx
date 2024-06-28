import { useContext, useEffect, useState } from 'react';
import React from 'react';
import JobsContext from '../../Context/JobsContext';
import DeleteButton from './DeleteButton';
import { FaRegEdit } from "react-icons/fa";
import { UserAuth } from "../../Context/AuthContext";
import { supabase } from '../../supabase/supabase.config';
import { Link } from 'react-router-dom';

const removeAccents = (str) => {
  return str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";
};

function JobList() {
  const { searchTerm, userSearchResults, deleteJob } = useContext(JobsContext);
  const { user } = UserAuth();
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

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

  return (
    <div className='w-full flex justify-center h-[450px] overflow-y-scroll font-dmsans scroll-smooth'>
      {filteredJobs.length > 0 ? (
        <table className="divide-y divide-gray-200">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-x-3">
                  <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"/>
                  <button className="flex items-center gap-x-2">
                    <span>Puesto</span>
                    <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                      <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                      <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" stroke-width="0.3" />
                    </svg>
                  </button>
                </div>
              </th>
              <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                Postulados
              </th>
              <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                Ubicación
              </th>
              <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                Fecha
              </th>
              
              <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredJobs.map((job) => (
              <tr key={job.id_oferta} className='max-h-20'>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link to={`/job/${job.id_oferta}`} className="text-blue-600 hover:text-blue-800">{job.puesto}</Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-md leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">{job.count_postulados}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{job.ubicacion}</td>
                <td className="px-6 py-4 whitespace-nowrap">{job.fecha_publicacion}</td>
                
                <td className="px-6 py-4 whitespace-nowrap flex space-x-2">
                  <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
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
