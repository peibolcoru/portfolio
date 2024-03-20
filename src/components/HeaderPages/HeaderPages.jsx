import React from 'react'
import './HeaderPages.css';
import { useNavigate } from 'react-router-dom';

export const HeaderPages = ({title}) => {
    const navigate=useNavigate()
  return (
    <div className='headerPages-container slide-bottom '>
        <h2 className='title-project'>{title}</h2>
        <button onClick={()=>{navigate("/")}} className='button-scape'>ESC</button>
    </div>
  )
}
