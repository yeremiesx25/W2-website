  import React from 'react'
  import Reserva from '../Reserva/Reserva'
  import { FaWifi } from "react-icons/fa";
  import Soporte from "../../assets/soporte.png";
  import Sala from "../../assets/sala.png";
  import TV from "../../assets/tv.png";
  import Manager from "../../assets/project.png";
  import Cafe from "../../assets/cafe.png";
  import Baño from "../../assets/bano.png";

  function Info() {
    return (
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"/>
        <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-primarycolor to-primarycolor opacity-20" ></div>
        </div>
        <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-primarycolor to-primarycolor opacity-20" ></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex">
          <div className='flex flex-col'>
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Oficina para Trabajo Remoto en San Juan de Lurigancho: TU OFICINA, TU RITMO</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">Nuestra oficina de Coworking es el entorno perfecto para mantener la productividad fuera de casa. Un espacio diseñado para que trabajes sin interrupciones, nosotros nos encargamos de tu comodidad, TÚ de tu crecimiento.</p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <dl className="mt-16 grid grid-cols-1 gap-y-12 gap-x-8 sm:mt-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-12">
                
                <div className="flex flex-col items-center">
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">8 am - 7 pm</dd>
                  <dt className="text-base leading-7 text-gray-300 mt-2">Horario de Atención</dt>
                </div>

                <div className="flex flex-col items-center">
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">30 personas</dd>
                  <dt className="text-base leading-7 text-gray-300 mt-2">Aforo</dt>
                </div>

                <div className="flex flex-col items-center">
                  <FaWifi className="w-12 h-12 text-white" />
                  <dt className="text-base leading-7 text-gray-300 mt-2">Wifi Gratis</dt>
                </div>

                <div className="flex flex-col items-center">
                  <img src={Manager} className="w-16 h-16" alt="" />
                  <dt className="text-base leading-7 text-gray-300 mt-2">Office Manager</dt>
                </div>
                
                <div className="flex flex-col items-center">
                  <img src={Sala} className="w-16 h-16" alt="" />
                  <dt className="text-base leading-7 text-gray-300 mt-2">Equipo de Proyección</dt>
                </div>

                <div className="flex flex-col items-center">
                  <img src={Soporte} className="w-16 h-16" alt="" />
                  <dt className="text-base leading-7 text-gray-300 mt-2">Soporte TI</dt>
                </div>

                <div className="flex flex-col items-center">
                  <img src={TV} className="w-16 h-16" alt="" />
                  <dt className="text-base leading-7 text-gray-300 mt-2">Smart TV</dt>
                </div>

                <div className="flex flex-col items-center">
                  <img src={Baño} className="w-16 h-16" alt="" />
                  <dt className="text-base leading-7 text-gray-300 mt-2">SS.HH</dt>
                </div>

                <div className="flex flex-col items-center">
                  <img src={Cafe} className="w-16 h-16" alt="" />
                  <dt className="text-base leading-7 text-gray-300 mt-2">Café Ilimitado</dt>
                </div>
                
              </dl>
            </div>
          </div>
          <Reserva />
        </div>
      </div>
    )
  }

  export default Info