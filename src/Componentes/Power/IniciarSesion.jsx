import React, { useState } from "react";
import { UserAuth } from "../../Context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";
import logo from '../../assets/Logo Power.png';

function IniciarSesion({ onClose }) {
  const { signInWithGoogle } = UserAuth();
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
    onClose(); // Llama a la función de cierre del padre
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
      <div className="bg-white dark:bg-gray-800 w-full max-w-md p-8 rounded-lg shadow-2xl relative transform transition-transform duration-300 ease-in-out scale-105">
        <button
          className="absolute top-2 right-2 text-gray-600 dark:text-white"
          onClick={closeModal}
        >
          <IoMdClose className="h-6 w-6" />
        </button>
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
              ¡Estás a un paso de postular!
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Inicia sesión en <img src={logo} alt="Power" className="inline-block w-20 md:w-24" /> para postularte a todas las ofertas laborales que te interesan. ¡No pierdas esta oportunidad!
            </p>
          </div>
  
          <div className=" sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white dark:bg-gray-700 px-4 pb-4 pt-4 sm:rounded-lg sm:px-10 sm:pb-6 sm:shadow-lg">
              <div className="mt-2">
                <button
                  onClick={signInWithGoogle}
                  type="button"
                  className="inline-flex w-full max-w-xs items-center justify-center rounded-md border border-gray-300 bg-white dark:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-500 dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 disabled:cursor-wait disabled:opacity-50"
                >
                  <span className="sr-only">Inicia Sesión con Google</span>
                  <FcGoogle className="h-8 w-8" />
                  <span className="ml-2">Continuar con Google</span>
                </button>
              </div>
            </div>
  
            <div className="m-auto mt-6 w-fit md:mt-8">
              <span className="text-black dark:text-white">
                ¿No tienes cuenta?
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

export default IniciarSesion;