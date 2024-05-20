import React from 'react'
import EquipoW2 from '../../assets/Familia W22.gif'
import flecha from "../../assets/flecha.png";
function Equipo() {
  return (
    <div class="relative isolate font-dmsans">
  <svg
    class="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
    aria-hidden="true">
    <defs>
      <pattern id="0787a7c5-978c-4f66-83c7-11c213f99cb7" width="200" height="200" x="50%" y="-1"
        patternUnits="userSpaceOnUse">
        <path d="M.5 200V.5H200" fill="none"></path>
      </pattern>
    </defs>
    <rect width="100%" height="100%" stroke-width="0" fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"></rect>
  </svg>
  <div class="py-8 sm:py-12 lg:pb-12">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto  text-center">
      
        <h1 class="text-3xl font-bold text-primarytext sm:text-5xl"><img src={flecha} alt="" className="inline-block w-16 h-12 mr-2"/>¿Y tú, quieres ser parte de W2?</h1>
      </div>
      <div class="mt-16 flow-root sm:mt-24">
        <div class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
          <img src={EquipoW2}/>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Equipo