import {useState} from 'react'
import IncrementingNumber from './Increment';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'

function Counts() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
      
      <div class="bg-gradient-to-r from-primarycolor to-indigo-900 w-full font-dmsans">
  <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8  lg:py-20">
    <div class="max-w-5xl mx-auto text-center">
      <h2 class="pb-1 text-4xl font-extrabold text-white">Nuestras estadíticas y clientes nos respaldan</h2>
      <p class="mt-3 text-lg text-white">Contamos con una amplia experiencia brindando soluciones de gestión de talento humano.</p>
    </div>
    <dl class="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-4 sm:gap-8">
      <div class="flex flex-col">
        <dt class="order-2 mt-2 text-lg leading-6 font-medium text-white">Años en el <br /> mercado</dt>
        <dd class="order-1 text-5xl font-extrabold text-white">{counterOn && <CountUp end={7} duration={3} />}+</dd>
      </div>
      <div class="flex flex-col mt-10 sm:mt-0">
        <dt class="order-2 mt-2 text-lg leading-6 font-medium text-white">Clientes <br /> satisfechos</dt>
        <dd class="order-1 text-5xl font-extrabold text-white">{counterOn && <CountUp end={128} duration={3} />}+</dd>
      </div>
      <div class="flex flex-col mt-10 sm:mt-0">
        <dt class="order-2 mt-2 text-lg leading-6 font-medium text-white">Trabajos <br /> realizados</dt>
        <dd class="order-1 text-5xl font-extrabold text-white">{counterOn && <CountUp end={298} duration={3} />}+</dd>
      </div>
      <div class="flex flex-col mt-10 sm:mt-0">
        <dt class="order-2 mt-2 text-lg leading-6 font-medium text-white">Vacantes <br /> cubiertas</dt>
        <dd class="order-1 text-5xl font-extrabold text-white">{counterOn && <CountUp end={5000} duration={3} />}+</dd>
      </div>
    </dl>
  </div>
</div>

    </ScrollTrigger>
    
  )
}

export default Counts