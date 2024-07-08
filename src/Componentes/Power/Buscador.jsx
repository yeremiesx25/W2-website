import React, { useState, useContext, useEffect, useRef } from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import JobsContext from '../../Context/JobsContext'; // Ajusta la ruta según sea necesario

function Buscador() {
  const { searchJobs, resetSearchResults, userSearchResults } = useContext(JobsContext);
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
    setShowKeywordSuggestions(true);
    updateKeywordSuggestions(value);
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocation(value);
    setShowLocationSuggestions(true);
    updateLocationSuggestions(value);
  };

  const updateKeywordSuggestions = (value) => {
    const suggestions = uniqueSuggestions(userSearchResults.map((job) => job.puesto)).filter((suggestion) => suggestion.toLowerCase().includes(value.toLowerCase()));
    setKeywordSuggestions(suggestions);
  };

  const updateLocationSuggestions = (value) => {
    const suggestions = uniqueSuggestions(userSearchResults.map((job) => job.ubicacion)).filter((suggestion) => suggestion.toLowerCase().includes(value.toLowerCase()));
    setLocationSuggestions(suggestions);
  };

  const handleSelectKeywordSuggestion = (suggestion) => {
    setKeyword(suggestion);
    setShowKeywordSuggestions(false);
  };

  const handleSelectLocationSuggestion = (suggestion) => {
    setLocation(suggestion);
    setShowLocationSuggestions(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchJobs(keyword, location);
    setShowKeywordSuggestions(false);
    setShowLocationSuggestions(false);
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

  return (
    <div className=" w-[80%] mx-auto">
      <form
        onSubmit={handleSubmit}
        className=" bg-white flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-3xl gap-2 shadow-2xl  w-full mt-12"
      >
        <div className=" flex items-center w-full border-r">
          <FaSearch className="ml-4 text-gray-500" />
          <input
            type="text"
            value={keyword}
            onChange={handleKeywordChange}
            placeholder="Título del empleo"
            className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white pl-2"
            onClick={() => {
              setShowKeywordSuggestions(true);
              setShowLocationSuggestions(false);
            }}
          />
        </div>
        <div className="flex items-center w-full border-r">
          <FaMapMarkerAlt className=" text-gray-500" />
          <input
            type="text"
            value={location}
            onChange={handleLocationChange}
            placeholder="Ciudad o Lugar"
            className=" py-2 w-full rounded-md flex-1 outline-none bg-white pl-2"
            onClick={() => {
              setShowLocationSuggestions(true);
              setShowKeywordSuggestions(false);
            }}
          />
        </div>
        <button
          type="submit"
          className="w-12 md:w-auto min-w-[48px] h-12 bg-[#FFE946]  text-white rounded-full"
        >
          <div className="flex items-center justify-center">
            <span className="text-sm font-semibold whitespace-nowrap"><FaSearch className=" text-[#0057c2]" /></span>
          </div>
        </button>
      </form>
      {showKeywordSuggestions && (
        <ul ref={keywordSuggestionsRef} className=" bg-white border border-gray-200 rounded-b-md shadow-md w-full max-h-[200px] overflow-y-auto">
          {keywordSuggestions.map((suggestion, index) => (
            <li key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-100" onClick={() => handleSelectKeywordSuggestion(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      {showLocationSuggestions && (
        <ul ref={locationSuggestionsRef} className=" bg-white border border-gray-200 rounded-b-md shadow-md w-full max-h-[200px] overflow-y-auto">
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