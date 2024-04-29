import React from 'react'

function Buscador() {
  return (
    <form class="flex flex-col md:flex-row gap-3 shadow-md p-4 rounded-lg mt-4 mb-12 w-[320px] md:w-1/2">
        <span></span><input type="text" placeholder="Buscar puesto de trabajo"
			class="w-full md:w-80 px-3 h-10 border-b-2 border-sky-500 focus:outline-none focus:border-amber-200"
			/>
    <span></span><select id="Buscador" name="Buscador"
		class="w-48 h-10 border-b-2 border-amber-200 focus:outline-none focus:border-amber-200 text-sky-500 px-2 md:px-3 py-0 md:py-1 tracking-wider bg-white">
		<option value="Lima">Lima</option>
		<option value="Arequipa">Arequipa</option>
		<option value="Piura">Piura</option>
	</select>
    <button type="submit" class="bg-amber-400 text-white rounded-lg px-2 md:px-3 py-0 md:py-1 h-12 min-w-32 md:ml-4">Buscar</button>
</form>
  )
}

export default Buscador