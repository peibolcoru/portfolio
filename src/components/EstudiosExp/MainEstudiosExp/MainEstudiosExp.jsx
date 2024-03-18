import React from 'react';
import './MainEstudiosExp.css';

import { v4 as uuidv4 } from 'uuid';

export const MainEstudiosExp = ({ estudioExp }) => {
  return (
    <div className='estudioExp-descripcion'>
      <ul>
        {estudioExp?.contenido.map((cont) => (
          <li key={uuidv4()}>{cont}</li>
        ))}
      </ul>
    </div>
  );
};
