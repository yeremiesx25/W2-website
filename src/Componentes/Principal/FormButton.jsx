import React, { useState, useEffect } from 'react';

const FormButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [formLoaded, setFormLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.bitrix24.es/b29057555/crm/form/loader_10.js';
    script.async = true;
    script.onload = () => {
      setFormLoaded(true);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="content-wrap">
      <div className="content">
        <button className="ui-btn" onClick={toggleModal} style={{ margin: '30px auto', display: 'block', fontSize: '1.3em' }}>
          Preview
        </button>
        {showModal && (
          <div className="modal">
            <div className="modal-content" style={{ border: '3px solid lightgray', margin: '0 auto', borderRadius: '10px', padding: '30px' }}>
              {formLoaded && (
                <div>
                  {/* Aquí puedes agregar tu formulario */}
                  <div data-b24-form="click/10/ex701t" data-skip-moving="true"></div>
                  <button className="ui-btn" onClick={toggleModal} style={{ margin: '30px auto', display: 'block', fontSize: '1.3em' }}>Cerrar</button>
                </div>
              )}
              {!formLoaded && <p>Cargando formulario...</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormButton;
