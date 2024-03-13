import React from 'react'
import './Estudios.css'

import { HeaderEstudios } from './HeaderEstudios/HeaderEstudios'
import { MainEstudios } from './MainEstudios/MainEstudios'

export const Estudios = ({estudio}) => {
    
  return    (

    <div>
        <HeaderEstudios estudio={estudio}/>
        <MainEstudios estudio={estudio}/>
    </div>
  )
}
