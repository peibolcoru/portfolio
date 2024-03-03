import React from 'react'
import './PagProgr.css';
import { HeaderPages } from '../../components/HeaderPages/HeaderPages';
import { MainPages } from '../../components/MainPages/MainPages';

import useProyectos from '../../hooks/useProyectos';

export const PagProg = () => {
  const title="Ultimos Proyectos"

  const {proyectos} = useProyectos()
  const proy = proyectos && proyectos.proyectos 
  return (
    <div>
      <HeaderPages title={title}/>
      <hr />
      <MainPages contenido={proy}/> 
    </div>
  )
}
