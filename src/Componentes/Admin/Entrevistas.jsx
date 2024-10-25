import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase/supabase.config';
import { v4 as uuidv4 } from 'uuid';
import * as XLSX from 'xlsx';
import HeaderAdmin from '../Admin/HeaderAdmin';
import MenuAdmin from '../Admin/MenuAdmin';
import { UserAuth } from '../../Context/AuthContext'; // Asegúrate de importar el contexto de autenticación

function Entrevistas() {
  const { user } = UserAuth(); // Obtener el usuario actual
  const [idReclutador, setIdReclutador] = useState(null);
  const [idOferta, setIdOferta] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return; // Asegurarse de que el usuario esté autenticado

      // Paso 1: Obtener el id_reclutador de la tabla perfiles usando el id del usuario
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

      // Paso 2: Obtener el id_oferta asociado al id_reclutador
      const { data: ofertaData, error: ofertaError } = await supabase
        .from('Oferta')
        .select('id_oferta')
        .eq('id_reclutador', idReclutador)
        .order('fecha_publicacion', { ascending: false }) // Ordenar por fecha de publicación más reciente
        .limit(1)
        .single(); // Traer solo la más reciente

      if (ofertaError || !ofertaData) {
        console.error('Error al obtener datos de la oferta:', ofertaError);
        return;
      }

      // Asignar valores a los estados
      setIdOferta(ofertaData.id_oferta);
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
      </div>
    </div>
  );
}

export default Entrevistas;
