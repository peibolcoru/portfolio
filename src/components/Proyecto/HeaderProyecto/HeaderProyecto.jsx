import React from 'react'
import './HeaderProyecto.css';
export const HeaderProyecto = ({proyecto}) => {
  return (
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

  )
}
