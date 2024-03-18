import './PagEstudios.css';
import { HeaderPages } from '../../components/HeaderPages/HeaderPages';

import useEstudios from '../../hooks/useEstudios';
import { MainEstudiosExpPages } from '../../components/MainEstudiosPagesExp/MainEstudiosExpPages';

export const PagEstudios = () => {
    const {estudios} = useEstudios();
    const formacion = estudios?.estudios

  return (
    <div>
      <HeaderPages title={'estudios y formación'} />
      <hr />
     <MainEstudiosExpPages estudiosExp={formacion}/>
    </div>
  );
};
