import './MenuProg.css';
import { NavLink } from 'react-router-dom';



export const MenuProg = ({display}) => {

  return (
    <div className={`menuProg-container ${display}`}>
      <ul>
        <li>
          <NavLink to="/programacion" className="navlink-custom">últimos proyectos</NavLink>
        </li>
        <li><NavLink to="/progtecno" className="navlink-custom">tecnologias</NavLink></li>
      </ul>
    </div>
  );
};
