import React, { useContext } from 'react';
import JobsContext from '../../Context/JobsContext';
import { IoSearch } from "react-icons/io5";
import { TextField, InputAdornment } from '@mui/material';

function BuscadorJob() {
  const { searchTerm, setSearchTerm } = useContext(JobsContext);

  return (
    <TextField
      variant="outlined"
      fullWidth
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Buscar por puesto"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IoSearch style={{ color: 'gray' }} />
          </InputAdornment>
        ),
        sx: {
          borderRadius: '50px',  // Redondeado similar a tu diseño original
          backgroundColor: '#fff',
        }
      }}
      sx={{
        width: {
          lg: '24rem',  // Ancho en pantallas grandes
          md: '16rem',  // Ancho en pantallas medianas
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'gray',  // Color del borde
          },
          '&:hover fieldset': {
            borderColor: '#6366F1',  // Color del borde en hover (indigo)
          },
          '&.Mui-focused fieldset': {
            borderColor: 'primary',  // Color del borde cuando está enfocado
          },
        },
      }}
    />
  );
}

export default BuscadorJob;
