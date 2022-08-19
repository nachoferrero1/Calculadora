import React from 'react';
import logoCalculadora from '../imagenes/logo-calculadora.png';

function Logo () {
    return (
        <div className='freecodecamp-logo-contenedor'>
        <img
        src={logoCalculadora}
        className='freecodecamp-logo'
        alt='Logo' />
      </div>
    );
};

export default Logo;