import React from 'react';
import { FaLocationDot } from "react-icons/fa6";

function CardTrabajo2({ job, onSelectJob }) {
    const { puesto, ubicacion, sueldo, fecha_publicacion, imagen_url } = job;

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
        <div className='w-full flex justify-center font-dmsans'>
            <button onClick={() => onSelectJob(job)} className="w-full md:w-[90%] bg-white text-left border hover:shadow-md rounded-lg overflow-hidden">
                <div className="h-44 w-full object-cover object-end" style={{ backgroundImage: `url(${imagen_url})`, backgroundSize: 'cover' }}></div>
                <div className="p-6">
                    <div className="flex items-baseline">
                        <div className="mt-2 flex items-center flex-grow">
                            <FaLocationDot style={{ color: '#FF7A01' }} />
                            <div className="ml-2 text-orange-600 text-xs uppercase font-semibold tracking-wide" style={{ color: '#FF7A01' }}>
                                {ubicacion}
                            </div>
                        </div>
                        <span className="inline-block bg-brown-600 text-white py-1 px-3 text-xs rounded-full uppercase font-semibold tracking-wide self-start md:self-center"style={{ backgroundColor: '#964A00' }}>S/. {sueldo}</span>
                    </div>
                    <h4 className="mt-4 font-bold text-lg leading-tight truncate" style={{ marginBottom: '10px' }}>{puesto}</h4>
                    <div className="text-gray-600 text-sm" style={{ color: '#964A00', fontWeight: '600' }}>{calcularTiempoTranscurrido(fecha_publicacion)}</div>
                </div>
            </button>
        </div>
    );
}

export default CardTrabajo2;