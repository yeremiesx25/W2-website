import React from 'react'
import fondo from '../../assets/Web 3.jpg'
import imgHero from '../../assets/imgPracticas.png'
import Descubre from './Descubre'
function HeroPracticantes() {

  return (
    <div class="flex flex-wrap pt-12 font-dmsans">
        <div className="area h-full hidden md:block">
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
    <div class="w-full sm:w-8/12 mb-10">
      <div class="container mx-auto h-full sm:p-10">
        <nav class="flex px-4 justify-between items-center">
          <div>
            <img src="https://image.flaticon.com/icons/svg/497/497348.svg" alt="" class="w-8"/>
          </div>
        </nav>
        <header class="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
          <div class="w-full">
            <h1 class="text-4xl lg:text-6xl font-bold">Programa de <span class="text-primarycolor">Prácticas</span> preprofesionales</h1>
            <div class="w-20 h-2 bg-primarycolor my-4"></div>
            <p class="md:text-xl mb-10">Un programa diseñado para estudiantes de los últimos ciclos que buscan formarse y formar parte de W2. Nos esforzamos por preparar a los estudiantes para enfrentar los desafíos del mundo laboral al brindarles oportunidades prácticas que complementen su formación académica. No buscamos experiencia, buscamos descubrir talento y pasión.</p>
            <button class="bg-primarycolor text-white text-2xl font-medium px-4 py-2 rounded-lg shadow">Postular al programa</button>
          </div>
        </header>
      </div>
    </div>
    <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Leafs" class="w-full h-48 object-cover sm:h-screen sm:w-4/12"/>
  </div>
  )
}

export default HeroPracticantes