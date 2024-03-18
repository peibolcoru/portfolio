import './MainProgTecnoPages.css';
import { Tecnologias } from './Tecnologias/Tecnologias';
import { MoresTech } from './MoresTech/MoresTech.jsx';

export const MainProgTecno = ({ contenido }) => {
  const [display, setDisplay] = useState('');

  
  return (
    <div className='progTeckContainer'>
      <h2>lenguajes</h2>
      <Tecnologias contenido={contenido.lenguajes} setDisplay={setDisplay} />
      <MoresTech contenido={contenido.lenguajes} display={display} />
      <hr />
      <h2>entornos</h2>
      <Tecnologias contenido={contenido.entornos} setDisplay={setDisplay} />
      <MoresTech contenido={contenido.entornos} display={display} />
      <hr />
      <h2>bibliotecas</h2>
      <Tecnologias contenido={contenido.bibliotecas} setDisplay={setDisplay} />
      <MoresTech contenido={contenido.bibliotecas} display={display} />
      <hr />
      <h2>servidores de desarrollo</h2>
      <Tecnologias
        contenido={contenido.servidoresdedesarrollo}
        setDisplay={setDisplay}
      />
      <MoresTech
        contenido={contenido.servidoresdedesarrollo}
        display={display}
      />
      <hr />
      <h2>bases de datos</h2>
      <Tecnologias contenido={contenido.basesdedatos} setDisplay={setDisplay} />
      <MoresTech contenido={contenido.basesdedatos} display={display} />
      <hr />
      <h2>frameworks</h2>
      <Tecnologias contenido={contenido.frameworks} setDisplay={setDisplay} />
      <MoresTech contenido={contenido.frameworks} display={display} />
    </div>
  );
};
