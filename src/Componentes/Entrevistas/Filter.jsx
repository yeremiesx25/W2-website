import React, { useState } from 'react';

function Filter({ onFilter }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div className="mb-2 mt-4">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Buscar candidatos..."
        className="p-2 border border-gray-300 rounded-lg w-full"
      />
    </div>
  );
}

export default Filter;