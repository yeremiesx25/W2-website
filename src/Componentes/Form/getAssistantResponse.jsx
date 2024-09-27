import axios from 'axios';
import { supabase } from '../../supabase/supabase.config'; 

// Función para obtener la clave desde Supabase
const obtenerClave = async () => {
  try {
    const { data, error } = await supabase
      .from('Claves')
      .select('clave')
      .single();
      
    if (error) {
      throw error;
    }

    return data.clave;  // Retorna el valor de la clave obtenida
  } catch (error) {
    console.error('Error al obtener la clave:', error);
    return null;
  }
};

// Función para obtener la respuesta del asistente utilizando la clave obtenida
const getAssistantResponse = async (message) => {
  try {
    const apiKey = await obtenerClave();  // Obtener la clave desde Supabase

    if (!apiKey) {
      throw new Error('No se pudo obtener la API key');
    }

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: `
              Eres un asistente encargado de crear ofertas de trabajo atractivas y efectivas para puestos de trabajo operativos deben contener (Título de la oferta, descripción del puesto, requisitos, funciones, beneficios y horario). 
              Genera la oferta en formato HTML utilizando las siguientes etiquetas:
              - <strong> para el título y subtitulos.
              - <ul> y <li> para listas de funciones, requisitos y beneficios.
              Asegúrate de incluir un formato claro y fácil de leer.
            `},
          { role: 'user', content: message }
        ],
        temperature: 0.7,
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error fetching response:', error);
    return null;
  }
};

export default getAssistantResponse;
