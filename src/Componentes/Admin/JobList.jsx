import { useContext } from 'react';
import React from 'react';
import JobsContext from '../../Context/JobsContext';
import DeleteButton from './DeleteButton';
import { FaRegEdit } from "react-icons/fa";

function JobList() {
  const { jobs } = useContext(JobsContext);

  return (
    <div className='w-[90%] flex justify-center h-[700px] overflow-y-scroll  font-dmsans'>
      {jobs.length > 0 ? (
        <table className="divide-y divide-gray-200">
          <thead className=''>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Puesto</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ubicación</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {jobs.map((job) => (
              <tr key={job.id}>
                <td className="px-6 py-4 whitespace-nowrap">{job.puesto}</td>
                <td className="px-6 py-4 whitespace-nowrap">{job.ubicacion}</td>
                <td className="px-6 py-4 whitespace-nowrap">{job.fecha_publicacion}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Activo</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out"><FaRegEdit /></button>
                  <DeleteButton id_oferta={job.id_oferta} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No jobs available</p>
      )}
    </div>
  );
}

export default JobList;
