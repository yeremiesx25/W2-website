import React from 'react';

const JobList = () => {
  const jobs = [
    {
      id: 1,
      puesto: "Auxiliar de Reparto",
      area: "Logística",
      fecha: "Septiembre 02, 2024",
      tiempo: "Hace 3 horas",
      postulados: "2 / 10",
      estado: "Abierto",
    },
    {
      id: 2,
      puesto: "Auxiliar de Reparto",
      area: "Logística",
      fecha: "Septiembre 02, 2024",
      tiempo: "Hace 3 horas",
      postulados: "2 / 10",
      estado: "Cerrado",
    },
    {
      id: 3,
      puesto: "Auxiliar de Reparto",
      area: "Logística",
      fecha: "Septiembre 02, 2024",
      tiempo: "Hace 3 horas",
      postulados: "2 / 10",
      estado: "Abierto",
    },
    // Agregar más trabajos según sea necesario
  ];

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-lg font-dmsans">
      <div className="grid grid-cols-4 gap-4 text-gray-500 text-md font-semibold">
        <div>Puesto</div>
        <div>Fecha</div>
        <div>Postulados</div>
        <div>Estado</div>
      </div>
      <div className="mt-4 space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="grid grid-cols-4 gap-4 items-center border-b pb-4">
            {/* Puesto */}
            <div>
              <p className="text-black font-font-base">{job.puesto}</p>
              <p className="text-gray-400">{job.area}</p>
            </div>

            {/* Fecha */}
            <div>
              <p className="text-black">{job.fecha}</p>
              <p className="text-gray-400">{job.tiempo}</p>
            </div>

            {/* Postulados */}
            <div className="text-black font-font-base">{job.postulados}</div>

            {/* Estado */}
            <div>
              <span className={`px-2 py-1 text-sm font-bold rounded-full ${job.estado === "Abierto" ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                {job.estado}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
