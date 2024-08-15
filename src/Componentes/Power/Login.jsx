import React from "react";
import { UserAuth } from "../../Context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import logo from '../../assets/Logo Power.png';
import loginBackground from '../../assets/loginBackground.svg';
import HeaderPower from "./HeaderPower";
function Login({ closeModal }) {
  const { signInWithGoogle, signOut } = UserAuth();

  return (
    <div className="fixed inset-0 flex  justify-center bg-gray-900 bg-opacity-0 z-50 font-dmsans">
      <HeaderPower />
      {/* <button
          className="self-start text-gray-600 dark:text-white"
          onClick={closeModal}
        >
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
        </button> */}
        <div class="flex flex-col mb-8 animated fadeIn sm:flex-row bg-white w-1/2 h-full pl-20">
            <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last font-dmsans">
                <img class="rounded-lg" src="https://img.freepik.com/premium-vector/young-smiling-woman-jane-sitting-with-crossed-legs-holding-laptop-freelance-studying-online-education-work-home-work-concept-3d-vector-people-character-illustration-cartoon-minimal-style_365941-742.jpg " alt=""/>
            </div>
            <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
                <p class="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">Inicia sesión en</p>
                <h3 class="mt-2 text-2xl sm:text-left md:text-4xl text-primarycolor font-semibold">Power</h3>
                <p class="mt-5 text-lg text-gray-700 text md:text-left">Inicia sesión para encontrar tu próximo empleo. Si eres nuevo, empieza con 'Iniciar con Google'.</p>
            </div>
        </div>

      {/* segunda parte */}
      <div className="bg-white dark:bg-gray-800 w-1/2 p-8  relative h-full  flex justify-center items-center">
        <div className="flex flex-col items-center">
          {" "}
          {/* Contenedor principal con alineación vertical */}
          <div className="text-center">
            <p class="m-0 text-3xl font-semibold text-gray-700">
              Iniciar sesión
            </p>

          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            {/* formulario: dos inputs */}
            <div className="flex items-center justify-center  bg-gray-100">
  <div className="w-full max-w-md  bg-white rounded-lg ">
    <form className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Correo electrónico"
          className="w-full px-4 py-3 text-base text-blue-600 placeholder-blue-400 bg-blue-50 border focus:border-blue-200 rounded-lg focus:outline-none"
        />
      </div>
      <div className="relative">
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full px-4 py-3 text-base text-blue-600 placeholder-blue-400 bg-blue-50 border focus:border-blue-200  rounded-lg focus:outline-none"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
          
        </div>
      </div>
      <div className="flex items-center justify-between">
        {/* <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
          Forgot password?
        </a> */}
      </div>
      <div>
        <button
          type="submit"
          className="w-full px-4 py-3 text-base font-semibold text-white bg-primarycolor rounded-lg shadow-md hover:bg-blue-700  focus:ring-blue-400"
        >
          Iniciar sesión
        </button>
      </div>
    </form>
  </div>
</div>

            {/* fin del form */}
            <div className="bg-white  w-80 pb-4 pt-4 sm:rounded-lg  sm:pb-6">
              <div className="mt-2 max-w-md w-full">
                <button
                  onClick={signInWithGoogle}
                  type="button"
                  className="inline-flex w-full max-w-md items-center justify-center rounded-lg bg-blue-100 px-6 py-3 text-base font-medium text-blue-600 shadow hover:bg-blue-200"
                >
                  <span className="sr-only">Iniciar con Google</span>
                  <FcGoogle className="h-6 w-6" /> {/* Icono de Google */}
                  <span className="ml-4">Iniciar con Google</span>{" "}
                  {/* Texto del botón */}
                </button>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;