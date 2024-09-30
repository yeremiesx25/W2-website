import React from 'react';

const ExperienciaForm = ({ formData, handleChange }) => {
  return (
    <div>
      <h2>Experiencia Laboral</h2>
      <div>
        <label>Cargo 1:</label>
        <input
          type="text"
          name="cargo_1"
          value={formData.cargo_1}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Empresa 1:</label>
        <input
          type="text"
          name="empresa_1"
          value={formData.empresa_1}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Tiempo 1:</label>
        <input
          type="text"
          name="tiempo_1"
          value={formData.tiempo_1}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Función 1:</label>
        <input
          type="text"
          name="funcion_1"
          value={formData.funcion_1}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Cargo 2:</label>
        <input
          type="text"
          name="cargo_2"
          value={formData.cargo_2}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Empresa 2:</label>
        <input
          type="text"
          name="empresa_2"
          value={formData.empresa_2}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Tiempo 2:</label>
        <input
          type="text"
          name="tiempo_2"
          value={formData.tiempo_2}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Función 2:</label>
        <input
          type="text"
          name="funcion_2"
          value={formData.funcion_2}
          onChange={handleChange}
        />
      </div>

      <h2>Estudios</h2>
      <div>
        <label>Estudio:</label>
        <input
          type="text"
          name="estudio"
          value={formData.estudio}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Institución:</label>
        <input
          type="text"
          name="institucion"
          value={formData.institucion}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Año:</label>
        <input
          type="text"
          name="año"
          value={formData.año}
          onChange={handleChange}
        />
      </div>

      <h2>Subir CV</h2>
      <div>
        <label>URL del CV:</label>
        <input
          type="text"
          name="cv_url"
          value={formData.cv_url}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Nombre del archivo del CV:</label>
        <input
          type="text"
          name="cv_file_name"
          value={formData.cv_file_name}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ExperienciaForm;