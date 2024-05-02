import React from 'react'

function AreasPracticantes() {
  return (
    <div class=" bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
    <div class="container mx-auto px-4 py-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                <img src="https://plus.unsplash.com/premium_photo-1661782480332-b13e3172660d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Headless UI" class="w-full h-64 object-cover"/>
                <div class="p-4 md:p-6">
                    <h3 class="text-xl font-semibold text-primarytext dark:text-indigo-300 mb-2">Equipo de atracción</h3>
                    <p class="text-gray-700 dark:text-gray-300 mb-4 two-lines">
                    Dirigido a estudiantes de Psicología Organizacional, Recursos Humanos, Ing. Industrial (enfocada en RR.HH)
                    </p>
                    <a href="#"
                        class="inline-block bg-primarytext hover:bg-indigo-600 text-white px-4 py-2 rounded-full">Postula Aquí</a>
                </div>
            </div>

            <div class="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Heroicons" class="w-full h-64 object-cover"/>
                <div class="p-4 md:p-6">
                    <h3 class="text-xl font-semibold text-primarycolor dark:text-purple-300 mb-2">Equipo de comunicaciones y marketing</h3>
                    <p class="text-gray-700 dark:text-gray-300 mb-4 two-lines">Dirigido a estudiantes de las carreras de Comunicaciones, Marketing, Diseño gráfico, Edición de video, Fotografía, y afines.</p>
                    <a href="#"
                        class="inline-block bg-primarycolor hover:bg-purple-600 text-white px-4 py-2 rounded-full">Postula Aquí</a>
                </div>
            </div>

            <div class="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                <img src="https://plus.unsplash.com/premium_photo-1665203665548-8e13eb98256c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Hero Patterns" class="w-full h-64 object-cover"/>
                <div class="p-4 md:p-6">
                    <h3 class="text-xl font-semibold text-[#BD51FF] dark:text-cyan-300 mb-2">Equipo de administración y finanzas</h3>
                    <p class="text-gray-700 dark:text-gray-300 mb-4 two-lines">Dirigido a estudiantes de Administración, contabilidad, finanzas, economía y afines.</p>
                    <a href="#"
                        class="inline-block bg-[#BD51FF] hover:bg-cyan-600 text-white px-4 py-2 rounded-full">Postula Aquí</a>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default AreasPracticantes