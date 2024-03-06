import React from 'react'
import './MainProgTecnoPages.css'
import { Tecnologias } from './Tecnologias/Tecnologias'

export const MainProgTecno = ({contenido}) => {
 
  return (
    <div className='progTeckContainer'>
      <h1>lenguajes</h1>
      <Tecnologias contenido={contenido.lenguajes}/>
      <h1>entornos</h1>
      <Tecnologias contenido={contenido.entornos}/>
      <h1>bibliotecas</h1>
      <Tecnologias contenido={contenido.bibliotecas}/>
      <h1>servidores de desarrollo</h1>
      <Tecnologias contenido={contenido.servidoresdedesarrollo}/>
      <h1>bases de datos</h1>
      <Tecnologias contenido={contenido.basesdedatos}/>
      <h1>frameworks</h1>
      <Tecnologias contenido={contenido.frameworks}/>
      
    </div>
  )
}
