import React from 'react';
import { supabase } from '../../supabase/supabase.config';
import { v4 as uuidv4 } from 'uuid';
import * as XLSX from 'xlsx';
import HeaderAdmin from '../Admin/HeaderAdmin';
import MenuAdmin from '../Admin/MenuAdmin';

function Entrevistas() {
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      const perfilesData = jsonData.map((row) => ({
        id: uuidv4(),
        nombre: row.Nombre,
        dni: row.DNI,
        telefono: row.Celular,
        rol: 'candidato',
        estado: true,
        correo: row.Email,
      }));

      const { error } = await supabase.from('perfiles').insert(perfilesData);

      if (error) {
        console.error('Error uploading profiles:', error);
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
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
        className="p-3 border border-gray-300 rounded-lg"
      />
    </div>
    </div>
  );
}

export default Entrevistas;