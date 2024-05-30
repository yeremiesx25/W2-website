import React, { useState } from 'react';
import startup from '../../assets/STARTUP TALENT.png';
import { FaMapMarkerAlt } from 'react-icons/fa';


function CardTrabajo({ jobTitle, company, location, salary, companyLogo, requirements, timeActive, onClick}) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className='w-full flex justify-center font-dmsans'>
      <button onClick={handleModalOpen}  className="w-full md:w-[90%] bg-white text-left border hover:shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-4">
                <div className="flex items-center mb-2">
                    <img className="w-10 h-10 rounded-full mr-4" src={companyLogo} alt={company} />
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
          <div className="bg-white p-8 rounded-lg z-50">
            <h2 className="text-2xl font-bold mb-4">Detalles del Trabajo</h2>
            <p>Descripción del trabajo...</p>
            <img className='w-96' src="https://scontent.fpio3-1.fna.fbcdn.net/v/t39.30808-6/430204572_937010811761844_8302191555907491683_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEVAeVBIFRsqcYmqMPaRMw46roinPyg0k3quiKc_KDSTb_nOt3Pw3sxilVdoaFH71vsNexe7SSyj_bCdSgOzr_2&_nc_ohc=bl5ZxZAY3nkQ7kNvgG2guid&_nc_ht=scontent.fpio3-1.fna&oh=00_AYAz-FTQhrckEIzmS6-EPC8DAEm7bFkMJevxhJzyDk3-IA&oe=6644604C" alt="" />
            <div className='flex w-full justify-around'>
            <button onClick={handleModalClose} className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">Cerrar</button>
            <button onClick={handleModalClose} className="mt-4 bg-primarytext text-white px-4 py-2 rounded-lg font-semibold">Postular</button>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
}

export default CardTrabajo;
