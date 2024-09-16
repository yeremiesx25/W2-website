import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import HeaderPower from "./HeaderPower";
import { supabase } from "../../supabase/supabase.config";
import Register from "./Register";

function Login({ closeModal }) {
  const { signInWithGoogle } = UserAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        setError("Correo o contraseña incorrectos");
      } else {
        navigate("/PowerAuth");
      }
    } catch (error) {
      setError("Hubo un problema al iniciar sesión. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center bg-gray-900 bg-opacity-0 z-50 font-dmsans flex-wrap">
      <HeaderPower />

      <div className="md:flex flex-col mb-8 animated fadeIn sm:flex-row bg-white w-1/2 h-full pl-20 hidden">
        <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last font-dmsans">
          <img
            className="rounded-lg"
            src="https://img.freepik.com/premium-vector/young-smiling-woman-jane-sitting-with-crossed-legs-holding-laptop-freelance-studying-online-education-work-home-work-concept-3d-vector-people-character-illustration-cartoon-minimal-style_365941-742.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
          <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">
            {isRegistering ? "Crea tu cuenta en" : "Inicia sesión en"}
          </p>
          <h3 className="mt-2 text-2xl sm:text-left md:text-4xl text-primarycolor font-semibold">
            Power
          </h3>
          <p className="mt-5 text-lg text-gray-700 text md:text-left">
            {isRegistering
              ? "Regístrate para acceder a más oportunidades laborales."
              : "Inicia sesión para encontrar tu próximo empleo. Si eres nuevo, empieza con 'Iniciar con Google'."}
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 w-1/2 p-8 relative h-full flex justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="m-0 text-3xl font-semibold text-gray-700">
              {isRegistering ? "Registro" : "Iniciar sesión"}
            </p>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            {isRegistering ? (
              <Register />
            ) : (
              <div className="flex items-center justify-center bg-gray-100">
                <div className="w-full max-w-md bg-white rounded-lg">
                  <form className="space-y-4" onSubmit={handleLogin}>
                    <div>
                      <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 text-base text-blue-600 placeholder-blue-400 bg-blue-50 border focus:border-blue-200 rounded-lg focus:outline-none"
                        required
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 text-base text-blue-600 placeholder-blue-400 bg-blue-50 border focus:border-blue-200 rounded-lg focus:outline-none"
                        required
                      />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <div className="mt-4 text-center mb-4">
                      <p className="text-gray-600">
                        ¿No tienes cuenta?{" "}
                        <button
                          type="button"
                          className="text-blue-600 hover:underline"
                          onClick={() => setIsRegistering(true)}
                        >
                          Regístrate
                        </button>
                      </p>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full px-4 py-3 text-base font-semibold text-white bg-primarycolor rounded-lg shadow-md hover:bg-blue-700 focus:ring-blue-400"
                      >
                        Iniciar sesión
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {!isRegistering && (
              <div className="bg-white w-80 pb-4 pt-4 sm:rounded-lg sm:pb-6">
                <div className="mt-2 max-w-md w-full">
                  <button
                    onClick={signInWithGoogle}
                    type="button"
                    className="inline-flex w-full max-w-md items-center justify-center rounded-lg bg-blue-100 px-6 py-3 text-base font-medium text-blue-600 shadow hover:bg-blue-200"
                  >
                    <span className="sr-only">Iniciar con Google</span>
                    <FcGoogle className="h-6 w-6" />
                    <span className="ml-4">Iniciar con Google</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;