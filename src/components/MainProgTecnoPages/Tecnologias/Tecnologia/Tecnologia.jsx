import React, { useState } from 'react';
import './Tecnologia.css';

import { v4 as uuidv4 } from 'uuid';

export const Tecnologia = ({ contenido,setDisplay }) => {
  const [selectIcon,setSelectIcon] = useState("");
  const handleClick = async ()=>{  
      setSelectIcon(selectIcon === '' ? 'select' : '')
      setDisplay(contenido.nombre);
  }
  console.log(selectIcon)
  return (
    <div className={`lenguaje-container ${selectIcon}`} onClick={handleClick}>
      
      <h3 >{contenido.nombre}</h3>
      <img  src={`../../../../../public/iconos/tecnologias/${contenido.nombre}.svg`} alt="" /> 
      
    </div>
  );
};
