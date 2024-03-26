import { useState } from 'react';
import './Tecnologia.css';

import Javascript from '../../../../assets/iconos/tecnologias/javascript.svg'
import PHP from '../../../../assets/iconos/tecnologias/php.svg';
import CSS from '../../../../assets/iconos/tecnologias/css.svg';
import Html from '../../../../assets/iconos/tecnologias/html.svg';
import SQL from '../../../../assets/iconos/tecnologias/sql.svg';
import NodeJs from '../../../../assets/iconos/tecnologias/nodejs.svg';
import mysql from '../../../../assets/iconos/tecnologias/mysql.svg';
import React from '../../../../assets/iconos/tecnologias/react.svg'
import jQuery from '../../../../assets/iconos/tecnologias/jquery.svg'
import Vite from '../../../../assets/iconos/tecnologias/vite.svg'
import MySQL from '../../../../assets/iconos/tecnologias/mysql.svg'
import MariaDB from '../../../../assets/iconos/tecnologias/mariadb.svg'
import Postman from '../../../../assets/iconos/tecnologias/postman.svg'
import Bootstrap from '../../../../assets/iconos/tecnologias/bootstrap.svg'
import Material from '../../../../assets/iconos/tecnologias/material ui.svg'

const tecnologias = {
  Javascript,
  PHP,
  CSS,
  Html,
  SQL,
  NodeJs,
  React,
  mysql,
  jQuery,
  Vite,
  MySQL,
  MariaDB,
  Postman,
  Bootstrap,
  Material
}

export const Tecnologia = ({ contenido,setDisplay }) => {
  const [selectIcon,setSelectIcon] = useState(false);
  const handleClick =(nombre)=>{  
   setSelectIcon(nombre);
     setDisplay(nombre);
  }
  return (
    <div className={`lenguaje-container ${selectIcon === contenido.nombre ? `select` : ''}`} onClick={()=>handleClick(contenido.nombre)}>
      
      <h3 >{contenido.nombre}</h3>
      <img  src={tecnologias[contenido.nombre]} alt="" /> 
      
    </div>
  );
};
