import React from 'react'
import "./MenuCrea.css";
import { NavLink } from 'react-router-dom';

export const MenuCrea = ({display}) => {
  return (
    <div className={`menuCrea-container ${display}`}>
    <ul >
        <li><NavLink to="/audiovisual" className="navlink-custom">últimas creaciones</NavLink></li>
        <li><NavLink to="/audiovisualtecno" className="navlink-custom">tecnologias</NavLink></li>
    </ul>

    </div>
  )
}
