
import './PagEstudios.css';
import { HeaderPages } from '../../components/HeaderPages/HeaderPages';

import useEstudios from '../../hooks/useEstudios';
import { MainEstudiosPages } from '../../components/MainEstudiosPages/MainEstudiosPages';

export const PagEstudios = () => {
    const {estudios} = useEstudios();
    const formacion = estudios?.estudios

  return (
    <div>
      <HeaderPages title={'estudios y formación'} />
      <hr />
     <MainEstudiosPages estudios={formacion}/>
    </div>
  );
};
