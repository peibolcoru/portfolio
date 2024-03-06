import React from 'react'
import './Tecnologias.css';

import { v4 as uuidv4 } from 'uuid';

import { Tecnologia } from './Tecnologia/Tecnologia';

export const Tecnologias = ({contenido}) => {
    console.log(contenido)
  return (
    <div className='lenguajes-container'>
        {
        contenido && contenido.map((item)=>(
            <Tecnologia key={uuidv4()} contenido={item}/>
            
        ))
        }
    </div>
  )
}
