import React from 'react';
import './Proyecto.css';

import { v4 as uuidv4 } from 'uuid';

import gitIcon from '../../assets/iconos/icons-github.svg';
import youtubeIcon from '../../assets/iconos/icons8-youtube.svg';

import css from '../../assets/iconos/tecnologias/css.svg';
import html from '../../assets/iconos/tecnologias/html.svg';
import javascript from '../../assets/iconos/tecnologias/javascript.svg';
import mysql from '../../assets/iconos/tecnologias/mysql.svg';
import node from '../../assets/iconos/tecnologias/node.svg';
import react from '../../assets/iconos/tecnologias/react.svg';

export const Proyecto = ({ proyecto }) => {
  const tecnologias = {
    css,
    html,
    javascript,
    mysql,
    node,
    react,
  };

  return (
    <div className='proyecto-container'>
      <a
        href={proyecto.link_aplicacion}
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className='proyecto-header-container'>
          <h3>{proyecto.nombre}</h3>
          <img src={proyecto.logo} alt='hack a news' title='hack a news' />
        </div>
      </a>

      <div className='proyecto-descripcion'>
        <p>CREADO POR: {proyecto.creador}</p>
        {proyecto.descripcion.map((text) => (
          <p key={uuidv4()}>{text}</p>
        ))}
      </div>
      <div className='links-proyecto'>
        <p>enlaces</p>
        <div className='icons-container'>
          <div className='proyecto-gitHubLinks'>
            {proyecto.Github.map((item) => (
              <a
                key={uuidv4()}
                href={item}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={gitIcon} alt='' />
              </a>
            ))}
          </div>
          <div className='youtubeLink'>
            <a
              href={proyecto.Youtube_link}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className='youtube-icon' src={youtubeIcon} alt='' />
            </a>
          </div>
        </div>
      </div>
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
    </div>
  );
};
