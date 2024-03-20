import './MainProgPages.css';
import { Proyecto } from '../Proyecto/Proyecto';
import React, { useEffect, useState } from 'react';


export const MainProgPages = ({contenido}) => {

  const [renderIndex, setRenderIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (renderIndex < contenido.length - 1) {
        setRenderIndex(renderIndex + 1);
      }
    }, 300); // Cambia este valor al retardo deseado (en milisegundos)
    
    return () => clearTimeout(timeout);
  }, [renderIndex, contenido]);

  return (
    <div className='proyectos-container'>
        {
            contenido && contenido.slice(0, renderIndex + 1).map((item)=>(
              <React.Fragment key={item.id}>
                <Proyecto proyecto={item} key={item.id}/>
                <hr className='slide-left'/>
              </React.Fragment>
            ))
        }
    </div>
  )
}
