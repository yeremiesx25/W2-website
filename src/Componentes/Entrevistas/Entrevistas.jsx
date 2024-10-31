import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../supabase/supabase.config';
import HeaderAdmin from '../Admin/HeaderAdmin';
import MenuAdmin from '../Admin/MenuAdmin';
import { UserAuth } from '../../Context/AuthContext';
import Filter from './Filter';
import EnviarMensaje from './EnviarMensaje';
import UploadExcel from './CargarExcel';

function Entrevistas() {
  const { user } = UserAuth();
  const { id_oferta } = useParams();
  const [idReclutador, setIdReclutador] = useState(null);
  const [idOferta, setIdOferta] = useState(null);
  const [candidatos, setCandidatos] = useState([]);
  const [candidatosNoAuth, setCandidatosNoAuth] = useState([]);
  const [puesto, setPuesto] = useState('');
  const [filteredCandidatos, setFilteredCandidatos] = useState([]);

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

      setIdReclutador(profileData.id);

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
    setFilteredCandidatos([...candidatos, ...candidatosNoAuth].sort((a, b) => {
      const dateA = new Date(a.fecha_postulacion || a.fecha);
      const dateB = new Date(b.fecha_postulacion || b.fecha);
      return dateB - dateA; // Orden descendente
    }));
  }, [candidatos, candidatosNoAuth]);

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
      <div className="w-full h-full bg-white flex flex-col p-8 font-dmsans overflow-y-scroll pl-72 pt-28">
        <UploadExcel idReclutador={idReclutador} idOferta={idOferta} setCandidatosNoAuth={setCandidatosNoAuth} />

        <Filter onFilter={handleFilter} />

        <h2 className="text-2xl mt-2 mb-1">Candidatos Aptos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCandidatos.length > 0 ? (
            filteredCandidatos.map((candidato, index) => (
              <div
                key={index}
                className="bg-white  rounded-lg border shadow-sm p-6 flex flex-col justify-between"
              >
                <h3 className="text-lg font-medium">{candidato.name_user || candidato.nombre}</h3>
                <p className="text-sm text-gray-500">DNI: {candidato.dni}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No hay candidatos disponibles.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Entrevistas;
