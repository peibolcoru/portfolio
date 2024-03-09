import React from 'react'
import './FooterAudiovisual.css';
export const FooterAudiovisual = ({contenido}) => {
    console.log(contenido.programas)
  return (
    <div className='footerAudiovisual-container'>
      <p>tecnologías:</p>
      <div className='audiovisual-iconos-container'>
        {contenido.programas.map((programa)=>(
            <img src={`/public/iconos/audiovisuales/${programa}.svg`} alt="" />
        ))}
      </div>
        
    </div>
  )
}
