import React, { useState, useEffect } from 'react';

const FormButton = () => {
  const handleClick = () => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://cdn.bitrix24.es/b29057555/crm/form/loader_10.js?' + (Date.now() / 180000 | 0);
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript.nextSibling);
  };


  return (
    <button onClick={handleClick}>Abrir Formulario de Bitrix</button>
  );
};

export default FormButton;
