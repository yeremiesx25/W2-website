import React from 'react';

function BtnContainer() {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow">
      <div className="flex space-x-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Mis Ofertas</h2>
          <p>10</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold">Aplicantes</h2>
          <p>1111</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold">Ofertas Abiertas</h2>
          <p>5</p>
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Buscar oferta"
          className="border rounded px-4 py-2"
        />
      </div>
      <button className="bg-blue-600 text-white py-2 px-6 rounded-lg">
        Nueva Oferta +
      </button>
    </div>
  );
}

export default BtnContainer;
