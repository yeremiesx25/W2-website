import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';
import HeaderPower from '../Power/HeaderPower';
import { Box, Grid, Typography, TextField, Button, Link, IconButton, InputAdornment } from '@mui/material';
import { GrFormNextLink } from 'react-icons/gr';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function LoginAdmin() {
    const navigate = useNavigate();
    const { manualSignIn } = UserAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const success = await manualSignIn(email, password);
            if (success) {
                const userRole = await getUserRole(email);
                if (userRole === 'reclutador') {
                    navigate('/Admin');
                } else {
                    setError('No tienes permiso para acceder a esta área');
                }
            } else {
                setError('Correo electrónico o contraseña incorrecta');
            }
        } catch (err) {
            setError('Ocurrió un error al iniciar sesión');
        }
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <HeaderPower />
            <Grid container height="100vh">
                <Grid item md={6} className="hidden md:flex flex-col gap-8 items-center justify-center overflow-hidden">
                    <img
                        src="https://keenthemes.com/assets/media/illustrations/customerservice.svg"
                        alt=""
                        style={{ maxHeight: '28rem' }}
                    />
                    <Typography variant="body1" color="text.secondary" align="center" maxWidth="lg">
                        "La pasión por conectar personas con su potencial impulsa tu éxito."
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} className="flex items-center justify-center px-4">
                    <Box padding={6} maxWidth="md" width="100%">
                        <Typography variant="h4" align="center" color="primary" gutterBottom>
                            Te damos la bienvenida
                        </Typography>
                        <Typography variant="subtitle1" align="center" color="gray.300" gutterBottom>
                            Ingresa tus datos para iniciar sesión
                        </Typography>
                        <Box mt={4} component="form" onSubmit={handleLogin}>
                            <TextField
                                label="Correo electrónico"
                                variant="outlined"
                                fullWidth
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                margin="normal"
                                InputProps={{
                                    style: {
                                        backgroundColor: 'white',
                                        borderRadius: '8px',
                                    },
                                }}
                            />
                            <TextField
                                label="Contraseña"
                                variant="outlined"
                                fullWidth
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                margin="normal"
                                InputProps={{
                                    style: {
                                        backgroundColor: 'white',
                                        borderRadius: '8px',
                                    },
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={handleClickShowPassword} edge="end">
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            {error && (
                                <Typography color="error" variant="body2" gutterBottom>
                                    {error}
                                </Typography>
                            )}
                            <Box
                                display="flex"
                                flexDirection={{ xs: 'column', md: 'column' }}
                                justifyContent="space-between"
                                alignItems="center"
                                gap={2}
                                mt={2}
                            >
                                <Link
                                    href="https://wa.me/51970632448?text=Hola%2C%20me%20gustar%C3%ADa%20que%20me%20pueda%20ayudar%20a%20recuperar%20mi%20contrase%C3%B1a"
                                    color="secondary"
                                    underline="always"
                                >
                                    Olvidé mi contraseña
                                </Link>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="warning"
                                    fullWidth
                                    sx={{ py: 2, borderRadius: '8px' }}
                                >
                                    <Typography variant="button" fontWeight="bold">
                                        Iniciar Sesión
                                    </Typography>
                                </Button>
                            </Box>
                            <Link
                                href="https://wa.me/51970632448?text=Hola%20vengo%20de%20Power.%20Quiero%20solicitar%20mi%20cuenta%20de%20Reclutador."
                                color="warning"
                                underline="always"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                mt={2}
                            >
                                Solicitar cuenta de Reclutador <GrFormNextLink size={20} />
                            </Link>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default LoginAdmin;