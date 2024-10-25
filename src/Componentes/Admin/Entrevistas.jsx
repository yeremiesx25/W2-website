import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase/supabase.config';
import { v4 as uuidv4 } from 'uuid';
import * as XLSX from 'xlsx';
import HeaderAdmin from '../Admin/HeaderAdmin';
import MenuAdmin from '../Admin/MenuAdmin';
import { UserAuth } from '../../Context/AuthContext';

function Entrevistas() {
  const { user } = UserAuth();
  const [idReclutador, setIdReclutador] = useState(null);
  const [idOferta, setIdOferta] = useState(null);
  const [candidatos, setCandidatos] = useState([]);
  const [candidatosNoAuth, setCandidatosNoAuth] = useState([]);

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
        .select('id_oferta')
        .eq('id_reclutador', idReclutador)
        .order('fecha_publicacion', { ascending: false })
        .limit(1)
        .single();

      if (ofertaError || !ofertaData) {
        console.error('Error al obtener datos de la oferta:', ofertaError);
        return;
      }

      setIdOferta(ofertaData.id_oferta);

      // Obtener candidatos en estado "apto"
      const { data: postulacionData, error: postulacionError } = await supabase
        .from('Postulacion')
        .select('name_user, telefono,fecha_postulacion')
        .eq('id_oferta', ofertaData.id_oferta)
        .eq('estado', 'apto');

      if (postulacionError) {
        console.error('Error al obtener postulaciones:', postulacionError);
        return;
      }

      setCandidatos(postulacionData);

      // Obtener candidatos de CandidatosNoAuth en estado "apto"
      const { data: noAuthData, error: noAuthError } = await supabase
        .from('CandidatosNoAuth')
        .select('nombre,telefono')
        .eq('id_oferta', ofertaData.id_oferta)
        .eq('estado', 'apto');

      if (noAuthError) {
        console.error('Error al obtener CandidatosNoAuth:', noAuthError);
        return;
      }

      setCandidatosNoAuth(noAuthData);
    };

    fetchData();
  }, [user]);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file || !idReclutador || !idOferta) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      const candidatosData = jsonData.map((row) => ({
        id_user: uuidv4(),
        id_reclutador: idReclutador,
        id_oferta: idOferta,
        nombre: row.Nombre,
        dni: row.DNI,
        telefono: row.Celular,
        estado_etapas: [],
        estado: 'apto',
      }));

      const { error } = await supabase.from('CandidatosNoAuth').insert(candidatosData);

      if (error) {
        console.error('Error al subir candidatos:', error);
        return;
      }

      alert('Candidatos subidos exitosamente');
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="w-full h-screen flex">
      <HeaderAdmin />
      <MenuAdmin />
      <div className="w-full h-full bg-white flex flex-col p-8 font-dmsans overflow-y-scroll pl-72 pt-28">
        <h2 className="text-2xl mb-4">Subir Candidatos</h2>
        <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} className="p-3 border border-gray-300 rounded-lg" />
        
        <h2 className="text-2xl mt-6 mb-4">Candidatos Aptos</h2>
        {candidatos.length > 0 ? (
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-1">Fecha de Postulacion</th>
                <th className="border border-gray-300 p-1">Nombre</th>
                <th className="border border-gray-300 p-1">Telefono</th>
              </tr>
            </thead>
            <tbody>
              {candidatos.map((candidato, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{candidato.fecha_postulacion}</td>
                  <td className="border border-gray-300 p-2">{candidato.name_user}</td>
                  <td className="border border-gray-300 p-2">{candidato.telefono}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No hay candidatos aptos para mostrar.</p>
        )}

        <h2 className="text-2xl mt-6 mb-4">Candidatos No Autenticados Aptos</h2>
        {candidatosNoAuth.length > 0 ? (
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Nombre</th>
                <th className="border border-gray-300 p-2">Telefono</th>
              </tr>
            </thead>
            <tbody>
              {candidatosNoAuth.map((candidato, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{candidato.nombre}</td>
                  <td className="border border-gray-300 p-2">{candidato.telefono}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No hay candidatos no autenticados aptos para mostrar.</p>
        )}
      </div>
    </div>
  );
}

export default Entrevistas;
