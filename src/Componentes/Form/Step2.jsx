import React from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const Step2 = ({ data, handleChange, nextStep, prevStep }) => {
    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', mt: 0, p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
            
            <TextField
                label="Requisitos"
                variant="outlined"
                name="requisitos"
                value={data.requisitos}
                onChange={handleChange}
                fullWidth
                required
                multiline
                rows={4}
                margin="normal"
                helperText="Use viñetas separando por líneas para cada requisito"
            />
            <TextField
                label="Funciones"
                variant="outlined"
                name="funciones"
                value={data.funciones}
                onChange={handleChange}
                fullWidth
                required
                multiline
                rows={4}
                margin="normal"
                helperText="Use viñetas separando por líneas para cada función"
            />
            <TextField
                label="Beneficios"
                variant="outlined"
                name="beneficios"
                value={data.beneficios}
                onChange={handleChange}
                fullWidth
                required
                multiline
                rows={4}
                margin="normal"
                helperText="Use viñetas separando por líneas para cada beneficio"
            />
            <Box mt={3} display="flex" justifyContent="space-between">
                <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={prevStep}
                >
                    Anterior
                </Button>
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

export default Step2;