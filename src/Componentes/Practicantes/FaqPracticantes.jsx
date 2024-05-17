  import React, {useState} from 'react'

  function FaqPracticantes() {

    return (
        <div
        class="relative w-full bg-white px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10 mb-10">
            
        <div class="mx-auto px-5">
        <div className="area h-full">
			<ul class="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
            <div class="flex flex-col items-center">
                <h2 class="mt-5 text-center text-3xl font-bold tracking-tight md:text-3xl">Preguntas frecuentes</h2>
                <p class="mt-3 text-md text-neutral-500 md:text-lg">Algunas de las dudas más comunes
    
                </p>
            </div>
            <div class="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
                <div class="py-5">
                    <details class="group">
                        <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                            <span>¿Solicitan experiencia mínima?</span>
                            <span class="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                        </summary>
                        <p class="group-open:animate-fadeIn mt-3 text-neutral-600">No necesariamente, si tus habilidades y aptitudes son las que necesitamos nos contactaremos contigo.
                        </p>
                    </details>
                </div>
                <div class="py-5">
                    <details class="group">
                        <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                            <span>¿Es trabajo remoto, presencial o híbrido?</span>
                            <span class="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                        </summary>
                        <p class="group-open:animate-fadeIn mt-3 text-neutral-600">El trabajo es híbrido, 90% remoto y 10% presencial, nos reunimos una vez al mes para trabajo presencial.
                        </p>
                    </details>
                </div>
                <div class="py-5">
                    <details class="group">
                        <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                            <span>¿Qué carreras son las más solicitadas?</span>
                            <span class="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                        </summary>
                        <p class="group-open:animate-fadeIn mt-3 text-neutral-600">Las carreras con mayor frecuencia son las de Psicología organizacional o Recursos Humanos, ya que la mayor parte de nuestros procesos están enfocados en la gestión de Talento Humano.
                        </p>
                    </details>
                </div>
            </div>
        </div>
    </div>
    )
  }

  export default FaqPracticantes
