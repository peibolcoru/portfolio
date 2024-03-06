import React from 'react';
import './Tecnologia.css';

import { v4 as uuidv4 } from 'uuid';

export const Tecnologia = ({ contenido }) => {
  console.log(contenido);
  return (
    <div className='lenguaje-container'>
      <div className='nombre-lenguaje'>
      <h3>{contenido.nombre}</h3>
      <img src={`../../../../assets/iconos/tecnologias/${contenido.nombre}.svg`} alt="" />
      <img src={`../../../../../public/iconos/tecnologias/${contenido.nombre}.svg`} alt="" />
      </div>
      <div className='proyectos-container-tech'>
        <h4>Proyectos: </h4>
        {contenido.proyectos.map((item) => (
          <div key={uuidv4()}>
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div className='formacion-container-tech'>
        <h4>Formacion: </h4>
        {contenido.formacion.map((item) => (
          <div key={uuidv4()}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
