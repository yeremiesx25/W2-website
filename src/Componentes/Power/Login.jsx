import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/supabase.config";
import HeaderPower from "./HeaderPower";
import { FcGoogle } from "react-icons/fc"; // Importar ícono de Google

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // Campo adicional para el perfil
  const [dni, setDni] = useState(""); // Campo DNI
  const [telefono, setTelefono] = useState(""); // Campo Teléfono
  const [distrito, setDistrito] = useState(""); // Campo Distrito
  const [fechaNac, setFechaNac] = useState(""); // Campo Fecha de Nacimiento
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true); // Mostrar "Iniciar Sesión" por defecto
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Registrar nuevo usuario en Supabase Auth
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (signUpError) {
        console.error("Error de registro:", signUpError); // Log del error
        setError("Hubo un problema al registrarse.");
        return;
      }

      // Si el usuario se registra correctamente, añade su perfil a la tabla 'perfiles'
      const user = data.user;
      if (user) {
        const perfilData = {
          nombre: name, // El nombre que el usuario ingresó
          correo: email, // El correo del usuario registrado
          id: user.id,
          rol: "candidato", // Establecer rol automáticamente
          user_id: user.id, // Agregar el user_id para relacionar con la tabla perfiles
          dni: dni, // DNI del usuario
          telefono: telefono, // Teléfono del usuario
          distrito: distrito, // Distrito del usuario
          fecha_nac: fechaNac, // Fecha de nacimiento del usuario
        };

        console.log("Datos del perfil a insertar:", perfilData); // Log de datos a insertar

        const { error: profileError } = await supabase.from("perfiles").insert(perfilData);

        if (profileError) {
          console.error("Error al crear perfil:", profileError); // Log del error
          setError("Hubo un problema al crear el perfil.");
          return;
        }

        // Redirige al usuario a la página deseada tras el registro exitoso
        navigate("/PowerAuth");
      }
    } catch (error) {
      console.error("Error de registro:", error); // Log del error
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

      // Redirige al usuario a la página deseada tras el inicio de sesión exitoso
      navigate("/PowerAuth");
    } catch (error) {
      console.error("Error de inicio de sesión:", error.message);
      setError("Hubo un problema al iniciar sesión. Inténtalo de nuevo.");
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    try {
      // Iniciar sesión con Google
      const { data, error: googleError } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });

      if (googleError) {
        console.error("Error de inicio de sesión con Google:", googleError.message);
        setError(googleError.message);
        return;
      }

      // Espere a que el usuario se autentique y se establezca la sesión
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();

      if (sessionError || !sessionData?.session) {
        console.error("Error al obtener la sesión:", sessionError?.message);
        setError("No se pudo obtener el usuario después de iniciar sesión con Google.");
        return;
      }

      const user = sessionData.session.user;

      // Verificar si el usuario tiene un perfil en la tabla 'perfiles'
      const { data: perfilExistente, error: perfilError } = await supabase
        .from("perfiles")
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (perfilError) {
        console.error("Error al verificar perfil existente:", perfilError.message);
        setError("Error al verificar el perfil.");
        return;
      }

      // Si el perfil no existe, creamos uno nuevo
      if (!perfilExistente) {
        const perfilData = {
          nombre: user.user_metadata.full_name || user.user_metadata.name || "",
          correo: user.email,
          rol: "candidato",
          user_id: user.id,
        };

        console.log("Datos del perfil a insertar:", perfilData);

        const { error: profileError } = await supabase.from("perfiles").insert(perfilData);

        if (profileError) {
          console.error("Error al crear perfil con Google:", profileError.message);
          setError("Hubo un problema al crear el perfil.");
          return;
        }
      }

      // Redirige al usuario a la página deseada tras el inicio de sesión exitoso
      navigate("/PowerAuth");
    } catch (error) {
      console.error("Error de inicio de sesión con Google:", error.message);
      setError("Hubo un problema al iniciar sesión con Google. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="flex justify-center min-h-screen">
      <HeaderPower />
      <div className="w-1/2 h-screen bg-primarygradientdark hidden lg:block"></div>
      <div className="md:w-1/2 h-full py-6 bg-white flex items-center mx-auto px-4 pt-28">
        {isLogin ? (
          <form onSubmit={handleLogin} className="w-full">
            <h2 className="font-bold text-center text-2xl text-primarycolor">Iniciar Sesión</h2>
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primarycolor focus:bg-white focus:outline-none mb-8"
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primarycolor focus:bg-white focus:outline-none mb-12"
            />
            {error && <p className="mb-4 text-red-500">{error}</p>}

            <button
              type="submit"
              className="transition duration-200 bg-[#ffe946] hover:bg-[#fff084] focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-primarycolor h-10 flex py-2.5 rounded-lg text-md shadow-sm hover:shadow-md font-semibold text-center justify-center items-center mx-auto w-full"
            >
              Iniciar Sesión
            </button>

            {/* Botón de inicio de sesión con Google */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="transition duration-200 bg-white border border-gray-300 hover:bg-gray-100 focus:bg-gray-200 flex items-center justify-center py-2 px-4 rounded-lg mt-4 w-full"
            >
              <FcGoogle className="mr-2" size={24} />
              <span className="text-gray-600 font-semibold">Iniciar sesión con Google</span>
            </button>

            <p
              onClick={() => setIsLogin(false)}
              className="mt-4 text-center text-blue-500 cursor-pointer hover:underline"
            >
              ¿No tienes una cuenta? Regístrate
            </p>
          </form>
        ) : (
          <form onSubmit={handleRegister}>
            <h2 className="font-bold text-2xl text-primarycolor text-center">Registrar</h2>
            <input
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primarycolor focus:bg-white focus:outline-none mb-8"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primarycolor focus:bg-white focus:outline-none mb-8"
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primarycolor focus:bg-white focus:outline-none mb-8"
            />
            <input
              type="text"
              placeholder="DNI"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primarycolor focus:bg-white focus:outline-none mb-8"
            />
            <input
              type="text"
              placeholder="Teléfono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primarycolor focus:bg-white focus:outline-none mb-8"
            />
            <input
              type="text"
              placeholder="Distrito"
              value={distrito}
              onChange={(e) => setDistrito(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primarycolor focus:bg-white focus:outline-none mb-8"
            />
            <input
              type="date"
              placeholder="Fecha de Nacimiento"
              value={fechaNac}
              onChange={(e) => setFechaNac(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primarycolor focus:bg-white focus:outline-none mb-8"
            />
            {error && <p className="mb-4 text-red-500">{error}</p>}
            <button
              type="submit"
              className="transition duration-200 bg-[#ffe946] hover:bg-[#fff084] focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-primarycolor h-10 flex py-2.5 rounded-lg text-md shadow-sm hover:shadow-md font-semibold text-center justify-center items-center mx-auto w-full"
            >
              Registrarse
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