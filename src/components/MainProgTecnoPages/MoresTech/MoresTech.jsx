import React from 'react'
import './MoresTech.css';
import { v4 as uuidv4 } from 'uuid';
import { MoreTech } from './MoreTech/MoreTech';
export const MoresTech = ({contenido, display}) => {
  return (
    <div className={`morestech-container ${display ? 'display' : ''}`}>
        {
        contenido && contenido.map((item)=>(
            item.nombre === display && <MoreTech key={uuidv4()} contenido={item} display={display}/>
        ))
        }
    </div>
  )
}
