import React from 'react';
import { BsBarChartLine } from 'react-icons/bs';
import AddButton from './AddButton'

function BtnContainer() {
  return (
    <div className="flex justify-between items-center bg-gray-100 py-4 ">
      <div className="flex space-x-8">
      <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm w-48">
      <div>
        <p className="text-sm text-[#A3AED0]">Mis ofertas</p>
        <p className="text-3xl font-bold text-[#1B2559]">10</p>
      </div>
      <div className="text-primarycolor">
        <BsBarChartLine size={32} />
      </div>
    </div>
    <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm w-48">
      <div>
        <p className="text-sm text-[#A3AED0]">Mis ofertas</p>
        <p className="text-3xl font-bold text-[#1B2559]">10</p>
      </div>
      <div className="text-primarycolor">
        <BsBarChartLine size={32} />
      </div>
    </div>
    <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm w-48">
      <div>
        <p className="text-sm text-[#A3AED0]">Mis ofertas</p>
        <p className="text-3xl font-bold text-[#1B2559]">10</p>
      </div>
      <div className="text-primarycolor">
        <BsBarChartLine size={32} />
      </div>
    </div>
      </div>
      <AddButton />
    </div>
  );
}

export default BtnContainer;
