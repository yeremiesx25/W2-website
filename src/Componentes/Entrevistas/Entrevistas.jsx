import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../supabase/supabase.config';
import HeaderAdmin from '../Admin/HeaderAdmin';
import MenuAdmin from '../Admin/MenuAdmin';
import { UserAuth } from '../../Context/AuthContext';
import Filter from './Filter';
import CargarExcel from './CargarExcel';

function Entrevistas() {
  const { user } = UserAuth();
  const { id_oferta } = useParams();
  const [idReclutador, setIdReclutador] = useState(null);
  const [idOferta, setIdOferta] = useState(null);
  const [candidatos, setCandidatos] = useState([]);
  const [candidatosNoAuth, setCandidatosNoAuth] = useState([]);
  const [programaData, setProgramaData] = useState([]);
  const [puesto, setPuesto] = useState('');
  const [filteredCandidatos, setFilteredCandidatos] = useState([]);

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;

      const { data: profileData, error: profileError } = await supabase
        .from('perfiles')
        .select('id')
        .eq('id', user.id)
        .single();

      if (profileError || !profileData) {
        console.error('Error al obtener perfil:', profileError);
        return;
      }

      const idReclutador = profileData.id;
      setIdReclutador(idReclutador);

      const { data: ofertaData, error: ofertaError } = await supabase
        .from('Oferta')
        .select('id_oferta, puesto, empresa')
        .eq('id_oferta', id_oferta)
        .order('fecha_publicacion', { ascending: false })
        .limit(1)
        .single();

      if (ofertaError || !ofertaData) {
        console.error('Error al obtener datos de la oferta:', ofertaError);
        return;
      }

      setIdOferta(ofertaData.id_oferta);
      setPuesto(ofertaData.puesto);

      const { data: postulacionData, error: postulacionError } = await supabase
        .from('Postulacion')
        .select('name_user, telefono, dni, fecha_postulacion')
        .eq('id_oferta', id_oferta)
        .eq('estado', 'apto');

      if (postulacionError) {
        console.error('Error al obtener postulaciones:', postulacionError);
        return;
      }

      setCandidatos(postulacionData);

      const { data: noAuthData, error: noAuthError } = await supabase
        .from('CandidatosNoAuth')
        .select('nombre, telefono, dni, fecha')
        .eq('id_oferta', id_oferta)
        .eq('estado', 'apto');

      if (noAuthError) {
        console.error('Error al obtener CandidatosNoAuth:', noAuthError);
        return;
      }

      setCandidatosNoAuth(noAuthData);
    };

    fetchData();
  }, [user, id_oferta]);

  useEffect(() => {
    if (id_oferta) {
      fetchProgramaData().then(data => setProgramaData(data));
    }
  }, [id_oferta]);

  useEffect(() => {
    setFilteredCandidatos([...candidatos, ...candidatosNoAuth].sort((a, b) => {
      const dateA = new Date(a.fecha_postulacion || a.fecha);
      const dateB = new Date(b.fecha_postulacion || b.fecha);
      return dateB - dateA; // Orden descendente que existe
    }));
  }, [candidatos, candidatosNoAuth]);

  const fetchProgramaData = async () => {
    try {
      const { data: programaData, error } = await supabase
        .from('Programa')
        .select('id_programa, empresa, lugar, etapas')
        .eq('id_oferta', id_oferta);

      if (error) {
        console.error('Error al obtener datos del Programa:', error);
        return [];
      }

      return programaData;
    } catch (err) {
      console.error('Error en la solicitud:', err);
      return [];
    }
  };

  const handleFilter = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = [...candidatos, ...candidatosNoAuth].filter((candidato) => {
      return (
        (candidato.name_user && candidato.name_user.toLowerCase().includes(lowerCaseQuery)) ||
        (candidato.nombre && candidato.nombre.toLowerCase().includes(lowerCaseQuery)) ||
        (candidato.telefono && candidato.telefono.includes(lowerCaseQuery)) ||
        (candidato.dni && candidato.dni.includes(lowerCaseQuery))
      );
    });
    setFilteredCandidatos(filtered);
  };

  return (
    <div className="w-full h-screen flex">
      <HeaderAdmin />
      <MenuAdmin />
      <div className="w-full h-full bg-[#fafbff] flex flex-col p-8 font-dmsans overflow-x-auto pl-72 pt-28">
        <CargarExcel idReclutador={idReclutador} idOferta={idOferta} setCandidatosNoAuth={setCandidatosNoAuth} />

        <Filter onFilter={handleFilter} />
        <h2 className="text-2xl mt-7 mb-4 font-bold">
          Proceso - {puesto || 'Proceso Desconocido'} - {programaData[0]?.empresa || 'Empresa Desconocida'}
        </h2>

        <div className="flex space-x-4">
          <div className="bg-white rounded-lg border p-8 mt-5 max-w-sm ml-0">
            <h2 className="mb-4 font-medium text-gray-600 ">Candidatos</h2>
            {filteredCandidatos.length > 0 ? (
              filteredCandidatos.map((candidato, index) => (
                <div key={index} className="bg-white rounded-lg border p-6 mb-2">
                  <h3 className="text-lg font-medium">{candidato.name_user || candidato.nombre}</h3>
                  <p className="text-sm text-gray-500">DNI: {candidato.dni}</p>
                  <p className="text-sm text-gray-500 mt-1">Celular: {candidato.telefono}</p>
                  <p className="text-sm text-gray-500">Fecha: {formatDate(candidato.fecha_postulacion || candidato.fecha)}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">No hay candidatos disponibles.</p>
            )}
          </div>

          {programaData.length > 0 && (
            <div className="flex space-x-4 flex-grow">
              {programaData[0].etapas?.map((etapa, index) => (
                <div key={index} className="bg-gray-200 rounded-lg shadow-md p-8 mt-5 flex-grow">
                  <h2 className="mb-4 font-medium text-gray-600">{etapa.etapa}</h2>
                  <div className="space-y-4">

                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Entrevistas;