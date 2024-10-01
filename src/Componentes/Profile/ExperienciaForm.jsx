import React from 'react';

const ExperienciaForm = ({ formData, handleChange, editMode }) => {
  return (
    <div className="w-full lg:w-1/2 p-4">
      <h2 className="text-lg font-medium mb-4">Experiencia Laboral</h2>

      {/* Cargo 1 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Cargo 1</label>
        <input
          type="text"
          name="cargo_1"
          value={formData.cargo_1}
          onChange={handleChange}
          readOnly={!editMode}
          className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
            editMode ? 'border-gray-300' : 'bg-gray-100'
          }`}
        />
      </div>

      {/* Empresa 1 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Empresa 1</label>
        <input
          type="text"
          name="empresa_1"
          value={formData.empresa_1}
          onChange={handleChange}
          readOnly={!editMode}
          className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
            editMode ? 'border-gray-300' : 'bg-gray-100'
          }`}
        />
      </div>

      {/* Tiempo 1 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Tiempo 1</label>
        <input
          type="text"
          name="tiempo_1"
          value={formData.tiempo_1}
          onChange={handleChange}
          readOnly={!editMode}
          className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
            editMode ? 'border-gray-300' : 'bg-gray-100'
          }`}
        />
      </div>

      {/* Función 1 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Función 1</label>
        <input
          type="text"
          name="funcion_1"
          value={formData.funcion_1}
          onChange={handleChange}
          readOnly={!editMode}
          className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
            editMode ? 'border-gray-300' : 'bg-gray-100'
          }`}
        />
      </div>

      {/* Cargo 2 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Cargo 2</label>
        <input
          type="text"
          name="cargo_2"
          value={formData.cargo_2}
          onChange={handleChange}
          readOnly={!editMode}
          className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
            editMode ? 'border-gray-300' : 'bg-gray-100'
          }`}
        />
      </div>

      {/* Empresa 2 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Empresa 2</label>
        <input
          type="text"
          name="empresa_2"
          value={formData.empresa_2}
          onChange={handleChange}
          readOnly={!editMode}
          className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
            editMode ? 'border-gray-300' : 'bg-gray-100'
          }`}
        />
      </div>

      {/* Tiempo 2 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Tiempo 2</label>
        <input
          type="text"
          name="tiempo_2"
          value={formData.tiempo_2}
          onChange={handleChange}
          readOnly={!editMode}
          className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
            editMode ? 'border-gray-300' : 'bg-gray-100'
          }`}
        />
      </div>

      {/* Función 2 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Función 2</label>
        <input
          type="text"
          name="funcion_2"
          value={formData.funcion_2}
          onChange={handleChange}
          readOnly={!editMode}
          className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
            editMode ? 'border-gray-300' : 'bg-gray-100'
          }`}
        />
      </div>

      <h2 className="text-lg font-medium mt-6 mb-4">Estudios</h2>

      {/* Estudio */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Estudio</label>
        <input
          type="text"
          name="estudio"
          value={formData.estudio}
          onChange={handleChange}
          readOnly={!editMode}
          className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
            editMode ? 'border-gray-300' : 'bg-gray-100'
          }`}
        />
      </div>

      {/* Institución */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Institución</label>
        <input
          type="text"
          name="institucion"
          value={formData.institucion}
          onChange={handleChange}
          readOnly={!editMode}
          className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
            editMode ? 'border-gray-300' : 'bg-gray-100'
          }`}
        />
      </div>

      {/* Año */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Año</label>
        <input
          type="text"
          name="año"
          value={formData.año}
          onChange={handleChange}
          readOnly={!editMode}
          className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
            editMode ? 'border-gray-300' : 'bg-gray-100'
          }`}
        />
      </div>

      <h2 className="text-lg font-medium mt-6 mb-4">Subir CV</h2>

      {/* URL del CV */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">URL del CV</label>
        <input
          type="text"
          name="cv_url"
          value={formData.cv_url}
          onChange={handleChange}
          readOnly={!editMode}
          className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
            editMode ? 'border-gray-300' : 'bg-gray-100'
          }`}
        />
      </div>

      {/* Nombre del archivo del CV */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Nombre del archivo del CV</label>
        <input
          type="text"
          name="cv_file_name"
          value={formData.cv_file_name}
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
