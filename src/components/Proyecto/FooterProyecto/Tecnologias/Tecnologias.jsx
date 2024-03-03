import React from 'react';
import './Tecnologias.css';

import { v4 as uuidv4 } from 'uuid';

import css from '../../../../assets/iconos/tecnologias/css.svg';
import html from '../../../../assets/iconos/tecnologias/html.svg';
import javascript from '../../../../assets/iconos/tecnologias/javascript.svg';
import mysql from '../../../../assets/iconos/tecnologias/mysql.svg';
import node from '../../../../assets/iconos/tecnologias/node.svg';
import react from '../../../../assets/iconos/tecnologias/react.svg';

export const Tecnologias = ({ proyecto }) => {
  const tecnologias = {
    css,
    html,
    javascript,
    mysql,
    node,
    react,
  };

  return (
    <div className='tecnologias-proyecto'>
      <p>tecnologias</p>
      <div className='logos_programacion-container'>
        {proyecto.logos_programacion.map((logo) => (
          <img
            className='logo-programacion-icon'
            src={tecnologias[logo]}
            alt={logo}
            title={logo}
            key={uuidv4()}
          />
        ))}
      </div>
    </div>
  );
};
