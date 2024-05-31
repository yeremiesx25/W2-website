import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase/supabase.config'; // Ajusta la ruta según la ubicación de tu archivo


function JobsList() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      const { data, error } = await supabase
        .from('pruebas')
        .select('*');

      if (error) {
        console.error('Error fetching jobs:', error);
      } else {
        setJobs(data);
      }
    };

    fetchJobs();
  }, []);

  const handleDelete = async (id) => {
    const { error } = await supabase
      .from('pruebas')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting job:', error);
    } else {
      // Eliminar el trabajo del estado local
      setJobs(jobs.filter((job) => job.id !== id));
    }
  };

  const filteredJobs = jobs.filter((job) =>
    job.puesto.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mx-auto w-96 mt-32">
      <h2 className="text-2xl mb-4">Tienes <strong>{jobs.length}</strong> ofertas laborales</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar por puesto"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-400 p-2 rounded"
        />
      </div>
      <div className="mb-2 flex justify-around items-center font-bold">
        <div>Puesto</div>
        <div className="text-right">Fecha</div>
      </div>
      <ul className="list-disc pl-5">
        {filteredJobs.map((job) => (
          <li key={job.id} className="mb-2 flex justify-between items-center">
            <div className='flex items-center w-full justify-between'>
              <div className="w-2/3">{job.puesto}</div>
              <div className="w-1/3 text-right text-gray-500 text-sm">{new Date(job.created_at).toLocaleDateString()}</div>
            </div>
            <button 
              onClick={() => handleDelete(job.id)} 
              className="ml-4 bg-red-500 text-white p-2 rounded"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobsList;
