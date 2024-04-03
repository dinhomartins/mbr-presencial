// WhatsAppButton.js

import React from 'react';

const WhattsFlutuante = ({ phoneNumber }) => {
  const message = 'Adorei seu artigo';

  const handleClick = () => {
    const whatsappLink = 'https://wa.me/5561984408039?text=Ol%C3%A1%2C+estou+vindo+da+p%C3%A1gina+de+inscri%C3%A7%C3%A3o+do+EBR+e+preciso+tirar+algumas+d%C3%BAvidas';
    window.open(whatsappLink, '_blank');
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '40px',
        right: '40px',
        backgroundColor: '#25d366',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        color: '#fff',
        cursor: 'pointer',
        boxShadow: '1px 1px 2px #888',
        zIndex: '1000',
      }}
      onClick={handleClick}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/64px-WhatsApp_logo-color-vertical.svg.png"
        alt="WhatsApp"
        style={{ width: '50%', height: 'auto' }}
      />
    </div>
  );
};

export default WhattsFlutuante;