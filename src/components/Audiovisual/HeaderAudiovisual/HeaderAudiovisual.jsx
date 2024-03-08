import React from 'react';
import './HeaderAudiovisual.css';

export const HeaderAudiovisual = ({ contenido }) => {
  return (
    <div className='audiovisual-header-container'>
      <a
        href={contenido.link_youtube}
        target='_blank'
        rel='noopener noreferrer'
      >
        <h3>{contenido.nombre}</h3>{' '}
      </a>
    </div>
  );
};
