import React from 'react';


function CardOfertaPower() {
  return (
    <div className="max-w-sm bg-white text-gray-600 rounded-lg shadow-md overflow-hidden p-6 hover:bg-primarygradient hover:text-white group transition duration-200 cursor-pointer">
      <div className="p-4 flex items-center">
        <div className="flex-shrink-0">
          <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center">
            
          </div>
        </div>
        <div className="ml-4">
          <div className="text-lg font-medium">Auxiliar de Reparto</div>
          <div>Ransa</div>
        </div>
      </div>
      <div className="px-4 pb-4">
        <div className='text-sm'>Callao</div>
        <div className='text-sm'>Presencial</div>
      </div>
      <div className="px-4 pb-4 flex items-center justify-between">
        <div className="text-gray-500 bg-gray-200 text-sm rounded-full px-3 py-1 group-hover:bg-gray-300 group-hover:text-gray-800">
          Hace 2 días
        </div>
        <div className="text-sm font-medium">S/.1,200 - S/.1,500</div>
      </div>
    </div>
  );
}

export default CardOfertaPower;
