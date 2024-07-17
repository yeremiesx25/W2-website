import React from "react";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineHomeWork } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

function CardTrabajo({ job, onSelectJob, isSelected }) {
  const { puesto, modalidad, ubicacion, sueldo, fecha_publicacion, empresa } =
    job;

  const calcularTiempoTranscurrido = (fecha) => {
    const fechaPublicacion = new Date(fecha);
    const fechaActual = new Date();
    const diferencia = fechaActual.getTime() - fechaPublicacion.getTime();
    const diasTranscurridos = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    if (diasTranscurridos < 1) {
      return "Publicado Ahora";
    } else if (diasTranscurridos === 1) {
      return "Publicado hace 1 día";
    } else {
      return `Publicado hace ${diasTranscurridos} días`;
    }
  };

  return (
    <div className="w-full flex justify-center font-dmsans">
      <button
        onClick={() => onSelectJob(job)}
        className={`w-full md:w-[90%] bg-white text-left border hover:shadow-md hover:transition-all hover:duration-200 rounded-lg p-4 overflow-hidden ${
          isSelected ? "border-primarycolor" : "border-gray-300"
        }`}
      >
        <div>
          <h4
            className="font-semibold text-xl leading-tight text-gray-800"
            style={{ marginBottom: "6px" }}
          >
            {puesto}
          </h4>
          <div className=" text-xs  font-regular tracking-wide text-gray-700 flex items-center py-1  rounded-full mx-1">
            {empresa}
            <MdOutlineVerifiedUser className="flex text-green-500 ml-1 text-sm mb-0.5" />
          </div>
          <div className="my-2 text-xs  font-regular tracking-wide text-gray-700 flex rounded-full mx-1">
            <IoLocationOutline className="mr-1 text-sm mb-0.5" />
            {ubicacion}
          </div>
          <div
            className={`my-2 text-xs font-regular tracking-wide text-gray-700 ${
              modalidad ? "" : ""
            } flex rounded-full mx-1`}
          >
            {modalidad && <MdOutlineHomeWork className="mr-1 text-sm mb-0.5" />}
            {modalidad}
          </div>

          <div className="flex justify-between items-center mt-2">
            <div className="text-sm font-regular text-gray-600">
              {calcularTiempoTranscurrido(fecha_publicacion)}
            </div>
            <span
              className="inline-block bg-gray-200 text-gray-800 py-1 px-3 text-xs rounded-full font-regular tracking-wide"
              style={{ backgroundColor: "#f5f5f5", color: "#333" }}
            >
              S/. {sueldo}
            </span>
          </div>
        </div>
      </button>
    </div>
  );
}

export default CardTrabajo;
