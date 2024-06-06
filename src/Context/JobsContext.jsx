import React, { createContext, useState, useEffect } from 'react';
import { supabase } from '../supabase/supabase.config'; // Ajusta la ruta según la ubicación de tu archivo

const JobsContext = createContext();

const removeAccents = (str) => {
  return str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";
};

export const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [userSearchResults, setUserSearchResults] = useState([]);
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
        setUserSearchResults(validJobs); // Inicialmente mostrar todos los trabajos
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    const filteredJobs = jobs.filter(job => 
      removeAccents(job.puesto.toLowerCase()).includes(removeAccents(searchTerm.toLowerCase()))
    );
    setUserSearchResults(filteredJobs);
  }, [searchTerm, jobs]);

  const searchJobs = async (keyword, location) => {
    const { data, error } = await supabase
      .from('Oferta')
      .select('*')
      .ilike('puesto', `%${keyword}%`)
      .ilike('ubicacion', `%${location}%`);

    if (error) {
      console.error('Error searching jobs:', error);
    } else {
      setUserSearchResults(data);
    }
  };

  const resetSearchResults = () => {
    setUserSearchResults(jobs); // Restablecer a todos los trabajos
  };

  return (
    <JobsContext.Provider value={{ jobs, setJobs, searchJobs, userSearchResults, resetSearchResults, searchTerm, setSearchTerm }}>
      {children}
    </JobsContext.Provider>
  );
};

export default JobsContext;
