import React from 'react'
import './MainAudiovisualPages.css';
import { Audiovisual } from '../Audiovisual/Audiovisual';

export const MainAudiovisualPages = ({contenido}) => {
  return (
    <div className='audiovisuales-container'>
      {
        contenido && contenido.map((item)=>(
          <div key={item.id} >
             <Audiovisual contenido={item}/>
          <hr />
          </div>
         
        ))
      } 
    </div>
  )
}
