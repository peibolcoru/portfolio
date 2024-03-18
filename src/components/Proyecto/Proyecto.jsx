import './Proyecto.css';


import { HeaderProyecto } from './HeaderProyecto/HeaderProyecto';
import { MainProyecto } from './MainProyecto/MainProyecto';
import { FooterProyecto } from './FooterProyecto/FooterProyecto';

export const Proyecto = ({ proyecto }) => {
  

  return (
    <div className='proyecto-container'>
      <HeaderProyecto proyecto={proyecto}/>
      <MainProyecto proyecto={proyecto}/>
      <FooterProyecto proyecto={proyecto}/>
    </div>
  );
};
