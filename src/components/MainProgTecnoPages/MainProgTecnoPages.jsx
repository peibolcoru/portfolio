import './MainProgTecnoPages.css';
import { Tecnologias } from './Tecnologias/Tecnologias';
import { MoresTech } from './MoresTech/MoresTech.jsx';
import { useState } from 'react';

export const MainProgTecno = ({ contenido }) => {
  const [display, setDisplay] = useState('');
  const [selectIcon,setSelectIcon] = useState(false);
  
  return (
    <div className='progTechContainer slide-left'>
      <h2>lenguajes</h2>
      <Tecnologias contenido={contenido.lenguajes} setDisplay={setDisplay} setSelectIcon={setSelectIcon} selectIcon={selectIcon} />
      <MoresTech contenido={contenido.lenguajes} display={display} />
      <hr />
      <h2>entornos</h2>
      <Tecnologias contenido={contenido.entornos} setDisplay={setDisplay} setSelectIcon={setSelectIcon} selectIcon={selectIcon} />
      <MoresTech contenido={contenido.entornos} display={display} />
      <hr />
      <h2>bibliotecas</h2>
      <Tecnologias contenido={contenido.bibliotecas} setDisplay={setDisplay} setSelectIcon={setSelectIcon} selectIcon={selectIcon} />
      <MoresTech contenido={contenido.bibliotecas} display={display} />
      <hr />
      <h2>servidores de desarrollo</h2>
      <Tecnologias
        contenido={contenido.servidoresdedesarrollo}
        setDisplay={setDisplay}
        setSelectIcon={setSelectIcon} selectIcon={selectIcon}
      />
      <MoresTech
        contenido={contenido.servidoresdedesarrollo}
        display={display}
      />
      <hr />
      <h2>bases de datos</h2>
      <Tecnologias contenido={contenido.basesdedatos} setDisplay={setDisplay} setSelectIcon={setSelectIcon} selectIcon={selectIcon}/>
      <MoresTech contenido={contenido.basesdedatos} display={display} />
      <hr />
      <h2>frameworks</h2>
      <Tecnologias contenido={contenido.frameworks} setDisplay={setDisplay} setSelectIcon={setSelectIcon} selectIcon={selectIcon}/>
      <MoresTech contenido={contenido.frameworks} display={display} />
    </div>
  );
};
