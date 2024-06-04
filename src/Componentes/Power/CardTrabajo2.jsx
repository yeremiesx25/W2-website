import React from 'react';
import { FaLocationDot } from "react-icons/fa6";

function CardTrabajo2({ job, onSelectJob }) {
    const { puesto, ubicacion, sueldo, fecha_publicacion, imagen_url } = job;

    return (
        <div className='w-full flex justify-center font-dmsans'>
            <button onClick={() => onSelectJob(job)} className="w-full md:w-[90%] bg-white text-left border hover:shadow-md rounded-lg overflow-hidden">
                <div className="h-44 w-full object-cover object-end" style={{ backgroundImage: `url(${imagen_url})`, backgroundSize: 'cover' }}></div>
                <div className="p-6">
                    <div className="flex items-baseline">
                        <div className="mt-2 flex items-center flex-grow">
                            <FaLocationDot className="text-teal-600 " />
                            <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                                {ubicacion}
                            </div>
                        </div>
                        <span className="inline-block bg-teal-200 text-teal-800 py-1 px-3 text-xs rounded-full uppercase font-semibold tracking-wide self-start md:self-center">{sueldo}</span>
                    </div>
                    <h4 className="mt-2 font-semibold text-lg leading-tight truncate">{puesto}</h4>
                    <div className="text-gray-600 text-sm">{fecha_publicacion}</div>
                </div>
            </button>
        </div>
    );
}

export default CardTrabajo2;