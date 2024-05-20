import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import fondoPuntos from '../../assets/punteado.png'
function CtaOtraCarrera() {

    const [text] = useTypewriter({
        words: ['otra carrera?', 'Derecho?', 'Sistemas?'],
        loop: {},
        typeSpeed: 120,
    });

  return (
    <div 
    class="bg-primarycolor text-white py-20 font-dmsans">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col gap-8 lg:flex-row items-center">
            <div class="lg:w-1/2">
                <h1 class="text-4xl font-bold leading-tight mb-4">¿Eres de otra carrera...?</h1>
                <h1 className='text-4xl font-bold leading-tight mb-4'>Explorando Nuevas áreas</h1>
                <p class="text-xl mb-8">Creemos que el crecimiento y la innovación vienen de todas partes. Si tu carrera o pasión no encaja perfectamente en las áreas mencionadas, ¡no te preocupes! Queremos invitarte a traer tus ideas y ayudar a iniciar nuevas áreas dentro de nuestra organización. Ya sea que estés estudiando diseño gráfico, ciencias ambientales, derecho, psicología o cualquier otra disciplina, estamos emocionados de ver cómo puedes contribuir a nuestra misión.

Tu visión y creatividad pueden abrir puertas a nuevas posibilidades y juntos podemos construir un futuro más brillante.

<strong> ¡TE ESTAMOS ESPERANDO!</strong></p>
                <a href="#"
                    class="bg-white text-gray-900 py-3 px-6 font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-200">¡Aplica Ahora y Transforma el Futuro con Nosotros!
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