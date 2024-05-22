import React from "react";

function ContainerVideos() {
  return (
    <div className="flex flex-wrap w-full justify-center gap-6">
      <div class="flex items-center justify-center bg-gray-100">
        <div class="bg-white rounded-lg shadow-lg max-w-sm">
            <div class="p-4">
                <iframe class="w-full h-64 rounded-t-lg" src="https://www.youtube.com/embed/y6QCWOeP-fM?si=WpwU0NuIiIkgh1BW" title="¿Cómo usar Teams?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h2 class="text-xl font-bold mt-4">¿Cómo usar Teams?</h2>
                <p class="text-gray-700 mt-2">Te enseñaremos cómo instalarlo, y configurarlo para tu proxima entrevista laboral con el equipo W2.</p>
            </div>
        </div>
    </div>

    <div class="flex items-center justify-center bg-gray-100">
        <div class="bg-white rounded-lg shadow-lg max-w-sm">
            <div class="p-4">
                <iframe class="w-full h-64 rounded-t-lg" src="https://www.youtube.com/embed/cHMsl3J356s?si=0IC74lRP3wrb6UlP" title="¿Cómo usar Teams?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h2 class="text-xl font-bold mt-4">¿Cómo usar Zoom?</h2>
                <p class="text-gray-700 mt-2">Te enseñaremos cómo instalarlo, y configurarlo para tu proxima entrevista laboral con el equipo W2.</p>
            </div>
        </div>
    </div>

    <div class="flex items-center justify-center bg-gray-100">
        <div class="bg-white rounded-lg shadow-lg max-w-sm">
            <div class="p-4">
                <iframe class="w-full h-64 rounded-t-lg" src="https://www.youtube.com/embed/PzgnJPTt4fY?si=loHs2JW3zgBxzZMY" title="¿Cómo usar Teams?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h2 class="text-xl font-bold mt-4">Preparate para tu Entrevista</h2>
                <p class="text-gray-700 mt-2">Te asesoraremos durante cada una de las etapas <span className="font-semibold text-amber-500"> ANTES - DURANTE - DESPUES </span>en tu entrevista laboral.</p>
            </div>
        </div>
    </div>
    </div>
  );
}

export default ContainerVideos;
