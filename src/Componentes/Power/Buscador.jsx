import React, { useState, useContext, useEffect, useRef } from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import JobsContext from '../../Context/JobsContext'; // Ajusta la ruta según sea necesario

function Buscador() {
  const { searchJobs, resetSearchResults, userSearchResults } = useContext(JobsContext);
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [showKeywordSuggestions, setShowKeywordSuggestions] = useState(false);
  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);
  const keywordSuggestionsRef = useRef(null);
  const locationSuggestionsRef = useRef(null);

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
    setShowKeywordSuggestions(true);
    setShowLocationSuggestions(false);
    if (e.target.value || location) {
      searchJobs(e.target.value, location);
    } else {
      resetSearchResults();
    }
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    setShowLocationSuggestions(true);
    setShowKeywordSuggestions(false);
    if (e.target.value || keyword) {
      searchJobs(keyword, e.target.value);
    } else {
      resetSearchResults();
    }
  };

  const handleSelectKeywordSuggestion = (suggestion) => {
    setKeyword(suggestion);
    setShowKeywordSuggestions(false);
    searchJobs(suggestion, location);
  };

  const handleSelectLocationSuggestion = (suggestion) => {
    setLocation(suggestion);
    setShowLocationSuggestions(false);
    searchJobs(keyword, suggestion);
  };

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

  const uniqueSuggestions = (suggestions) => {
    const uniqueSet = new Set();
    return suggestions.filter((suggestion) => {
      if (!uniqueSet.has(suggestion)) {
        uniqueSet.add(suggestion);
        return true;
      }
      return false;
    });
  };

  const keywordSuggestions = uniqueSuggestions(userSearchResults.map((job) => job.puesto));
  const locationSuggestions = uniqueSuggestions(userSearchResults.map((job) => job.ubicacion));

  return (
    <div className="relative">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchJobs(keyword, location);
        }}
        className="relative bg-white flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300 w-full max-w-2xl mt-12"
      >
        <div className="relative flex items-center w-full border-r">
          <FaSearch className="absolute left-4 text-gray-500" />
          <input
            type="text"
            value={keyword}
            onChange={handleKeywordChange}
            placeholder="Título del empleo"
            className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white pl-12"
            onClick={() => {
              setShowKeywordSuggestions(true);
              setShowLocationSuggestions(false);
            }}
          />
        </div>
        <div className="relative flex items-center w-full border-r">
          <FaMapMarkerAlt className="absolute left-4 text-gray-500" />
          <input
            type="text"
            value={location}
            onChange={handleLocationChange}
            placeholder="Ciudad o Lugar"
            className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white pl-12"
            onClick={() => {
              setShowLocationSuggestions(true);
              setShowKeywordSuggestions(false);
            }}
          />
        </div>
        <button
          type="submit"
          className="w-full md:w-auto min-w-[150px] px-6 py-3 bg-[#0057c2] border-[#0057c2] text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70"
        >
          <div className="relative flex items-center justify-center">
            <span className="text-sm font-semibold whitespace-nowrap">Buscar empleos</span>
          </div>
        </button>
      </form>
      {showKeywordSuggestions && (
        <ul ref={keywordSuggestionsRef} className="absolute top-full left-0 z-10 bg-white border border-gray-200 rounded-b-md shadow-md w-full max-h-[200px] overflow-y-auto">
          {keywordSuggestions.map((suggestion, index) => (
            <li key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-100" onClick={() => handleSelectKeywordSuggestion(suggestion)}>
              {suggestion}
            </li>
            ))}
            </ul>
          )}
          {showLocationSuggestions && (
            <ul ref={locationSuggestionsRef} className="absolute top-full left-0 z-10 bg-white border border-gray-200 rounded-b-md shadow-md w-full max-h-[200px] overflow-y-auto">
              {locationSuggestions.map((suggestion, index) => (
                <li key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-100" onClick={() => handleSelectLocationSuggestion(suggestion)}>
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }
    
    export default Buscador;