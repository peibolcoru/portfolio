import React from 'react'
import './PagProgTecno.css';

import { HeaderPages } from '../../components/HeaderPages/HeaderPages';
import { MainProgTecno } from '../../components/MainProgTecnoPages/MainProgTecnoPages';
import useProgTechs from '../../hooks/useProgTechs';

export const PagProgTecno = () => {
  const tecnologias="Tecnologia de programación"

  const {progTechs}=useProgTechs()
  
  return (
    <div className='pagPpal-Tecno'>
      <HeaderPages title={tecnologias}/>
      <hr />
      <MainProgTecno contenido={progTechs}/>
    </div>
  )
}
