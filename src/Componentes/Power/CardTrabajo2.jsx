import React, { useState } from 'react';

function CardTrabajo2({ jobTitle, company, location, salary, companyLogo,logo, requirements, timeActive, onClick, imageUrl, wspUrl }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    
    setModalOpen(false);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className='w-full flex justify-center font-dmsans'>
      <button onClick={handleModalOpen} className="w-full md:w-[90%] bg-white text-left border hover:shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <div className="flex items-center mb-2">

              <div className="font-semibold text-xl">{jobTitle}</div>
</div>
        </div>
        <div className="px-6 py-4 bg-amber-400">

        </div>
      </button>
            </div>
          
    
      )};
  
export default CardTrabajo2;