import React, { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabase.config";
import { useLocation, useNavigate } from "react-router-dom";
import Buscador from "../Power/Buscador";
import HeaderPowerAuth from "./HeaderPowerAuth";
import ModalInfo from './ModalInfo'; // Importar el componente ModalInfo
import { IoIosArrowBack } from "react-icons/io";

function Share() {
  const location = useLocation();
  const navigate = useNavigate(); // Hook useNavigate para manejar la navegación
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado del modal

  useEffect(() => {
    const fetchJob = async () => {
      const jobId = new URLSearchParams(location.search).get("id");
      if (jobId) {
        const { data, error } = await supabase
          .from('Oferta')
          .select('*')
          .eq('id_oferta', jobId)
          .single();
        if (error) {
          console.error("Error fetching job", error);
        } else {
          setSelectedJob(data);
        }
      }
    };

    fetchJob();
  }, [location]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmApply = () => {
    // Aquí puedes implementar la lógica para postularse al trabajo
    // Por ahora, simplemente cerramos el modal
    setIsModalOpen(false);
  };

  if (!selectedJob) {
    return null; 
  }

  return (
    <div>
      <HeaderPowerAuth />
      <section className="w-full bg-white font-dmsans flex flex-col items-center">
        <div className="flex items-center w-full justify-center">
          <Buscador />
        </div>
      </section>
      
      <section className="p-8">
        <button 
          className="text-black mb-4 ml-24 border border-gray-400 bg-white hover:bg-gray-200 rounded-full py-2 px-4 flex items-center" 
          onClick={() => navigate('/PowerAuth')} // Redirigir a PowerAuth
        >
          <IoIosArrowBack className="mr-2" size={20} /> Volver al listado
        </button>

        <h1 className="text-3xl font-bold mb-4 ml-24">{selectedJob.puesto}</h1>
        <p className="text-black mb-6 ml-24">{selectedJob.empresa} - {selectedJob.ubicacion}</p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md ml-24">
          <h2 className="text-xl font-semibold mb-4">Descripción de la oferta</h2>
          <p className="mb-2 font-bold">Salario:</p> 
          <p className="mb-2">S/. {selectedJob.sueldo}</p>
          <p className="mb-2 font-bold">Beneficios:</p> 
          <p className="mb-2">{selectedJob.beneficios}</p>
          <p className="mb-2 font-bold">Requisitos:</p> 
          <p className="mb-2">{selectedJob.requisitos}</p>
          <p className="mb-2 font-bold">Funciones:</p> 
          <p className="mb-2">{selectedJob.funciones}</p>
          <p className="mb-2 font-bold">Horario:</p> 
          <p className="mb-2">{selectedJob.horario}</p>
          <p className="mb-2 font-bold">Fecha de publicación:</p> 
          <p className="mb-2">{selectedJob.fecha_publicacion}</p>
        </div>
        <button className="mt-4 p-2 bg-blue-600 text-white rounded-lg ml-24" onClick={handleOpenModal}>
          Postularme
        </button>
      </section>

      {/* Renderizar el modal */}
      <ModalInfo isOpen={isModalOpen} onClose={handleCloseModal} onConfirm={handleConfirmApply} />
    </div>
  );
}

export default Share; 