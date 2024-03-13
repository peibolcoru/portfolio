import React from 'react'
import './EstudiosExp.css'

import { HeaderEstudiosExp } from './HeaderEstudiosExp/HeaderEstudiosExp'
import { MainEstudiosExp } from './MainEstudiosExp/MainEstudiosExp'

export const EstudiosExp = ({estudioExp}) => {
    
  return    (

    <div>
        <HeaderEstudiosExp estudioExp={estudioExp}/>
        <MainEstudiosExp estudioExp={estudioExp}/>
    </div>
  )
}
