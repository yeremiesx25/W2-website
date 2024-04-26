import React from "react";
import { motion } from "framer-motion";

function Intermedio() {
  return (
    <div className="flex flex-col items-center px-5 mt-20">
      <div className="text-4xl font-bold leading-10 text-center text-indigo-950 w-[599px] max-md:max-w-full">
        Encuentra el mejor servicio para tu empresa
      </div>
      <div className="flex gap-5 justify-between mt-14 text-lg font-medium leading-5 text-slate-500 max-md:flex-wrap max-md:mt-10">
        <div className="flex flex-col justify-center px-7 py-5 font-bold text-indigo-600 whitespace-nowrap bg-white rounded-3xl border-2 border-indigo-600 border-solid max-md:px-5">
          <div className="flex gap-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d0379c52667cc830bebbbdfa50529d4877ba4bc532e41aec767c67161c253fa?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&"
              className="shrink-0 w-12 aspect-square"
            />
            <div className="flex-auto my-auto">Reclutamiento</div>
          </div>
        </div>
        <div className="flex flex-col justify-center px-7 py-5 bg-white rounded-3xl border border-gray-100 border-solid shadow-sm max-md:px-5">
          <div className="flex gap-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d98a2c39afe9c6609e91de71aba33177e87342e24e448e15102a8b1dbcc30ba6?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&"
              className="shrink-0 w-12 aspect-square"
            />
            <div className="flex-auto my-auto">Head Hunting</div>
          </div>
        </div>
        <div className="flex flex-col justify-center px-7 py-5 whitespace-nowrap bg-white rounded-3xl border border-gray-100 border-solid shadow-sm max-md:px-5">
          <div className="flex gap-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/38da0ee29b9810862dd4a21aa2b949599e45d2c83f4fbba194b1b302b9a093aa?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&"
              className="shrink-0 w-12 aspect-square"
            />
            <div className="flex-auto my-auto">Outsourcing</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center self-stretch px-16 pt-20 mt-12 w-full bg-white rounded-3xl border border-gray-100 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="mt-6 w-full max-w-[977px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3b0d6064b62fd4e00fa095dffbc7c89d21b188bf813186d68b96bd6debecc717?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b0d6064b62fd4e00fa095dffbc7c89d21b188bf813186d68b96bd6debecc717?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b0d6064b62fd4e00fa095dffbc7c89d21b188bf813186d68b96bd6debecc717?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b0d6064b62fd4e00fa095dffbc7c89d21b188bf813186d68b96bd6debecc717?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b0d6064b62fd4e00fa095dffbc7c89d21b188bf813186d68b96bd6debecc717?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b0d6064b62fd4e00fa095dffbc7c89d21b188bf813186d68b96bd6debecc717?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b0d6064b62fd4e00fa095dffbc7c89d21b188bf813186d68b96bd6debecc717?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b0d6064b62fd4e00fa095dffbc7c89d21b188bf813186d68b96bd6debecc717?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&"
                  className="rounded-3xl aspect-square w-[72px]"
                />
                <div className="mt-9 text-2xl font-bold leading-9 text-indigo-950 max-md:max-w-full">
                  Reclutamiento y Selección
                </div>
                <div className="mt-6 text-lg leading-8 text-slate-500 max-md:max-w-full">
                  Encontramos el talento ideal desde la identificación de
                  perfiles hasta la evaluación y contratación, nuestro equipo
                  experto se encarga de todo el proceso para asegurar que
                  encuentres a los mejores candidatos. Confía en nosotros para
                  construir equipos sólidos que impulsen el crecimiento y la
                  excelencia de tu organización.
                </div>
                <div className="mt-14 text-base font-medium leading-5 text-indigo-600 max-md:mt-10 max-md:max-w-full">
                  Lo quiero
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4ded5fe95e83f61260251dad2cb417b3b76bb38a7e2eb7182785fe93d536ed76?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ded5fe95e83f61260251dad2cb417b3b76bb38a7e2eb7182785fe93d536ed76?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ded5fe95e83f61260251dad2cb417b3b76bb38a7e2eb7182785fe93d536ed76?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ded5fe95e83f61260251dad2cb417b3b76bb38a7e2eb7182785fe93d536ed76?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ded5fe95e83f61260251dad2cb417b3b76bb38a7e2eb7182785fe93d536ed76?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ded5fe95e83f61260251dad2cb417b3b76bb38a7e2eb7182785fe93d536ed76?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ded5fe95e83f61260251dad2cb417b3b76bb38a7e2eb7182785fe93d536ed76?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ded5fe95e83f61260251dad2cb417b3b76bb38a7e2eb7182785fe93d536ed76?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&"
                className="grow mt-11 w-full aspect-[0.85] max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intermedio;
