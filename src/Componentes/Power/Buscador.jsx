import React, { useState, useContext, useEffect, useRef } from 'react';
import { FaSearch, FaMapMarkerAlt,  FaSlidersH } from 'react-icons/fa';
import JobsContext from '../../Context/JobsContext';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../../supabase/supabase.config';
import { Box, TextField, Button, List, ListItem, InputAdornment, IconButton } from '@mui/material';


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
    setShowKeywordSuggestions(!!value);
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocation(value);
    setShowLocationSuggestions(!!value);
  };

  const searchJobsInSupabase = async (keyword, location) => {
    try {
      const { data: jobs, error } = await supabase
        .from('Oferta')
        .select('*')
        .ilike('puesto', `%${keyword}%`)
        .ilike('ubicacion', `%${location}%`)
        .eq('estado', 'activa');

      if (error) throw error;

      resetSearchResults(jobs);
    } catch (error) {
      console.error('Error fetching jobs:', error.message);
    }
  };

  const fetchKeywordSuggestions = async (value) => {
    try {
      const { data: keywordSuggestions, error } = await supabase
        .from('Oferta')
        .select('puesto')
        .ilike('puesto', `%${value}%`)
        .eq('estado', 'activa')
        .limit(5);

      if (error) throw error;

      setKeywordSuggestions(keywordSuggestions.map((job) => job.puesto));
    } catch (error) {
      console.error('Error fetching keyword suggestions:', error.message);
    }
  };

  const fetchLocationSuggestions = async (value) => {
    try {
      const { data: locationSuggestions, error } = await supabase
        .from('Oferta')
        .select('ubicacion')
        .ilike('ubicacion', `%${value}%`)
        .eq('estado', 'activa')
        .limit(5);

      if (error) throw error;

      setLocationSuggestions(locationSuggestions.map((job) => job.ubicacion));
    } catch (error) {
      console.error('Error fetching location suggestions:', error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <Box component="form" pt={10} onSubmit={handleSubmit} sx={{ minWidth: '80%', mx: 'auto',pb: '8px', pt: '0px' }} md={{width: '70%',}}>
        <Box display="flex" gap={1} alignItems="center" md={{width: '100%'}}>
      <Box
        display="flex"
        alignItems="center"
        borderRadius={5}
        bgcolor="#f3f4f6"
        px={2}
        py={2}
        sx={{ width: '100%' }}
      >
        <FaSearch size={20} style={{ marginRight: '10px', color: '#555' }} />
        <TextField
          fullWidth
          variant="standard"
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="Buscar por puesto"
          InputProps={{
            disableUnderline: true,
            style: { fontSize: '1rem' },
          }}
          sx={{
            backgroundColor: 'transparent',
          }}
        />
      </Box>

      <IconButton
      type='submit'
        sx={{
          backgroundColor: '#2563eb',
          borderRadius: '50%',
          padding: '10px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        <FaSearch size={20} style={{ color: 'white' }} />
      </IconButton>
    </Box>

      <AnimatePresence>
        {showKeywordSuggestions && keywordSuggestions.length > 0 && (
          <motion.div
            ref={keywordSuggestionsRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{ position: 'absolute', zIndex: 1, background: 'white', borderRadius: '4px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
          >
            <List>
              {keywordSuggestions.map((suggestion, index) => (
                <ListItem
                  key={index}
                  button
                  onClick={() => {
                    setKeyword(suggestion);
                    setShowKeywordSuggestions(false);
                  }}
                >
                  {suggestion}
                </ListItem>
              ))}
            </List>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showLocationSuggestions && locationSuggestions.length > 0 && (
          <motion.div
            ref={locationSuggestionsRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{ position: 'absolute', zIndex: 1, background: 'white', borderRadius: '4px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
          >
            <List>
              {locationSuggestions.map((suggestion, index) => (
                <ListItem
                  key={index}
                  button
                  onClick={() => {
                    setLocation(suggestion);
                    setShowLocationSuggestions(false);
                  }}
                >
                  {suggestion}
                </ListItem>
              ))}
            </List>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}

export default Buscador;