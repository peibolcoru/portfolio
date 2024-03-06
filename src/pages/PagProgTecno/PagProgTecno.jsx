import React from 'react'
import './PagProgTecno.css';

import { HeaderPages } from '../../components/HeaderPages/HeaderPages';
import { MainProgTecno } from '../../components/MainProgTecnoPages/MainProgTecnoPages';
import useProgTechs from '../../hooks/useProgTechs';

export const PagProgTecno = () => {
  const tecnologias="Tecnologias"

  const {progTechs}=useProgTechs()
  
  return (
    <div>
      <HeaderPages title={tecnologias}/>
      <hr />
      <MainProgTecno contenido={progTechs}/>
    </div>
  )
}
