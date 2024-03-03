import React from 'react'
import "./MenuCrea.css";

export const MenuCrea = ({display}) => {
  console.log(display)
  return (
    <div className={`menuCrea-container ${display}`}>
    <ul >
        <li>ultimas creaciones</li>
        <li>tecnologias</li>
    </ul>

    </div>
  )
}
