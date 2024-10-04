import React from 'react';

const ExperienciaForm = ({ formData, handleChange, editMode }) => {
  return (
    <div className="w-full lg:full bg-white border border-primarycolor border-opacity-30 p-6 rounded-lg">
      <h2 className="text-xl text-gray-800 mb-4">Experiencia Laboral</h2>

      {/* Experiencia 1 */}
      <h3 className='text-lg text-gray-800 mb-4'>Experiencia 1</h3>
      <div className='w-full flex justify-between flex-wrap'>
        <div className="mb-4 w-full md:w-2/5">
          <label className="block text-sm text-gray-700">Nombre del Cargo</label>
          <input
            type="text"
            name="cargo_1"
            placeholder="Ingrese el nombre del Puesto"
            value={formData.cargo_1 || ''}
            onChange={handleChange}
            readOnly={!editMode}
            className={`mt-1 block w-full px-3 py-2 border border-primarycolor border-opacity-40 rounded-md shadow-sm focus:outline-none text-gray-800 sm:text-sm ${
              editMode ? 'border-gray-300' : 'bg-gray-100'
            }`}
          />
        </div>

        <div className="mb-4 w-full md:w-2/5">
          <label className="block text-sm text-gray-700">Nombre de la Empresa</label>
          <input
            type="text"
            name="empresa_1"
            placeholder="Ingrese el nombre de la Empresa"
            value={formData.empresa_1 || ''}
            onChange={handleChange}
            readOnly={!editMode}
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
              editMode ? 'border-gray-300' : 'bg-gray-100'
            }`}
          />
        </div>
      </div>

      <div className='w-full flex justify-between flex-wrap'>
        <div className="mb-4 w-full md:w-2/5">
          <label className="block text-sm text-gray-700">Tiempo de Labor</label>
          <input
            type="text"
            name="tiempo_1"
            placeholder="Ejem: Nov. 2022 a Oct. 2023"
            value={formData.tiempo_1 || ''}
            onChange={handleChange}
            readOnly={!editMode}
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
              editMode ? 'border-gray-300' : 'bg-gray-100'
            }`}
          />
        </div>

        <div className="mb-4 w-full md:w-2/5">
          <label className="block text-sm text-gray-700">Principales Funciones</label>
          <input
            type="text"
            name="funcion_1"
            placeholder="Ingrese sus principales Funciones"
            value={formData.funcion_1 || ''}
            onChange={handleChange}
            readOnly={!editMode}
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
              editMode ? 'border-gray-300' : 'bg-gray-100'
            }`}
          />
        </div>
      </div>

      {/* Experiencia 2 */}
      <h3 className='text-lg text-gray-800 mb-4'>Experiencia 2</h3>
      <div className='w-full flex justify-between flex-wrap'>
        <div className="mb-4 w-full md:w-2/5">
          <label className="block text-sm text-gray-700">Nombre del Cargo</label>
          <input
            type="text"
            name="cargo_2"
            placeholder="Ingrese el nombre del Puesto"
            value={formData.cargo_2 || ''}
            onChange={handleChange}
            readOnly={!editMode}
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
              editMode ? 'border-gray-300' : 'bg-gray-100'
            }`}
          />
        </div>

        <div className="mb-4 w-full md:w-2/5">
          <label className="block text-sm font-medium text-gray-700">Nombre de la Empresa</label>
          <input
            type="text"
            name="empresa_2"
            placeholder="Ingrese el nombre de la Empresa"
            value={formData.empresa_2 || ''}
            onChange={handleChange}
            readOnly={!editMode}
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
              editMode ? 'border-gray-300' : 'bg-gray-100'
            }`}
          />
        </div>
      </div>

      <div className='w-full flex justify-between flex-wrap'>
        <div className="mb-4 w-full md:w-2/5">
          <label className="block text-sm font-medium text-gray-700">Tiempo de Labor</label>
          <input
            type="text"
            name="tiempo_2"
            placeholder="Ejem: Nov. 2022 a Oct. 2023"
            value={formData.tiempo_2 || ''}
            onChange={handleChange}
            readOnly={!editMode}
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
              editMode ? 'border-gray-300' : 'bg-gray-100'
            }`}
          />
        </div>

        <div className="mb-4 w-full md:w-2/5">
          <label className="block text-sm font-medium text-gray-700">Principales Funciones</label>
          <input
            type="text"
            name="funcion_2"
            placeholder="Ingrese sus principales Funciones"
            value={formData.funcion_2 || ''}
            onChange={handleChange}
            readOnly={!editMode}
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
              editMode ? 'border-gray-300' : 'bg-gray-100'
            }`}
          />
        </div>
      </div>

      {/* Grado Académico */}
      <h2 className="text-lg font-medium mt-6 mb-4">Grado Académico</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Último Grado Académico</label>
        <select
          name="estudio"
          value={formData.estudio || ''}
          onChange={handleChange}
          disabled={!editMode}
          className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-600 ${
            editMode ? 'border-2 border-indigo-500' : 'bg-gray-50'
          } py-2 px-3`}
        >
          <option value="">Seleccione</option>
          <option value="Secundaria Incompleta">Secundaria Incompleta</option>
          <option value="Secundaria Completa">Secundaria Completa</option>
          <option value="Técnico Incompleto">Técnico Incompleto</option>
          <option value="Técnico Completo">Técnico Completo</option>
          <option value="Universitario Incompleto">Universitario Incompleto</option>
          <option value="Universitario Completo">Universitario Completo</option>
          <option value="Postgrado">Postgrado</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Institución</label>
        <input
          type="text"
          name="institucion"
          value={formData.institucion || ''}
          onChange={handleChange}
          readOnly={!editMode}
          className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
            editMode ? 'border-gray-300' : 'bg-gray-100'
          }`}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Ultimo Año de Estudio</label>
        <input
          type="text"
          name="año"
          value={formData.año || ''}
          onChange={handleChange}
          readOnly={!editMode}
          className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
            editMode ? 'border-gray-300' : 'bg-gray-100'
          }`}
        />
      </div>
    </div>
  );
};

export default ExperienciaForm;