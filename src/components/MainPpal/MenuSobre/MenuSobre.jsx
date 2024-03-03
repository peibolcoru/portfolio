import React from 'react';
import './MenuSobre.css';

export const MenuSobre = ({display}) => {
  return (
    <div className={`menuSobre-container ${display}`}>
      <ul>
        <li>estudios</li>
        <li>experiencia</li>
      </ul>
    </div>
  );
};
