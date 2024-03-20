import './PagProgr.css';
import { HeaderPages } from '../../components/HeaderPages/HeaderPages';
import { MainProgPages } from '../../components/MainProgPages/MainProgPages';

import useProyectos from '../../hooks/useProyectos';

export const PagProg = () => {
  const title="Ultimos Proyectos"

  const {proyectos} = useProyectos()
  const proy = proyectos && proyectos.proyectos 
  return (
    <div>
      <HeaderPages title={title}/>
      <hr className='slide-bottom'/>
      <MainProgPages contenido={proy}/> 
    </div>
  )
}
