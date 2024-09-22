import axios from 'axios';
import { supabase } from '../../supabase/supabase.config';  // Importa tu configuración de Supabase ya existente

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
          { role: 'system', content: 'Eres un asistente encargado de crear ofertas de trabajo atractivas y efectivas para puesto de trabajo operativo, eres capaz de generar el título del puesto, descripción, funciones, requisitos, beneficios, horario' },
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
