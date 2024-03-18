import './Tecnologias.css';

import { v4 as uuidv4 } from 'uuid';

import css from '../../../../assets/iconos/tecnologias/css.svg';
import html from '../../../../assets/iconos/tecnologias/html.svg';
import javascript from '../../../../assets/iconos/tecnologias/javascript.svg';
import mysql from '../../../../assets/iconos/tecnologias/mysql.svg';
import node from '../../../../assets/iconos/tecnologias/nodejs.svg';
import react from '../../../../assets/iconos/tecnologias/react.svg';
import  php from '../../../../assets/iconos/tecnologias/php.svg';
import mariadb from '../../../../assets/iconos/tecnologias/mariadb.svg';
import bootstrap from '../../../../assets/iconos/tecnologias/bootstrap.svg'
import material from '../../../../assets/iconos/tecnologias/material ui.svg'

export const Tecnologias = ({ proyecto }) => {
  const tecnologias = {
    php,
    css,
    html,
    javascript,
    mysql,
    node,
    react,
    mariadb,
    bootstrap,
    material
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
