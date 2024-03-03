import React from 'react'
import './MainPages.css';
import { Proyecto } from '../Proyecto/Proyecto';


export const MainPages = ({contenido}) => {
    
  return (
    <div className='proyectos-container'>
        {
            contenido && contenido.map((item)=>(
              <React.Fragment key={item.id}>
                <Proyecto proyecto={item} key={item.id}/>
                <hr />
              </React.Fragment>
            ))
        }
    </div>
  )
}
