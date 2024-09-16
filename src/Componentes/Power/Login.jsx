import React  from "react";
import { UserAuth } from "../../Context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import logo from '../../assets/Logo Power.png';
import loginBackground from '../../assets/loginBackground.svg';
import HeaderPower from "./HeaderPower";
function Login({ closeModal }) {
  const { signInWithGoogle, signOut } = UserAuth();

  return (
    <div className="fixed inset-0 flex  justify-center bg-gray-900 bg-opacity-0 z-50 font-dmsans flex-wrap">
      <HeaderPower />
      <div className="h-screen w-1/2 mx-auto flex items-center justify-center bg-blue-50">
      <div className="text-center">
        <img
          src="https://imgv3.fotor.com/images/side/%C2%BF-Como-hacer-una-imagen-PNG.png" // Cambia esto a la ruta de tu imagen
          alt="Power Experience"
          className=" bg-cover w-96"
        />
        <h1 className="text-2xl font-semibold text-gray-800 mt-4">
          Vive la experiencia Power
        </h1>
        <p className="text-gray-500">
          Encuentra un empleo ideal para ti.
        </p>
        
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