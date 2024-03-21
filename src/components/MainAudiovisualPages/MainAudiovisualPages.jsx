import React, { useEffect, useState } from 'react'
import './MainAudiovisualPages.css';
import { Audiovisual } from '../Audiovisual/Audiovisual';

export const MainAudiovisualPages = ({contenido}) => {

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
    <div className='audiovisuales-container'>
      {
        contenido && contenido.slice(0, renderIndex + 1).map((item)=>(
          <div key={item.id} >
             <Audiovisual contenido={item}/>
          <hr className='slide-left'/>
          </div>
         
        ))
      } 
    </div>
  )
}
