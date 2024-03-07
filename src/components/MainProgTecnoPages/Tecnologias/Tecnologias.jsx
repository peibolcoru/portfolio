import React from 'react'
import './Tecnologias.css';

import { v4 as uuidv4 } from 'uuid';

import { Tecnologia } from './Tecnologia/Tecnologia';

export const Tecnologias = ({contenido,setDisplay}) => {
  return (
    <div className='lenguajes-container'>
        {
        contenido && contenido.map((item)=>(
            <Tecnologia key={uuidv4()} contenido={item} setDisplay={setDisplay}/>
            
        ))
        }
    </div>
  )
}
