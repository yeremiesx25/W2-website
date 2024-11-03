import React, { useState } from 'react';
import { supabase } from '../../supabase/supabase.config';
import { v4 as uuidv4 } from 'uuid';
import * as XLSX from 'xlsx';
import Button from '@mui/material/Button';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircularProgress from '@mui/material/CircularProgress';

function CargarExcel({ idReclutador, idOferta, setCandidatosNoAuth }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file || !idReclutador || !idOferta) return;

    setLoading(true);
    setSuccess(false);

    const reader = new FileReader();
    reader.onload = async (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      const today = new Date();
      const formattedDate = today.toISOString().split('T')[0]; // YYYY-MM-DD

      const candidatosData = jsonData.map((row) => ({
        id_user: uuidv4(),
        id_reclutador: idReclutador,
        id_oferta: idOferta,
        nombre: row.Nombre,
        dni: row.DNI,
        telefono: row.Celular,
        estado_etapas: [],
        estado: 'apto',
        fecha: formattedDate,
      }));

      const { error } = await supabase.from('CandidatosNoAuth').insert(candidatosData);

      setLoading(false);

      if (error) {
        console.error('Error al subir candidatos:', error);
        return;
      }

      setSuccess(true);
      setCandidatosNoAuth((prev) => [...prev, ...candidatosData]);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
        style={{ display: 'none' }}
        id="upload-button"
      />
      <label htmlFor="upload-button">
        <Button
          variant="contained"
          color={success ? 'success' : 'primary'}
          component="span"
          startIcon={
            loading ? <CircularProgress size={24} /> : (success ? <CheckCircleIcon /> : <UploadFileIcon />)
          }
          disabled={loading}
        >
          {loading ? 'Cargando...' : (success ? 'Subido' : 'Subir Archivo')}
        </Button>
      </label>
    </div>
  );
}

export default CargarExcel;