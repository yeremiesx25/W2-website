import axios from 'axios';

const apiKey = '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';

const getAssistantResponse = async (message) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'system', content: 'Eres un asistente encargado de crear ofertas de trabajo atractivas y efectivas para puesto de trabajo operativo, eres capaz de generar el título del puesto, descripción, funciones, requisitos, beneficios, horario' }, { role: 'user', content: message }],
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
