import React from 'react';
import './FooterProyecto.css';

import { Enlaces } from './Enlaces/Enlaces';
import { Tecnologias } from './Tecnologias/Tecnologias';

export const FooterProyecto = ({ proyecto }) => {
  return (
    <div className='links-container'>
      <Enlaces proyecto={proyecto} />
      <Tecnologias proyecto={proyecto} />
    </div>
  );
};
