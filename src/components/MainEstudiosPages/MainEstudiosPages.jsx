import React from 'react';
import './MainEstudiosPages.css';
import { Estudios } from '../Estudios/Estudios';

export const MainEstudiosPages = ({ estudios }) => {
  return (
    <div className='estudios-container'>
      {estudios &&
        estudios.map((estudio) => (
          <div className="estudio-container" key={estudio.id} >
            <Estudios estudio={estudio} />
            <hr />
          </div>
        ))}
    </div>
  );
};
