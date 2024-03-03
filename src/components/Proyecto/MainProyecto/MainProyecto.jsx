import React from 'react'
import "./MainProyecto.css"

import { v4 as uuidv4 } from 'uuid';

export const MainProyecto = ({proyecto}) => {
  return (
    <div className='proyecto-descripcion'>
        <p>CREADO POR: {proyecto.creador}</p>
        {proyecto.descripcion.map((text) => (
          <p key={uuidv4()}>{text}</p>
        ))}
      </div>
  )
}
