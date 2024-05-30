import React, { useState } from 'react';

function CardTrabajo({ jobTitle, company, location, salary, companyLogo, requirements, timeActive, onClick, imageUrl }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className='w-full flex justify-center font-dmsans'>
      <button onClick={handleModalOpen} className="w-full md:w-[90%] bg-white text-left border hover:shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <div className="flex items-center mb-2">
            <img className="w-14 h-14 rounded-full mr-4" src={companyLogo} alt={company} />
            <div>
              <div className="font-bold text-xl">{jobTitle}</div>
              <p className="text-gray-700">{company}</p>
            </div>
          </div>
          <p className="text-gray-700">{location}</p>
          <p className="text-gray-700 mt-2"><span className="font-bold">Sueldo:</span> {salary}</p>
        </div>
        <div className="px-6 py-4 bg-amber-400">
          <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{timeActive} activo</span>
        </div>
      </button>
      
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-4 md:p-8 rounded-lg z-50 w-11/12 md:w-2/3 lg:w-1/2 max-w-xl overflow-y-auto">
            <img className='w-full h-auto mb-4 rounded' src={imageUrl} alt="Job Details" />
            <div className='flex w-full justify-around mt-4'>
              <button onClick={handleModalClose} className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">Cerrar</button>
              <button onClick={handleModalClose} className="bg-primarytext text-white px-4 py-2 rounded-lg font-semibold">Postular</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardTrabajo;