import React from "react";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { BsBookmark, BsArrowRightCircle } from "react-icons/bs";

function CardTrabajo2({ job, onSelectJob, isSelected }) {
  const { puesto, modalidad, ubicacion, empresa, descripcion, reclutador } = job;

  return (
    <div className="w-full flex justify-center font-dmsans">
      <button
        onClick={() => onSelectJob(job)}
        className={`w-full md:w-[90%] text-left border hover:shadow-sm hover:transition-all hover:duration-200 rounded-lg p-6 overflow-hidden flex justify-between items-center ${
          isSelected ? "bg-gray-200" : "bg-white"
        }`}
      >
        <div className="flex flex-col space-y-2 w-full">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-2">
              <div className="bg-primarycolor p-2 rounded-lg">
                <MdOutlineVerifiedUser className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-800">{empresa}</h3>
                <p className="text-xs text-gray-500">{reclutador}</p>
              </div>
            </div>
          </div>
          <h4 className="font-bold text-lg leading-tight text-gray-800">{puesto}</h4>
          <p className="text-sm text-gray-600">
            {descripcion} <span className="text-blue-500">Ver más</span>
          </p>
          <div className="flex space-x-2">
            {modalidad && (
              <span className="bg-gray-200 text-gray-800 py-1 px-3 text-xs rounded-full font-regular tracking-wide">
                {modalidad}
              </span>
            )}
            <span className="bg-gray-200 text-gray-800 py-1 px-3 text-xs rounded-full font-regular tracking-wide">
              {ubicacion}
            </span>
          </div>
        </div>
        <BsArrowRightCircle
          className={`text-3xl self-end ${
            isSelected ? "text-blue-500" : "text-gray-500"
          }`}
        />
      </button>
    </div>
  );
}

export default CardTrabajo2;