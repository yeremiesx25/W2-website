import React, { createContext, useState, useEffect } from 'react';
import { supabase } from '../supabase/supabase.config'; // Ajusta la ruta según la ubicación de tu archivo

const JobsContext = createContext();

const removeAccents = (str) => {
  return str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";
};

export const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      const { data, error } = await supabase
        .from('Oferta')
        .select('*');

      if (error) {
        console.error('Error fetching jobs:', error);
      } else {
        const validJobs = data.filter((job) => job.puesto !== undefined && job.puesto !== null);
        setJobs(validJobs);
      }
    };

    fetchJobs();
  }, []);

  const deleteJob = async (id_oferta) => {
    try {
      const { error } = await supabase
        .from('Oferta')
        .delete()
        .eq('id_oferta', id_oferta);

      if (error) {
        throw error;
      }

      setJobs(jobs.filter((job) => job.id_oferta !== id_oferta));
    } catch (error) {
      console.error('Error deleting job:', error.message);
    }
  };

  const filteredJobs = jobs.filter((job) => 
    removeAccents(job.puesto?.toLowerCase()).includes(removeAccents(searchTerm.toLowerCase())) ||
    removeAccents(job.ubicacion?.toLowerCase()).includes(removeAccents(searchTerm.toLowerCase()))
  );

  return (
    <JobsContext.Provider value={{ jobs: filteredJobs, setJobs, deleteJob, searchTerm, setSearchTerm }}>
      {children}
    </JobsContext.Provider>
  );
};

export default JobsContext;
