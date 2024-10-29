import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase/supabase.config';
import { MdDelete } from "react-icons/md";
import HeaderAdmin from '../Admin/HeaderAdmin';
import MenuAdmin from '../Admin/MenuAdmin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Proceso() {
  const [user, setUser] = useState(null);
  const [ofertas, setOfertas] = useState([]);
  const [filteredOfertas, setFilteredOfertas] = useState([]);
  const [selectedOferta, setSelectedOferta] = useState(null);
  const [stages, setStages] = useState([{ etapa: '', recomendacion: '', modalidad: '', plataforma: '' }]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const fetchOfertas = async () => {
      if (!user) return;

      const { data: ofertasData, error: ofertasError } = await supabase
        .from('Oferta')
        .select('*')
        .eq('id_reclutador', user.id);

      if (ofertasError) {
        console.error('Error fetching ofertas:', ofertasError);
        return;
      }

      const { data: programasData, error: programasError } = await supabase
        .from('Programa')
        .select('id_oferta');

      if (programasError) {
        console.error('Error fetching programas:', programasError);
        return;
      }

      const usedOfertaIds = programasData.map(programa => programa.id_oferta);

      const availableOfertas = ofertasData.filter(oferta => !usedOfertaIds.includes(oferta.id_oferta));

      setOfertas(ofertasData);
      setFilteredOfertas(availableOfertas);
      setLoading(false);
    };

    fetchOfertas();
  }, [user]);

  const handleAddStage = () => {
    if (stages.length < 4) {
      setStages([...stages, { etapa: '', recomendacion: '', modalidad: '', plataforma: '' }]);
    }
  };

  const handleDeleteStage = (index) => {
    const newStages = stages.filter((_, i) => i !== index);
    setStages(newStages);
  };

  const handleStageChange = (index, field, value) => {
    const newStages = [...stages];
    newStages[index][field] = value;
    setStages(newStages);
  };

  const handleOfertaSelect = (event) => {
    const selectedId = event.target.value;
    const oferta = ofertas.find((oferta) => oferta.id_oferta === parseInt(selectedId));
    setSelectedOferta(oferta || null);
  };

  const handleSubmit = async () => {
    if (!selectedOferta) return;

    const data = {
      id_reclutador: user.id,
      id_oferta: selectedOferta.id_oferta,
      proceso: selectedOferta.puesto,
      empresa: selectedOferta.empresa,
      lugar: selectedOferta.ubicacion,
      fecha_public: new Date().toISOString(),
    };

    stages.forEach((stage, index) => {
      const etapaIndex = index + 1;
      data[`etapa_${etapaIndex}`] = stage.etapa;
      data[`recomendacion_${etapaIndex}`] = stage.recomendacion;
      data[`modalidad_${etapaIndex}`] = stage.modalidad;
      data[`plataforma_${etapaIndex}`] = stage.plataforma;
    });

    const { error } = await supabase.from('Programa').insert([data]);

    if (error) {
      console.error('Error saving process:', error);
    } else {
      toast.success('Proceso Creado Correctamente', {
        onClose: () => navigate('/Programa'),
        autoClose: 1000,
      });
    }
  };

  return (
    <div className="w-full h-screen flex">
      <HeaderAdmin />
      <MenuAdmin />
      <div className="w-full h-full bg-white flex flex-col p-8 font-dmsans overflow-y-scroll pl-72 pt-28">
        <h1 className="text-2xl font-bold mb-6">Crear Proceso de Entrevista</h1>

        {/* Selección de la oferta */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Selecciona una Oferta</h2>
          <select
            onChange={handleOfertaSelect}
            className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
          >
            <option value="">Seleccionar una oferta</option>
            {filteredOfertas.map((oferta) => (
              <option key={oferta.id_oferta} value={oferta.id_oferta}>
                {oferta.puesto} - {oferta.empresa}
              </option>
            ))}
          </select>
        </div>

        {selectedOferta && (
          <>
            {/* Información del Proceso */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-3">Información del Proceso</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Nombre del Proceso</label>
                <input
                  type="text"
                  value={selectedOferta.puesto}
                  disabled
                  className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Nombre de la Empresa</label>
                <input
                  type="text"
                  value={selectedOferta.empresa}
                  disabled
                  className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Lugar de Trabajo</label>
                <input
                  type="text"
                  value={selectedOferta.ubicacion}
                  disabled
                  className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                />
              </div>
            </div>

            {/* Sección de Etapas */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-3">Etapas</h2>
              {stages.map((stage, index) => (
                <div key={index} className="mb-4 border p-4 rounded-lg relative">
                  {index > 0 && (
                    <MdDelete
                      className="absolute top-2 right-2 text-red-600 cursor-pointer"
                      onClick={() => handleDeleteStage(index)}
                    />
                  )}
                  <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-700">Nombre de la Etapa</label>
                    <input
                      type="text"
                      value={stage.etapa}
                      onChange={(e) => handleStageChange(index, 'etapa', e.target.value)}
                      className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-700">Recomendaciones</label>
                    <textarea
                      value={stage.recomendacion}
                      onChange={(e) => handleStageChange(index, 'recomendacion', e.target.value)}
                      className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-700">Modalidad</label>
                    <select
                      value={stage.modalidad}
                      onChange={(e) => handleStageChange(index, 'modalidad', e.target.value)}
                      className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                    >
                      <option value="">Seleccionar</option>
                      <option value="Virtual">Virtual</option>
                      <option value="Presencial">Presencial</option>
                    </select>
                  </div>
                  {stage.modalidad === 'Virtual' && (
                    <div className="mb-2">
                      <label className="block text-sm font-medium text-gray-700">Plataforma</label>
                      <input
                        type="text"
                        value={stage.plataforma}
                        onChange={(e) => handleStageChange(index, 'plataforma', e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                      />
                    </div>
                  )}
                </div>
              ))}
              {stages.length < 4 && (
                <button
                  onClick={handleAddStage}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-500 transition duration-300 ease-in-out"
                >
                  + Añadir Etapa
                </button>
              )}
            </div>

            {/* Botón para guardar el proceso */}
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-500 transition duration-300 ease-in-out"
            >
              Guardar Proceso
            </button>
          </>
        )}
        <ToastContainer />
      </div>
    </div>
  );
}

export default Proceso;