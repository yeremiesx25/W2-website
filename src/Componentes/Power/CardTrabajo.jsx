import React, { useState } from 'react';
import startup from '../../assets/STARTUP TALENT.png';

function CardTrabajo({puesto,sede,sueldo}) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button
        className='w-[320px] sm:w-[550px] md:w-1/2 h-32 rounded-lg bg-white border-2 border-[#D6DDEB] mb-4 font-dmsans flex justify-between items-center px-4'
        onClick={handleModalOpen}
      >
        <div className='flex justify-start'>
          
          <div className='flex flex-col items-start'>
            <h4 className='font-bold text-primarytext'>{puesto}</h4>
            <h5 className='text-[#7C8493] font-bold mb-4'>{sede}</h5>
            <div>
              <span className='w-40 h-8 border border-[#EFFAF7] bg-[#EFFAF7] rounded-xl px-4 text-[#56CDAD] mr-1'>Planilla</span>
              <span className='w-40 h-8 border border-amb er-400 rounded-xl px-4 text-amber-400'>{sueldo}</span>
            </div>
            
          </div>
        </div>
        <div className='w-16 h-16 mr-4'>
            <img className='w-full h-full' src={startup} alt="" />
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
    </>
  );
}

export default CardTrabajo;
