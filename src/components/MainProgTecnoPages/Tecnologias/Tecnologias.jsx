import './Tecnologias.css';

import { v4 as uuidv4 } from 'uuid';

import { Tecnologia } from './Tecnologia/Tecnologia';
import { useState } from 'react';

export const Tecnologias = ({contenido,setDisplay,selectIcon,setSelectIcon}) => {

  

  return (
    <div className='lenguajes-container animate__animated animate__bounceInLeft'>
        {
        contenido && contenido.map((item)=>(
            <Tecnologia key={uuidv4()} contenido={item} setDisplay={setDisplay} selectIcon={selectIcon} setSelectIcon={setSelectIcon}/>
            
        ))
        }
    </div>
  )
}
