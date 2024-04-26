import React from "react";
import { motion } from "framer-motion";

function Preguntas() {
  return (
    <div className="mx-16 mt-20">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow pb-8 text-xl font-bold leading-9 text-slate-900 max-md:mt-10 max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets%2F6be6dd5b90fb4db2b9632e2f5aba57f6%2F6fcc4cb30a654c1685b446aee47c1fd4?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F6be6dd5b90fb4db2b9632e2f5aba57f6%2F6fcc4cb30a654c1685b446aee47c1fd4?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F6be6dd5b90fb4db2b9632e2f5aba57f6%2F6fcc4cb30a654c1685b446aee47c1fd4?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F6be6dd5b90fb4db2b9632e2f5aba57f6%2F6fcc4cb30a654c1685b446aee47c1fd4?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F6be6dd5b90fb4db2b9632e2f5aba57f6%2F6fcc4cb30a654c1685b446aee47c1fd4?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F6be6dd5b90fb4db2b9632e2f5aba57f6%2F6fcc4cb30a654c1685b446aee47c1fd4?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F6be6dd5b90fb4db2b9632e2f5aba57f6%2F6fcc4cb30a654c1685b446aee47c1fd4?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F6be6dd5b90fb4db2b9632e2f5aba57f6%2F6fcc4cb30a654c1685b446aee47c1fd4"
              className="w-full border-0 border-solid aspect-[17.24] border-black border-opacity-0 stroke-[1px] stroke-black stroke-opacity-20 max-md:max-w-full"
            />
            <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap max-md:max-w-full">
              <div>¿Solicitan experiencia mínima?</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/58966b14407b82d1197ed908de2dbb12931c55d104ae9c3c44d45c806baf6a3a?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&"
                className="shrink-0 my-auto w-6 aspect-square"
              />
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets%2F6be6dd5b90fb4db2b9632e2f5aba57f6%2Fa6d8f3e1791548108277bba005abf7da?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F6be6dd5b90fb4db2b9632e2f5aba57f6%2Fa6d8f3e1791548108277bba005abf7da?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F6be6dd5b90fb4db2b9632e2f5aba57f6%2Fa6d8f3e1791548108277bba005abf7da?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F6be6dd5b90fb4db2b9632e2f5aba57f6%2Fa6d8f3e1791548108277bba005abf7da?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F6be6dd5b90fb4db2b9632e2f5aba57f6%2Fa6d8f3e1791548108277bba005abf7da?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F6be6dd5b90fb4db2b9632e2f5aba57f6%2Fa6d8f3e1791548108277bba005abf7da?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F6be6dd5b90fb4db2b9632e2f5aba57f6%2Fa6d8f3e1791548108277bba005abf7da?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F6be6dd5b90fb4db2b9632e2f5aba57f6%2Fa6d8f3e1791548108277bba005abf7da"
              className="mt-8 w-full border-0 border-solid aspect-[17.24] border-black border-opacity-0 stroke-[1px] stroke-black stroke-opacity-20 max-md:max-w-full"
            />
            <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap max-md:max-w-full">
              <div>¿Es trabajo remoto, presencial o híbrido?</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/58966b14407b82d1197ed908de2dbb12931c55d104ae9c3c44d45c806baf6a3a?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&"
                className="shrink-0 my-auto w-6 aspect-square"
              />
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets%2F6be6dd5b90fb4db2b9632e2f5aba57f6%2Fa6d8f3e1791548108277bba005abf7da?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F6be6dd5b90fb4db2b9632e2f5aba57f6%2Fa6d8f3e1791548108277bba005abf7da?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F6be6dd5b90fb4db2b9632e2f5aba57f6%2Fa6d8f3e1791548108277bba005abf7da?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F6be6dd5b90fb4db2b9632e2f5aba57f6%2Fa6d8f3e1791548108277bba005abf7da?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F6be6dd5b90fb4db2b9632e2f5aba57f6%2Fa6d8f3e1791548108277bba005abf7da?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F6be6dd5b90fb4db2b9632e2f5aba57f6%2Fa6d8f3e1791548108277bba005abf7da?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F6be6dd5b90fb4db2b9632e2f5aba57f6%2Fa6d8f3e1791548108277bba005abf7da?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F6be6dd5b90fb4db2b9632e2f5aba57f6%2Fa6d8f3e1791548108277bba005abf7da"
              className="mt-8 w-full border-0 border-solid aspect-[17.24] border-black border-opacity-0 stroke-[1px] stroke-black stroke-opacity-20 max-md:max-w-full"
            />
            <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap max-md:max-w-full">
              <div>¿Qué carreras son las más solicitadas?</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/58966b14407b82d1197ed908de2dbb12931c55d104ae9c3c44d45c806baf6a3a?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&"
                className="shrink-0 my-auto w-6 aspect-square"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col px-5 max-md:mt-10 max-md:max-w-full">
            <div className="text-4xl font-bold tracking-tighter capitalize leading-[52px] text-slate-900 max-md:max-w-full">
              ¿Tienes otra pregunta?
            </div>
            <div className="mt-4 text-xl leading-9 text-black text-opacity-60 max-md:max-w-full">
              Dejanos un mensaje y contestaremos a la brevedad.
            </div>
            <div className="flex gap-2 mt-8 text-base capitalize max-md:flex-wrap max-md:max-w-full">
              <div className="flex-1 justify-center items-start px-5 py-5 font-medium rounded-lg bg-zinc-100 text-neutral-400 max-md:pr-5">
                Tu pregunta...
              </div>
              <div className="justify-center px-6 py-5 font-bold text-white whitespace-nowrap bg-indigo-600 rounded-lg max-md:px-5">
                Enviar
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preguntas;
