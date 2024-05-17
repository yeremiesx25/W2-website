import React from "react";
import talent from "../../assets/Copia de IMG_4036.png";
import creative from "../../assets/Copia de IMG_4036.png";
import tech from "../../assets/Copia de IMG_4036.png";
import mind from "../../assets/Copia de IMG_4036.png";
import money from "../../assets/Copia de IMG_4036.png";

function AreasPracticantes() {
  return (
    <div class="max-w-7xl mx-auto my-4 px-2">
      <ul class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5">
        <li class="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400">
          <a class="relative" href="/tool/writey-ai">
            <img
              class="rounded relative w-full object-cover aspect-video"
              src={talent}
              alt="Writey A.I"
              loading="lazy"
            />
          </a>

          <div class="flex flex-col justify-beetween gap-3 px-4 py-2">
            <p
              class="flex justify-center items-center text-xl font-semibold text-blue-700 hover:text-teal-800 two-lines text-ellipsis"
            >
              <span>Talent Hub</span><br />
              <small class="font-medium text-sm">
              El Corazón de la Atracción de Talento
              </small>
            </p>

            <p class="text-gray-600 three-lines">
            Dirigido a estudiantes de Psicología Organizacional, Recursos Humanos, Ing. Industrial (enfocada en RR.HH).
            </p>

            <ul class="flex flex-wrap items-center justify-start text-sm gap-2">
              <li
                title="Pricing type"
                class="flex items-center cursor-pointer gap-0.5 bg-primarycolor text-black px-2 py-0.5 rounded-lg"
              >
                <a className="p-2 text-white">Postula Aquí</a>
              </li>
            </ul>

            <ul class="flex flex-wrap text-sm gap-2 my-1">
            </ul>
          </div>
        </li>


        <li class="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400">
          <a class="relative" href="/tool/writey-ai">
            <img
              class="rounded relative w-full object-cover aspect-video"
              src={creative}
              alt="Writey A.I"
              loading="lazy"
            />
          </a>

          <div class="flex flex-col justify-beetween gap-3 px-4 py-2">
            <p
              class="flex justify-center items-center text-xl font-semibold text-blue-700 hover:text-teal-800 two-lines text-ellipsis"
            >
              <span>Creative Nexus</span><br />
              <small class="font-medium text-sm">
              Conectando Marcas con Audiencias de Impacto
              </small>
            </p>

            <p class="text-gray-600 three-lines">
            Dirigido a estudiantes de las carreras de Comunicaciones, Marketing, Diseño gráfico, Edición de video, Fotografía, y afines.
            </p>

            <ul class="flex flex-wrap items-center justify-start text-sm gap-2">
              <li
                title="Pricing type"
                class="flex items-center cursor-pointer gap-0.5 bg-primarycolor text-black px-2 py-0.5 rounded-lg"
              >
                <a className="p-2 text-white">Postula Aquí</a>
              </li>
            </ul>

            <ul class="flex flex-wrap text-sm gap-2 my-1">
              
            </ul>
          </div>
        </li>

        
        <li class="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400">
          <a class="relative" href="/tool/writey-ai">
            <img
              class="rounded relative w-full object-cover aspect-video"
              src={tech}
              alt="Writey A.I"
              loading="lazy"
            />
          </a>

          <div class="flex flex-col justify-beetween gap-3 px-4 py-2">
            <p
              class="flex justify-center items-center text-xl font-semibold text-blue-700 hover:text-teal-800 two-lines text-ellipsis"
            >
              <span>Tech Lab</span><br />
              <small class="font-medium text-sm">
              Donde la Innovación Define el Futuro
              </small>
            </p>

            <p class="text-gray-600 three-lines">
            Dirigido a estudiantes de Ing. de Sistemas, Ciencias de la Computación, Ing. Electrónica, Desarrollo de Software y afines.
            </p>

            <ul class="flex flex-wrap items-center justify-start text-sm gap-2">
              <li
                title="Pricing type"
                class="flex items-center cursor-pointer gap-0.5 bg-primarycolor text-black px-2 py-0.5 rounded-lg"
              >
                <a className="p-2 text-white">Postula Aquí</a>
              </li>
            </ul>

            <ul class="flex flex-wrap text-sm gap-2 my-1">
            </ul>
          </div>
        </li>

        <li class="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400">
          <a class="relative" href="/tool/writey-ai">
            <img
              class="rounded relative w-full object-cover aspect-video"
              src={mind}
              alt="Writey A.I"
              loading="lazy"
            />
          </a>

          <div class="flex flex-col justify-beetween gap-3 px-4 py-2">
            <p
              class="flex justify-center items-center text-xl font-semibold text-blue-700 hover:text-teal-800 two-lines text-ellipsis"
            >
              <span>Mind Mastery</span><br />
              <small class="font-medium text-sm">
              Desarrollando el Potencial a Través del Conocimiento
              </small>
            </p>

            <p class="text-gray-600 three-lines">
            Dirigido a estudiantes de Psicología, Ciencias de la Educación, Pedagogía, Filosofía, Sociología, y afines.
            </p>

            <ul class="flex flex-wrap items-center justify-start text-sm gap-2">
              <li
                title="Pricing type"
                class="flex items-center cursor-pointer gap-0.5 bg-primarycolor text-black px-2 py-0.5 rounded-lg"
              >
                <a className="p-2 text-white">Postula Aquí</a>
              </li>
            </ul>

            <ul class="flex flex-wrap text-sm gap-2 my-1">
            </ul>
          </div>
        </li>

        <li class="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400">
          <a class="relative" href="/tool/writey-ai">
            <img
              class="rounded relative w-full object-cover aspect-video"
              src={money}
              alt="Writey A.I"
              loading="lazy"
            />
          </a>

          <div class="flex flex-col justify-beetween gap-3 px-4 py-2">
            <p
              class="flex justify-center items-center text-xl font-semibold text-blue-700 hover:text-teal-800 two-lines text-ellipsis"
            >
              <span>MoneyMatrix</span><br />
              <small class="font-medium text-sm">
              Construyendo Futuros Financieros
              </small>
            </p>

            <p class="text-gray-600 three-lines">
            Dirigido a estudiantes de Administración, Contabilidad, Finanzas, Economía y afines.
            </p>

            <ul class="flex flex-wrap items-center justify-start text-sm gap-2">
              <li
                title="Pricing type"
                class="flex items-center cursor-pointer gap-0.5 bg-primarycolor text-black px-2 py-0.5 rounded-lg"
              >
                <a className="p-2 text-white">Postula Aquí</a>
              </li>
            </ul>

            <ul class="flex flex-wrap text-sm gap-2 my-1">
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default AreasPracticantes;
