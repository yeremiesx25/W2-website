import React from "react";
import talent from "../../assets/talent_hub.jpg";
import creative from "../../assets/Copia de IMG_4036.png";
import tech from "../../assets/tech_lab.jpg";
import mind from "../../assets/mind_mastery.jpg";
import money from "../../assets/money_matrix.jpg";

function AreasPracticantes() {
  return (
    <div className="max-w-7xl mx-auto my-4 px-2 font-dmsans">
      <div className="flex flex-wrap  p-2 xl:p-5 justify-center gap-6">
        <div className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-blue-200 w-96">
          <a className="relative" href="/tool/writey-ai">
            <img
              className="rounded relative w-full object-cover aspect-video"
              src={talent}
              alt="Writey A.I"
              loading="lazy"
            />
          </a>

          <div className="flex flex-col justify-between gap-3 px-4 py-2">
            <p
              className="flex justify-center items-center text-xl font-semibold text-primarycolor hover:text-blue-800 two-lines text-ellipsis"
            >
              <span>Talent Hub</span><br />
              <small className="font-medium text-sm">
                El Corazón de la Atracción de Talento
              </small>
            </p>

            <p className="text-gray-600 three-lines">
              Dirigido a estudiantes de Psicología Organizacional, Recursos Humanos, Ing. Industrial (enfocada en RR.HH).
            </p>

            <div className="flex justify-start pb-4">
              <a
                className="bg-primarycolor text-white px-4 py-2 rounded-lg"
                href="/apply"
              >
                Postula Aquí
              </a>
            </div>
          </div>
        </div>

        <div className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-blue-200 w-96">
          <a className="relative" href="/tool/writey-ai">
            <img
              className="rounded relative w-full object-cover aspect-video"
              src={creative}
              alt="Writey A.I"
              loading="lazy"
            />
          </a>

          <div className="flex flex-col justify-between gap-3 px-4 py-2">
            <p
              className="flex justify-center items-center text-xl font-semibold text-blue-700 hover:text-blue-800 two-lines text-ellipsis"
            >
              <span>Creative Nexus</span><br />
              <small className="font-medium text-sm">
                Conectando Marcas con Audiencias de Impacto
              </small>
            </p>

            <p className="text-gray-600 three-lines">
              Dirigido a estudiantes de las carreras de Comunicaciones, Marketing, Diseño gráfico, Edición de video, Fotografía, y afines.
            </p>

            <div className="flex justify-start pb-4">
              <a
                className="bg-primarycolor text-white px-4 py-2 rounded-lg"
                href="/apply"
              >
                Postula Aquí
              </a>
            </div>
          </div>
        </div>

        <div className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-blue-200 w-96">
          <a className="relative" href="/tool/writey-ai">
            <img
              className="rounded relative w-full object-cover aspect-video"
              src={tech}
              alt="Writey A.I"
              loading="lazy"
            />
          </a>

          <div className="flex flex-col justify-between gap-3 px-4 py-2">
            <p
              className="flex justify-center items-center text-xl font-semibold text-blue-700 hover:text-blue-800 two-lines text-ellipsis"
            >
              <span>Tech Lab</span><br />
              <small className="font-medium text-sm">
                Donde la Innovación Define el Futuro
              </small>
            </p>

            <p className="text-gray-600 three-lines">
              Dirigido a estudiantes de Ing. de Sistemas, Ciencias de la Computación, Ing. Electrónica, Desarrollo de Software y afines.
            </p>

            <div className="flex justify-start pb-4">
              <a
                className="bg-primarycolor text-white px-4 py-2 rounded-lg"
                href="/apply"
              >
                Postula Aquí
              </a>
            </div>
          </div>
        </div>

        <div className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-blue-200 w-96">
          <a className="relative" href="/tool/writey-ai">
            <img
              className="rounded relative w-full object-cover aspect-video"
              src={mind}
              alt="Writey A.I"
              loading="lazy"
            />
          </a>

          <div className="flex flex-col justify-between gap-3 px-4 py-2">
            <p
              className="flex justify-center items-center text-xl font-semibold text-blue-700 hover:text-blue-800 two-lines text-ellipsis"
            >
              <span>Mind Mastery</span><br />
              <small className="font-medium text-sm">
                Desarrollando el Potencial a Través del Conocimiento
              </small>
            </p>

            <p className="text-gray-600 three-lines">
              Dirigido a estudiantes de Psicología, Ciencias de la Educación, Pedagogía, Filosofía, Sociología, y afines.
            </p>

            <div className="flex justify-start pb-4">
              <a
                className="bg-primarycolor text-white px-4 py-2 rounded-lg"
                href="/apply"
              >
                Postula Aquí
              </a>
            </div>
          </div>
        </div>

        <div className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-blue-200 w-96">
          <a className="relative" href="/tool/writey-ai">
            <img
              className="rounded relative w-full object-cover aspect-video"
              src={money}
              alt="Writey A.I"
              loading="lazy"
            />
          </a>

          <div className="flex flex-col justify-between gap-3 px-4 py-2">
            <p
              className="flex justify-center items-center text-xl font-semibold text-blue-700 hover:text-blue-800 two-lines text-ellipsis"
            >
              <span>MoneyMatrix</span><br />
              <small className="font-medium text-sm">
                Construyendo Futuros Financieros
              </small>
            </p>

            <p className="text-gray-600 three-lines">
              Dirigido a estudiantes de Administración, Contabilidad, Finanzas, Economía y afines.
            </p>

            <div className="flex justify-start pb-4">
              <a
                className="bg-primarycolor text-white px-4 py-2 rounded-lg"
                href="/apply"
              >
                Postula Aquí
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AreasPracticantes;
