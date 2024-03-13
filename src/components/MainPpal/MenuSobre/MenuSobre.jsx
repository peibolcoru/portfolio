import React from 'react';
import './MenuSobre.css';
import { NavLink } from 'react-router-dom';

export const MenuSobre = ({display}) => {
  return (
    <div className={`menuSobre-container ${display}`}>
      <ul>
        <li><NavLink to="/estudios" className="navlink-custom">esudios y formación</NavLink></li>
        <li><NavLink to="/experiencia" className="navlink-custom">experiencia</NavLink></li>
      </ul>
    </div>
  );
};
