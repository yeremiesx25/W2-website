import {useState} from 'react'
import IncrementingNumber from './Increment';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'

function Counts() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
      <div class="bg-primarytext py-24 sm:py-32 font-dmsans">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <div class="text-center space-y-4">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Nuestros clientes nos respaldan</h2>
        <p class="text-lg leading-8 text-gray-300">Las estadíticas demuestran la calidad de nuestro servicio.
        </p>
      </div>
      <dl class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
        <div class="flex flex-col bg-white/5 p-8">
          <dt class="text-sm font-semibold leading-6 text-gray-300">Años en el mercado</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight text-white">
            {counterOn && <CountUp end={7} duration={5} />}+
          </dd>
        </div>
        <div class="flex flex-col bg-white/5 p-8">
          <dt class="text-sm font-semibold leading-6 text-gray-300">Clientes satisfechos</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight text-white">
          {counterOn && <CountUp end={128} duration={5} />}+
          </dd>
        </div>
        <div class="flex flex-col bg-white/5 p-8">
          <dt class="text-sm font-semibold leading-6 text-gray-300">Trabajos completados</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight text-white">
          {counterOn && <CountUp end={298} duration={5} />}+
          </dd>
        </div>
        <div class="flex flex-col bg-white/5 p-8">
          <dt class="text-sm font-semibold leading-6 text-gray-300">Vacantes cubiertas</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight text-white">
          {counterOn && <CountUp end={4589} duration={4} />}+
          </dd>
        </div>
      </dl>
    </div>
  </div>
</div>
    </ScrollTrigger>
    
  )
}

export default Counts