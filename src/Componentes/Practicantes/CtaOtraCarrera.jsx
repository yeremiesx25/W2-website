import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
function CtaOtraCarrera() {

    const [text] = useTypewriter({
        words: ['otra carrera?', 'Derecho?', 'Sistemas?'],
        loop: {},
        typeSpeed: 120,
    });

  return (
    <div class="bg-primarycolor text-white py-20 font-dmsans">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col gap-8 lg:flex-row items-center">
            <div class="lg:w-1/2">
                <h1 class="text-4xl font-bold leading-tight mb-4">¿Eres de <span>{text}</span><Cursor /></h1>
                <p class="text-xl mb-8">Queremos saber de ti. Compartenos de qué manera tus conocimientos y habilidades podrían generar un impacto significativo, y contribuir al cambio positivo dentro de la
familia W2. Tú podrías ser el pionero(a) de una nueva área.</p>
                <a href="#"
                    class="bg-white text-gray-900 py-3 px-6 font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-200">Postula Aquí
                </a>
            </div>
            <div class="lg:w-1/2 lg:ml-12">
                <img src="https://plus.unsplash.com/premium_photo-1661337187332-4b1beffc7a08?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tailwind CSS" class="rounded-lg shadow-lg hover:shadow-xl transition duration-200" />
            </div>
        </div>
    </div>
</div>
  )
}

export default CtaOtraCarrera