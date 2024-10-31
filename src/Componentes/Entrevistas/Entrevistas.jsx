import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../supabase/supabase.config';
import { v4 as uuidv4 } from 'uuid';
import * as XLSX from 'xlsx';
import HeaderAdmin from '../Admin/HeaderAdmin';
import MenuAdmin from '../Admin/MenuAdmin';
import { UserAuth } from '../../Context/AuthContext';
import Filter from './Filter';
import EnviarMensaje from './EnviarMensaje';

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
        .eq('id_reclutador', idReclutador)
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
  }, [user]);

  useEffect(() => {
    if (idOferta) {
      fetchProgramaData().then(data => setProgramaData(data));
    }
  }, [idOferta]);

  useEffect(() => {
    setFilteredCandidatos([...candidatos, ...candidatosNoAuth].sort((a, b) => {
      const dateA = new Date(a.fecha_postulacion || a.fecha);
      const dateB = new Date(b.fecha_postulacion || b.fecha);
      return dateB - dateA; // Orden descendente
    }));
  }, [candidatos, candidatosNoAuth]);

  const fetchProgramaData = async () => {
    try {
      const { data: programaData, error } = await supabase
        .from('Programa')
        .select('id_programa, plataforma_1, empresa, lugar, etapa_1, etapa_2, etapa_3, etapa_4')
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
      setCandidatosNoAuth(prev => [...prev, ...candidatosData]);
    };

    reader.readAsArrayBuffer(file);
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

  const activeStages = programaData.length > 0 ? Object.entries(programaData[0])
    .filter(([key, value]) => key.startsWith('etapa') && value)
    .map(([key, value]) => ({ key, value })) : [];

  return (
    <div className="w-full h-screen flex">
      <HeaderAdmin />
      <MenuAdmin />
      <div className="w-full h-full bg-white flex flex-col p-8 font-dmsans overflow-y-scroll pl-72 pt-28">
        <h2 className="text-2xl mb-4">Subir Candidatos</h2>
        <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} className="p-3 border border-gray-300 rounded-lg" />

        <Filter onFilter={handleFilter} />

        <h2 className="text-2xl mt-6 mb-4">Candidatos Aptos</h2>
        {filteredCandidatos.length > 0 ? (
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th
                  className="border border-gray-300 p-4 text-lg font-semibold bg-gray-100 text-center"
                  colSpan={5 + activeStages.length * 2}
                >
                  Proceso - {puesto || 'Proceso Desconocido'} - {programaData[0]?.empresa || 'Empresa Desconocida'}
                </th>
              </tr>
              <tr>
                <th className="border border-gray-300 p-2">Fecha</th>
                <th className="border border-gray-300 p-2">Nombre</th>
                <th className="border border-gray-300 p-2">Telefono</th>
                <th className="border border-gray-300 p-2">DNI</th>
                <th className="border border-gray-300 p-2">Contactar</th>
                {activeStages.map(stage => (
                  <>
                    <th key={stage.key} className="border border-gray-300 p-2">{stage.value}</th>
                    <th className="border border-gray-300 p-2">Resultados</th>
                  </>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredCandidatos.map((candidato, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{formatDate(candidato.fecha_postulacion || candidato.fecha)}</td>
                  <td className="border border-gray-300 p-2">{candidato.name_user || candidato.nombre}</td>
                  <td className="border border-gray-300 p-2 text-center">{candidato.telefono}</td>
                  <td className="border border-gray-300 p-2 text-center">{candidato.dni}</td>
                  <td className="border border-gray-300 p-2 text-center">
                    <EnviarMensaje candidato={candidato} puesto={puesto} programaData={programaData} />
                  </td>
                  {activeStages.map(stage => (
                    <>
                      <td key={`${stage.key}-${index}`} className="border border-gray-300 p-2 text-center">
                        <input type="checkbox" />
                      </td>
                      <td className="border border-gray-300 p-2 text-center">
                        <select>
                          <option value="" disabled selected>Seleccionar</option>
                          <option value="Apto">Apto</option>
                          <option value="No Apto">No Apto</option>
                          <option value="Reprogramar">Reprogramar</option>
                        </select>
                      </td>
                    </>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No hay candidatos disponibles.</p>
        )}
      </div>
    </div>
  );
}

export default Entrevistas;