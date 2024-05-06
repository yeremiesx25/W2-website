import React from "react";
import { motion } from "framer-motion";

function Intermedio() {
  return (
    <div
      id="conseguirtalento"
      className="flex flex-col items-center px-5 mt-20"
    >
      <div className="flex items-center justify-center text-center text-indigo-500 mx-auto w-full max-w-full">
        <h1 className="text-3xl md:text-4xl font-bold leading-10 px-5 max-w-[599px] sm:text-base font-dmsans">
          Encuentra el mejor servicio para tu empresa
        </h1>
      </div>
      <div className="flex justify-between mt-14 text-lg font-medium leading-5 text-slate-500 flex-wrap">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex flex-col justify-center px-7 py-5 font-semibold text-black whitespace-nowrap bg-white rounded-3xl border-0 border-indigo-0 border-solid max-md:px-5"
          onClick={() => {
            document.getElementById("servicio-reclutamiento").style.display =
              "block";
            document.getElementById("servicio-head-hunting").style.display =
              "none";
            document.getElementById("servicio-outsourcing").style.display =
              "none";
          }}
        >
          <div className="flex gap-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d0379c52667cc830bebbbdfa50529d4877ba4bc532e41aec767c67161c253fa?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&"
              className="shrink-0 w-12 aspect-square"
            />
            <div className="flex-auto my-auto font-dmsans">Reclutamiento</div>
          </div>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex flex-col justify-center px-7 py-5 bg-white rounded-3xl border border-gray-100 border-solid shadow-sm max-md:px-5"
          onClick={() => {
            document.getElementById("servicio-reclutamiento").style.display =
              "none";
            document.getElementById("servicio-head-hunting").style.display =
              "block";
            document.getElementById("servicio-outsourcing").style.display =
              "none";
          }}
        >
          <div className="flex gap-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d98a2c39afe9c6609e91de71aba33177e87342e24e448e15102a8b1dbcc30ba6?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&"
              className="shrink-0 w-12 aspect-square"
            />
            <div className="flex-auto my-auto font-dmsans">Head Hunting</div>
          </div>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex flex-col justify-center px-7 py-5 whitespace-nowrap bg-white rounded-3xl border border-gray-100 border-solid shadow-sm max-md:px-5"
          onClick={() => {
            document.getElementById("servicio-reclutamiento").style.display =
              "none";
            document.getElementById("servicio-head-hunting").style.display =
              "none";
            document.getElementById("servicio-outsourcing").style.display =
              "block";
          }}
        >
          <div className="flex gap-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/38da0ee29b9810862dd4a21aa2b949599e45d2c83f4fbba194b1b302b9a093aa?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&"
              className="shrink-0 w-12 aspect-square"
            />
            <div className="flex-auto my-auto font-dmsans">Outsourcing</div>
          </div>
        </motion.button>
      </div>

      {/* Reclutamiento */}
      <div id="servicio-reclutamiento" className="mt-2 flex flex-wrap">
        <div className="flex flex-col items-center self-stretch px-16 pt-0 mt-10 w-full bg-indigo-600 rounded-3xl border border-gray-100 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="mt-6 w-full max-w-[977px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3b0d6064b62fd4e00fa095dffbc7c89d21b188bf813186d68b96bd6debecc717?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&"
                    className="rounded-3xl aspect-square w-[72px]"
                  />
                  <div className="text-white mt-9 text-2xl font-bold leading-9 text-indigo-950 max-md:max-w-full font-dmsans">
                    Reclutamiento y Selección
                  </div>
                  <div className="text-white mt-6 text-lg leading-8 text-slate-500 max-md:max-w-full font-dmsans">
                    Encontramos el talento ideal desde la identificación de
                    perfiles hasta la evaluación y contratación, nuestro equipo
                    experto se encarga de todo el proceso para asegurar que
                    encuentres a los mejores candidatos. Confía en nosotros para
                    construir equipos sólidos que impulsen el crecimiento y la
                    excelencia de tu organización.
                  </div>
                  <div className="mt-14 text-base font-medium leading-5 text-indigo-600 max-md:mt-10 max-md:max-w-full font-dmsans">
                    <a href="#" className="text-white">
                      Lo quiero
                    </a>{" "}
                    {/* Link a Reclutamiento y Selección */}
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4ded5fe95e83f61260251dad2cb417b3b76bb38a7e2eb7182785fe93d536ed76?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&"
                  className="grow mt-11 w-full aspect-[0.85] max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Head Hunting */}
      <div
        id="servicio-head-hunting"
        className="mt-2"
        style={{ display: "none" }}
      >
        <div className="flex flex-col items-center self-stretch px-16 pt-0 mt-10 w-full bg-indigo-600 rounded-3xl border border-gray-100 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="mt-6 w-full max-w-[977px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d98a2c39afe9c6609e91de71aba33177e87342e24e448e15102a8b1dbcc30ba6?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&"
                    className="rounded-3xl aspect-square w-[72px] bg-white"
                  />
                  <div className="text-white mt-9 text-2xl font-bold leading-9 text-indigo-950 max-md:max-w-full font-dmsans">
                    Head Hunting
                  </div>
                  <div className="text-white mt-6 text-lg leading-8 text-slate-500 max-md:max-w-full font-dmsans">
                    Desde la búsqueda y análisis de perfiles destacados hasta la
                    evaluación exhaustiva y contratación, nuestro equipo
                    especializado se encarga de cada paso para garantizar que
                    encuentres a los candidatos más calificados. Confía en
                    nuestra experiencia para formar equipos sólidos que impulsen
                    el progreso y el éxito de tu empresa.
                  </div>
                  <div className="mt-14 text-base font-medium leading-5 text-indigo-600 max-md:mt-10 max-md:max-w-full font-dmsans">
                    <a href="#" className="text-white">
                      Lo quiero
                    </a>{" "}
                    {/* Link a la pagina de head hunting */}
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://i.imgur.com/CgLBb3U.png"
                  className="grow mt-11 w-full aspect-[0.85] max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Outsourcing */}
      <div
        id="servicio-outsourcing"
        className="mt-2"
        style={{ display: "none" }}
      >
        <div className="flex flex-col items-center self-stretch px-16 pt-0 mt-10 w-full bg-indigo-600 rounded-3xl border border-gray-100 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="mt-6 w-full max-w-[977px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/38da0ee29b9810862dd4a21aa2b949599e45d2c83f4fbba194b1b302b9a093aa?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&"
                    className="rounded-3xl aspect-square w-[72px] bg-white"
                  />
                  <div className="text-white mt-9 text-2xl font-bold leading-9 text-indigo-950 max-md:max-w-full font-dmsans">
                    Outsourcing
                  </div>
                  <div className="text-white mt-6 text-lg leading-8 text-slate-500 max-md:max-w-full font-dmsans">
                    Optimizamos tus operaciones mediante la externalización
                    estratégica de funciones clave, desde la identificación de
                    necesidades hasta la gestión eficiente de recursos humanos y
                    tecnológicos. Confía en nuestro equipo para potenciar la
                    eficacia y la flexibilidad de tu organización.
                  </div>
                  <div className="mt-14 text-base font-medium leading-5 text-indigo-600 max-md:mt-10 max-md:max-w-full font-dmsans">
                    <a href="#" className="text-white">
                      Lo quiero
                    </a>{" "}
                    {/* Link a la pagina de outsourcing */}
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://www.intalex.com.mx/site/wp-content/uploads/2023/01/intalex13.webp"
                  className="grow mt-11 w-full aspect-[0.85] max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intermedio;
