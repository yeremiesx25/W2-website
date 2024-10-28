import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/supabase.config";
import HeaderPower from "./HeaderPower";
import { FcGoogle } from "react-icons/fc";
import DashboardContent from '../../assets/BGPOWER.svg'
import { Button, TextField, Typography, Checkbox, FormControlLabel, Box, Divider } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [dni, setDni] = useState("");
  const [telefono, setTelefono] = useState("");
  const [distrito, setDistrito] = useState("");
  const [fechaNac, setFechaNac] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
        const { data, error: signUpError } = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        if (signUpError) {
            console.error("Error de registro:", signUpError);
            setError("Hubo un problema al registrarse.");
            return;
        }

        const user = data.user;
        if (user) {
            const perfilData = {
                nombre: name,
                correo: email,
                id: user.id,
                rol: "candidato",
                user_id: user.id,
                dni: dni,
                telefono: telefono,
                distrito: distrito,
                fecha_nac: fechaNac,
            };

            console.log("Datos del perfil a insertar:", perfilData);

            const { error: profileError } = await supabase.from("perfiles").insert(perfilData);

            if (profileError) {
                console.error("Error al crear perfil:", profileError);
                setError("Hubo un problema al crear el perfil.");
                return;
            }

            // Crear una entrada en la tabla Experiencia
            const experienciaData = {
                user_id: user.id, // Usar el user_id del nuevo usuario
                // Puedes agregar otros campos necesarios para la tabla Experiencia
            };

            const { error: experienciaError } = await supabase.from("Experiencia").insert(experienciaData);

            if (experienciaError) {
                console.error("Error al crear experiencia:", experienciaError);
                setError("Hubo un problema al crear la experiencia.");
                return;
            }

            navigate("/PowerAuth");
        }
    } catch (error) {
        console.error("Error de registro:", error);
        setError("Hubo un problema al registrarse. Inténtalo de nuevo.");
    }
};

const handleLogin = async (e) => {
  e.preventDefault();
  setError("");

  try {
    const { error: loginError } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (loginError) {
      console.error("Error de inicio de sesión:", loginError.message);
      setError(loginError.message);
      return;
    }

    // Obtener la sesión del usuario después de iniciar sesión
    const { data: sessionData, error: sessionError } = await supabase.auth.getSession();

    if (sessionError) {
      console.error("Error al obtener la sesión:", sessionError.message);
      setError("No se pudo obtener la sesión.");
      return;
    }

    const user = sessionData.session.user;

    // Consultar el perfil del usuario para obtener su rol
    const { data: perfil, error: perfilError } = await supabase
      .from("perfiles")
      .select("rol")
      .eq("user_id", user.id)
      .single();

    if (perfilError) {
      console.error("Error al obtener el perfil:", perfilError.message);
      setError("Error al verificar el perfil.");
      return;
    }

    console.log("Perfil obtenido:", perfil); // Registro del perfil obtenido

    // Verificar la ruta actual
    const currentPath = window.location.pathname;

    // Redirigir según el rol y la ruta
    if (perfil) {
      if (currentPath === "/AdminLogin" && perfil.rol === "reclutador") {
        // Permitir acceso solo a reclutadores en /AdminLogin
        navigate("/Admin"); // Cambia a la ruta del reclutador
      } else if (currentPath === "/Login" && perfil.rol === "candidato") {
        // Permitir acceso solo a candidatos en /Login
        navigate("/PowerAuth"); // Cambia a la ruta del candidato
      } else {
        setError("No tienes permiso para acceder a esta sección."); // Error de permisos
      }
    } else {
      setError("Perfil no encontrado.");
    }
  } catch (error) {
    console.error("Error de inicio de sesión:", error.message);
    setError("Hubo un problema al iniciar sesión. Inténtalo de nuevo.");
  }
};
//parte google
const handleGoogleLogin = async () => {
  setError("");
  try {
      // Iniciar sesión con Google
      const { error: googleError } = await supabase.auth.signInWithOAuth({
          provider: "google"
      });

      if (googleError) {
          console.error("Error de inicio de sesión con Google:", googleError.message);
          setError(googleError.message);
          return;
      }

      // Obtener la sesión después del inicio de sesión
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();

      if (sessionError || !sessionData?.session) {
          console.error("Error al obtener la sesión:", sessionError?.message);
          setError("No se pudo obtener el usuario después de iniciar sesión con Google.");
          return;
      }

      const user = sessionData.session.user;

      // Verificar si el usuario ya existe en la base de datos
      const { data: existingUser, error: userError } = await supabase
          .from('users')
          .select('*')
          .eq('email', user.email)
          .single();

      // Manejar errores de verificación de usuario
      if (userError && userError.code !== '23503') { // '23503' indica que no se encontró el usuario
          console.error("Error al verificar el usuario:", userError.message);
          setError("Error al verificar el usuario.");
          return;
      }

      // Si no existe el usuario, crearlo
      if (!existingUser) {
          const { error: createUserError } = await supabase
              .from('users')
              .insert([
                  {
                      email: user.email,
                  }
              ]);

          if (createUserError) {
              console.error("Error al registrar el nuevo usuario:", createUserError.message);
              setError("Error al registrar el nuevo usuario.");
              return;
          }

          // Enviar el correo de verificación
          const { error: verificationError } = await supabase.auth.api.sendVerificationEmail(user.email);
          if (verificationError) {
              console.error("Error al enviar el correo de verificación:", verificationError.message);
              setError("Error al enviar el correo de verificación.");
              return;
          }
      }

      // Redirigir al usuario si ya existe el perfil
      navigate("/PowerAuth");
  } catch (error) {
      console.error("Error de inicio de sesión con Google:", error.message);
      setError("Hubo un problema al iniciar sesión con Google. Inténtalo de nuevo.");
  }
};



  
  return (
    <div className="flex justify-center min-h-screen font-dmsans">
      <HeaderPower />
      <div className="w-1/2 h-screen bg-primarygradientdark hidden md:flex justify-center items-center relative">
  <img
    src="https://png.pngtree.com/png-vector/20240614/ourmid/pngtree-vibrant-yellow-abstract-background-with-textured-white-lines-on-isolated-patterned-png-image_12219818.png"
    className="opacity-40 w-full h-full object-cover"
    alt=""
  />
  <img
    src={DashboardContent}
    className="absolute w-auto h-96"
    alt="Dashboard Content"
  />
  </div>

      <div className="md:w-1/2 h-screen py-6 bg-white flex items-center mx-auto px-4 lg:px-40 justify-center overflow-y-scroll">
        {isLogin ? (
          <Box component="form" onSubmit={handleLogin} sx={{ maxWidth: 400, mx: 'auto', p: 3 }}>
          <Typography variant="h5" component="h2" textAlign="center" mb={2}>
            Sign in to Overpay
          </Typography>
          <Typography variant="body2" textAlign="center" color="textSecondary" mb={3}>
            Send, spend and save smarter
          </Typography>
    
          <Button
            variant="outlined"
            startIcon={<FcGoogle />}
            fullWidth
            sx={{ mb: 1 }}
            onClick={handleGoogleLogin}
          >
            Iniciar con Google
          </Button>
    
          <Divider>O usar email</Divider>
    
          <TextField
            type="email"
            label="Correo"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
    
          <TextField
            type="password"
            label="Contraseña"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
    
          {error && <Typography color="error" mb={2}>{error}</Typography>}
    
          
    
          <Box textAlign="right" mb={3}>
            <Typography variant="body2" color="primary" component="a" href="#" sx={{ textDecoration: 'none' }}>
              Forgot Password?
            </Typography>
          </Box>
    
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign In
          </Button>
    
          <Typography textAlign="center" mt={2}>
            Don't have an account?{' '}
            <Typography variant="body2" color="primary" component="span" onClick={() => setIsLogin(false)} sx={{ cursor: 'pointer' }}>
              Sign Up
            </Typography>
          </Typography>
        </Box>
        ) : (
          <form className="pt-20" onSubmit={handleRegister}>
          <h2 className="font-bold text-2xl text-primarycolor text-center pb-6">Registrate en Power</h2>
        
          {/* Campo de nombre */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primarycolor focus:bg-white focus:outline-none"
            />
          </div>
        
          {/* Campos en dos columnas usando flex */}
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-3 py-3 rounded-lg bg-gray-200 border focus:border-primarycolor focus:bg-white focus:outline-none"
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg bg-gray-200 border focus:border-primarycolor focus:bg-white focus:outline-none"
            />
          </div>
        
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <input
              type="text"
              placeholder="DNI"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg bg-gray-200 border focus:border-primarycolor focus:bg-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="Teléfono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg bg-gray-200 border focus:border-primarycolor focus:bg-white focus:outline-none"
            />
          </div>
        
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <input
              type="text"
              placeholder="Distrito"
              value={distrito}
              onChange={(e) => setDistrito(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg bg-gray-200 border focus:border-primarycolor focus:bg-white focus:outline-none"
            />
            <input
              type="date"
              placeholder="Fecha de Nacimiento"
              value={fechaNac}
              onChange={(e) => setFechaNac(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg bg-gray-200 border focus:border-primarycolor focus:bg-white focus:outline-none"
            />
          </div>
        
          {/* Mensaje de error */}
          {error && <p className="mb-4 text-red-500">{error}</p>}
        
          {/* Botón de registrar */}
          <button
            type="submit"
            className="transition duration-200 bg-[#ffe946] hover:bg-[#fff084] focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-primarycolor h-10 flex py-2.5 rounded-lg text-md shadow-sm hover:shadow-md font-semibold text-center justify-center items-center mx-auto w-full"
          >
            Registrar
          </button>
        
          <p
            onClick={() => setIsLogin(true)}
            className="mt-4 text-center text-blue-500 cursor-pointer hover:underline"
          >
            ¿Ya tienes una cuenta? Inicia sesión
          </p>
        </form>
        )}
      </div>
    </div>
  );
}

export default Register;
