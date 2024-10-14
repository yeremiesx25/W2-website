import React, { useState, useContext, useEffect, useRef } from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import JobsContext from '../../Context/JobsContext'; // Ajusta la ruta según sea necesario
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../../supabase/supabase.config'; // Importa tu cliente de Supabase

function Buscador() {
  const { resetSearchResults, searchJobs } = useContext(JobsContext);
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [showKeywordSuggestions, setShowKeywordSuggestions] = useState(false);
  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);
  const [keywordSuggestions, setKeywordSuggestions] = useState([]);
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const keywordSuggestionsRef = useRef(null);
  const locationSuggestionsRef = useRef(null);
  

  const handleKeywordChange = (e) => {
    const value = e.target.value;
    setKeyword(value);
    if (value) {
      setShowKeywordSuggestions(true);
    } else {
      setShowKeywordSuggestions(false);
      setKeywordSuggestions([]);
    }
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocation(value);
    if (value) {
      setShowLocationSuggestions(true);
    } else {
      setShowLocationSuggestions(false);
      setLocationSuggestions([]);
    }
  };

  // Realiza la búsqueda de trabajos en Supabase donde estado = 'activa'
  const searchJobsInSupabase = async (keyword, location) => {
    try {
      const { data: jobs, error } = await supabase
        .from('Oferta')
        .select('*')
        .ilike('puesto', `%${keyword}%`) // Búsqueda por coincidencia en el título del empleo
        .ilike('ubicacion', `%${location}%`) // Búsqueda por coincidencia en la ubicación
        .eq('estado', 'activa'); // Solo trabajos con estado 'activa'

      if (error) throw error;

      resetSearchResults(jobs); // Actualiza los resultados en el contexto
    } catch (error) {
      console.error('Error fetching jobs:', error.message);
    }
  };

  // Actualiza sugerencias de palabras clave en Supabase
  const fetchKeywordSuggestions = async (value) => {
    try {
      const { data: keywordSuggestions, error } = await supabase
        .from('Oferta')
        .select('puesto') // Selecciona solo el campo del título
        .ilike('puesto', `%${value}%`) // Coincidencias parciales
        .eq('estado', 'activa')
        .limit(5); // Limita la cantidad de sugerencias

      if (error) throw error;

      setKeywordSuggestions(keywordSuggestions.map((job) => job.puesto)); // Solo extrae los títulos de los trabajos
    } catch (error) {
      console.error('Error fetching keyword suggestions:', error.message);
    }
  };

  // Actualiza sugerencias de ubicación en Supabase
  const fetchLocationSuggestions = async (value) => {
    try {
      const { data: locationSuggestions, error } = await supabase
        .from('Oferta')
        .select('ubicacion') // Selecciona solo el campo de la ubicación
        .ilike('ubicacion', `%${value}%`) // Coincidencias parciales
        .eq('estado', 'activa')
        .limit(5); // Limita la cantidad de sugerencias

      if (error) throw error;

      setLocationSuggestions(locationSuggestions.map((job) => job.ubicacion)); // Solo extrae las ubicaciones
    } catch (error) {
      console.error('Error fetching location suggestions:', error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Llama a la función de búsqueda en Supabase
    searchJobs(keyword, location);
    setShowKeywordSuggestions(false);
    setShowLocationSuggestions(false);
  };

  useEffect(() => {
    if (keyword) {
      fetchKeywordSuggestions(keyword);
    }
  }, [keyword]);

  useEffect(() => {
    if (location) {
      fetchLocationSuggestions(location);
    }
  }, [location]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (keywordSuggestionsRef.current && !keywordSuggestionsRef.current.contains(event.target)) {
        setShowKeywordSuggestions(false);
      }
      if (locationSuggestionsRef.current && !locationSuggestionsRef.current.contains(event.target)) {
        setShowLocationSuggestions(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="md:w-[80%] md:mx-auto w-full mx-2">
      <form
        onSubmit={handleSubmit}
        className="md:shadow-[0_4px_20px_rgba(0,0,0,0.1)] md:border flex flex-col md:flex-row items-center justify-center  py-2 px-2 md:rounded-lg rounded-lg  w-full bg-white"
      >
        <div className="flex items-center w-full md:border-0 border border-gray-600 rounded-full pr-6 md:pr-0 shadow-md md:shadow-none mb-2 md:mb-0">
          <FaSearch className="ml-4 text-primarycolor " />
          <input
            type="text"
            value={keyword}
            onChange={handleKeywordChange}
            placeholder="Título del empleo"
            className="px-6 py-4 w-full outline-none bg-white pl-2 placeholder:text-gray-600"
            onClick={() => {
              setShowKeywordSuggestions(true);
              setShowLocationSuggestions(false);
            }}
          />
        </div>
        <div className="md:flex items-center w-full border-r hidden">
          <FaMapMarkerAlt className="text-primarycolor" />
          <input
            type="text"
            value={location}
            onChange={handleLocationChange}
            placeholder="Ciudad o Lugar"
            className="py-2 w-full rounded-md flex-1 outline-none bg-white pl-2 placeholder:text-gray-600"
            onClick={() => {
              setShowLocationSuggestions(true);
              setShowKeywordSuggestions(false);
            }}
          />
        </div>
        <button
          type="submit"
          className="w-full md:w-auto min-w-[48px] h-12 bg-newprimarycolor text-white rounded-full flex justify-center items-center gap-4"
        >
          <span className="block md:hidden text-white font-semibold text-lg">Buscar</span>
          <div className="flex items-center justify-center">
            <span className="text-sm font-semibold whitespace-nowrap">
              <FaSearch className="text-white" />
            </span>
          </div>
        </button>
      </form>

      <AnimatePresence>
        {showKeywordSuggestions && keywordSuggestions.length > 0 && (
          <motion.ul
            ref={keywordSuggestionsRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-white border border-gray-200 rounded-b-md shadow-md w-96 max-h-[200px] overflow-y-auto absolute"
          >
            {keywordSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setKeyword(suggestion);
                  setShowKeywordSuggestions(false);
                }}
              >
                {suggestion}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showLocationSuggestions && locationSuggestions.length > 0 && (
          <motion.ul
            ref={locationSuggestionsRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-white border border-gray-200 rounded-b-md shadow-md w-full max-h-[200px] overflow-y-auto"
          >
            {locationSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setLocation(suggestion);
                  setShowLocationSuggestions(false);
                }}
              >
                {suggestion}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Buscador;
