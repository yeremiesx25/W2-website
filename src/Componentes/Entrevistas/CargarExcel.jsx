// CargarExcel.jsx
import React from 'react';
import { supabase } from '../../supabase/supabase.config';
import { v4 as uuidv4 } from 'uuid';
import * as XLSX from 'xlsx';

function CargarExcel({ idReclutador, idOferta, setCandidatosNoAuth }) {
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
      setCandidatosNoAuth((prev) => [...prev, ...candidatosData]);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Subir Candidatos</h2>
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
        className="p-3 border border-gray-300 rounded-lg"
      />
    </div>
  );
}

export default CargarExcel;
