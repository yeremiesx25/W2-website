import React from "react";
import Wily from "../../assets/Willy.png";
import Winy from "../../assets/Winy1.png";
import flecha from "../../assets/flecha.png";

function Founders() {
  return (
    <section className="bg-white dark:bg-gray-900 w-full flex justify-center">
      <div className="container px-6 py-10 flex flex-col items-center">
        <h1 className="text-4xl font-semibold text-center text-gray-800 capitalize lg:text-5xl dark:text-white">
          <img
            src={flecha}
            alt=""
            className="inline-block w-16 h-12 mr-2"
          ></img>
          Nuestros <span className="text-primarycolor xl:inline"> Founders</span>
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
          Nuestra historia comienza con ellos. Conoce a los fundadores de nuestra empresa.
        </p>
        <br></br>
        <br></br>
        <br></br>
        <div className="grid grid-cols-1 gap-12 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2 justify-center items-center">
          <div className="relative flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-primarycolor w-96">
            <img
              className="absolute -top-32 w-44"
              src={Winy}
              alt=""
            />

            <div className="mt-16 text-center">
              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                Winy Tupayachi Cahuana
              </h1>

              <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                CEO / CO FOUNDER
              </p>

              <div className="flex justify-center mt-3 -mx-2">
                <a
                  href="https://www.linkedin.com/in/winy-tupayachi-cahuana/"
                  className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                      clipRule="evenodd"
                    />
                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-primarycolor w-96">
            <img
              className="absolute -top-32 w-32"
              src={Wily}
              alt=""
            />

            <div className="mt-16 text-center">
              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                Willy Ramirez Guerrero
              </h1>

              <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                REPRESENTANTE / CO FOUNDER
              </p>

              <div className="flex justify-center mt-3 -mx-2">
                <a
                  href="https://www.linkedin.com/in/willy-ramirez-15b07462/"
                  className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                      clipRule="evenodd"
                    />
                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founders;