import React from "react";
import { motion } from "framer-motion";

function Servicio() {
  return (
    <div className="flex flex-col items-center px-5 mt-20">
      <div className="self-stretch px-20 pt-16 w-full bg-indigo-600 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/28f0cd0ecdce7864216fc9f7812c75c7fb37a5042a98235f75f59b42ba4ab561?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/28f0cd0ecdce7864216fc9f7812c75c7fb37a5042a98235f75f59b42ba4ab561?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/28f0cd0ecdce7864216fc9f7812c75c7fb37a5042a98235f75f59b42ba4ab561?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/28f0cd0ecdce7864216fc9f7812c75c7fb37a5042a98235f75f59b42ba4ab561?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/28f0cd0ecdce7864216fc9f7812c75c7fb37a5042a98235f75f59b42ba4ab561?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/28f0cd0ecdce7864216fc9f7812c75c7fb37a5042a98235f75f59b42ba4ab561?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/28f0cd0ecdce7864216fc9f7812c75c7fb37a5042a98235f75f59b42ba4ab561?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/28f0cd0ecdce7864216fc9f7812c75c7fb37a5042a98235f75f59b42ba4ab561?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&"
              className="grow w-full aspect-[1.11] max-md:mt-10"
            />
          </div>
          <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-3.5 font-bold max-md:mt-10 max-md:max-w-full">
              <div className="text-5xl tracking-tighter text-white leading-[65px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
                Encontramos el talento que tu empresa{" "}
                <span className="text-green-300">necesita</span>
              </div>
              <a 
                href="#" 
                className="flex gap-5 self-start px-5 py-6 mt-20 text-lg tracking-tight leading-8 text-indigo-600 bg-white rounded-lg max-md:pl-5 max-md:mt-10 transition-all duration-200 ease-in-out hover:bg-indigo-500 hover:text-white"
              >
                <div className="flex-auto">Contactar con un asesor</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/28e8773f56cbffe35c549070c20badb0f4462309a457986188ee15770e888d2f?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&"
                  className="shrink-0 self-start my-auto aspect-[1.18] w-[13px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28 text-5xl font-bold text-center leading-[49.5px] text-zinc-800 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Solicita nuestro servicio
      </div>
      <div className="flex flex-col items-start px-20 py-20 mt-20 w-full bg-white max-w-[1056px] rounded-[40px] shadow-[0px_17px_44px_rgba(179,179,179,0.25)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-xl max-md:mt-10 max-md:max-w-full">
                <div className="font-bold capitalize leading-[150%] text-zinc-800 max-md:max-w-full">
                  Nombres *
                </div>
                <div className="justify-center items-start px-5 py-8 mt-6 lowercase bg-white rounded-3xl border border-solid border-neutral-300 text-neutral-500 w-[400px] max-md:px-5 max-md:max-w-full">
                  John David
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-xl max-md:mt-10 max-md:max-w-full">
                <div className="font-bold capitalize leading-[150%] text-zinc-800 max-md:max-w-full">
                  Correo electrónico *
                </div>
                <div className="justify-center items-start px-6 py-8 mt-6 lowercase whitespace-nowrap bg-white rounded-3xl border border-solid border-neutral-300 text-neutral-500 w-[400px] max-md:px-5 max-md:max-w-full">
                  example@yourmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-xl max-md:mt-10 max-md:max-w-full">
                <div className="font-bold capitalize leading-[150%] text-zinc-800 max-md:max-w-full">
                  Empresa *
                </div>
                <div className="justify-center items-start px-6 py-8 mt-5 lowercase bg-white rounded-3xl border border-solid border-neutral-300 text-neutral-500 w-[400px] max-md:px-5 max-md:max-w-full">
                  yourcompany name here
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-xl max-md:mt-10 max-md:max-w-full">
                <div className="font-bold capitalize leading-[150%] text-zinc-800 max-md:max-w-full">
                  Servicio *
                </div>
                <div className="justify-center items-start px-8 py-8 mt-6 lowercase bg-white rounded-3xl border border-solid border-neutral-300 text-neutral-500 w-[400px] max-md:px-5 max-md:max-w-full">
                  seleccione un servicio
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 text-xl font-bold leading-8 capitalize text-zinc-800 max-md:mt-10 max-md:max-w-full">
          Mensaje *
        </div>
        <div className="items-start px-6 pt-5 pb-48 mt-5 w-full text-xl lowercase bg-white rounded-3xl border border-solid border-neutral-300 text-neutral-500 max-md:px-5 max-md:pb-10">
          Hello there,I would like to talk about how to...
        </div>
        <div className="justify-center self-end px-12 py-7 mt-20 mr-36 mb-10 text-lg font-bold text-white bg-indigo-600 rounded-lg max-md:px-5 max-md:mt-10 max-md:mr-2.5">
          Enviar mensaje
        </div>
      </div>
    </div>
  );
}

export default Servicio;
