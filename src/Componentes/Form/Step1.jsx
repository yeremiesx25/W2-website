import React from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const Step1 = ({ data, handleChange, nextStep }) => {
    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', mt: 0, p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
            
            <TextField
                label="Puesto"
                variant="outlined"
                name="puesto"
                value={data.puesto}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
            />
            <TextField
                label="Descripción"
                variant="outlined"
                name="descripcion"
                value={data.descripcion}
                onChange={handleChange}
                fullWidth
                required
                multiline
                rows={4}
                margin="normal"
                
            />
            <TextField
                label="Ubicación"
                variant="outlined"
                name="ubicacion"
                value={data.ubicacion}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
            />
            <TextField
                label="Empresa"
                variant="outlined"
                name="empresa"
                value={data.empresa}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
            />
            <TextField
                label="Sueldo"
                variant="outlined"
                name="sueldo"
                value={data.sueldo}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
            />
            <Box mt={3} display="flex" justifyContent="flex-end">
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={nextStep}
                >
                    Siguiente
                </Button>
            </Box>
        </Box>
    );
};

export default Step1;