import React from 'react';

function CardTrabajo2({ job, onSelectJob, isSelected }) {
  const { puesto, modalidad, ubicacion, sueldo, fecha_publicacion } = job;

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
      <button
        onClick={() => onSelectJob(job)}
        className={`w-full md:w-[90%] bg-white text-left border hover:shadow-md hover:transition-all hover:duration-200 rounded-lg p-4 overflow-hidden ${
          isSelected ? 'border-yellow-500' : 'border-gray-300'
        }`}
      >
        <div>
          <h4 className="font-semibold text-xl leading-tight " style={{ marginBottom: '6px' }}>{puesto}</h4>

          <div className="my-2 text-xs  font-semibold tracking-wide" style={{ color: 'black' }}>
            {ubicacion}
          </div>
          <div className="my-2 text-xs  font-semibold tracking-wide" style={{ color: 'black' }}>
            {modalidad}
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="text-sm" style={{ fontWeight: '600', color: '#333' }}>{calcularTiempoTranscurrido(fecha_publicacion)}</div>
            <span className="inline-block bg-gray-200 text-gray-800 py-1 px-3 text-xs rounded-full font-semibold tracking-wide" style={{ backgroundColor: '#f5f5f5', color: '#333' }}>S/. {sueldo}</span>
          </div>
        </div>
      </button>
    </div>
  );
}

export default CardTrabajo2;