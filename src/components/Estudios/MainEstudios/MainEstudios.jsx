import React from 'react';
import './MainEstudios.css';

import { v4 as uuidv4 } from 'uuid';

export const MainEstudios = ({ estudio }) => {
  return (
    <div className='estudio-descripcion'>
      <ul>
        {estudio.contenido.map((cont) => (
          <li key={uuidv4()}>{cont}</li>
        ))}
      </ul>
    </div>
  );
};
