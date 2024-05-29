import React from "react";
import { UserAuth } from "../../Context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import logo from '../../assets/Logo Power.png';

function Login({ closeModal }) {
  const { signInWithGoogle, signOut } = UserAuth();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-gray-50 dark:bg-gray-800 w-full max-w-md p-8 rounded-lg shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-600 dark:text-white"
          onClick={closeModal}
        >
          {/* Botón de cierre (X) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col items-center"> {/* Contenedor principal con alineación vertical */}
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Inicia Sesión en <img src={logo} alt="Power" className="inline-block w-20 md:w-28" />
            </h1>
          </div>
  
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white dark:bg-gray-700 px-4 pb-4 pt-4 sm:rounded-lg sm:px-10 sm:pb-6 sm:shadow">
              <div className="mt-2">
                <button
                  onClick={signInWithGoogle}
                  type="button"
                  className="inline-flex w-full max-w-xs items-center justify-center rounded-md border border-gray-300 bg-white dark:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-500 dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 disabled:cursor-wait disabled:opacity-50"
                >
                  <span className="sr-only">Inicia Sesión con Google</span>
                  <FcGoogle className="h-8 w-8" /> {/* Icono de Google */}
                  <span className="ml-2">Inicia Sesión con Google</span>{" "}
                  {/* Texto del botón */}
                </button>
              </div>
            </div>
  
            <div className="m-auto mt-6 w-fit md:mt-8">
              <span className="text-black">
                No tienes cuenta?
                <a
                  className="font-semibold text-amber-500 dark:text-indigo-100"
                  href="/register"
                >
                  {" "}
                  Regístrate
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;