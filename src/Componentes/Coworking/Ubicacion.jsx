import React from 'react'
import flecha from "../../assets/flecha.png";

function Ubicacion() {
  return (
    <section class="bg-gray-100 font-dmsans ">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div class="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 class="text-4xl font-bold text-gray-800"><img
            src={flecha}
            alt=""
            className="inline-block w-16 h-12 mr-2"
          ></img>Alquiler de Salas de Reunión en San Juan de Lurigancho: <br></br><span className='text-primarycolor'>El Lugar Perfecto para Tus Encuentros</span></h2>
            <p class="mt-4 text-lg text-gray-600">Necesitas un lugar profesional para tus reuniones? Nuestras salas de reunión en San Juan de Lurigancho están diseñadas para ofrecerte privacidad, tecnología de punta y comodidad.</p>
        </div>
        <div class="mt-16 lg:mt-20">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="rounded-lg overflow-hidden border-2 border-primarycolor">
                    <iframe className=''
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15608.867979462078!2d-77.013269!3d-12.0285769!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf582a17fa43%3A0x83b92ceaf0d841f2!2sSelecci%C3%B3n%20de%20Personal%20%7C%20W2%20Consultores%20%7C%20Head%20Huntig!5e0!3m2!1ses-419!2spe!4v1724678046398!5m2!1ses-419!2spe"
                        width="100%" height="480"  allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div>
                    <div class="max-w-full mx-auto rounded-lg overflow-hidden">
                        <div class="px-6 py-4">
                            <h3 class="text-lg font-medium text-gray-900">Dirección</h3>
                            <p class="mt-1 text-gray-600">Av. Perú 180, San Juan de Lurigancho 15404</p>
                        </div>
                        <div class="border-t border-gray-200 px-6 py-4">
                            <h3 class="text-lg font-medium text-gray-900">Horario de Atención</h3>
                            <p class="mt-1 text-gray-600">Lunes - Viernes: 8 am - 7 pm</p>
                            <p class="mt-1 text-gray-600">Sábado: 9 a. m. - 12 p. m.</p>
                            <p class="mt-1 text-gray-600">Domingo: Cerrado</p>
                        </div>
                        <div class="border-t border-gray-200 px-6 py-4">
                            <h3 class="text-lg font-medium text-gray-900">Contacto</h3>
                            <p class="mt-1 text-gray-600">Email: wtupayachi@w2asesoresyconsultores.com</p>
                            <p class="mt-1 text-gray-600">Celular: +51 995 667 713</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Ubicacion