import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './MoreTech.css';

export const MoreTech = ({ contenido }) => {
  return (
    <div>
      {' '}
      <h4>Proyectos: </h4>
      <div className='moretech-container-tech'>
        {contenido.proyectos.map((item) => (
          <div key={uuidv4()}>
            <p>- {item}</p>
          </div>
        ))}
      </div>
      <h4>Formacion: </h4>
      <div className='moretech-container-tech'>
        {contenido.formacion.map((item) => (
          <div key={uuidv4()}>
            <p>- {item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
