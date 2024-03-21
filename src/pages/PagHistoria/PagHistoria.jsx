import './PagHistoria.css';
import { HeaderPages } from '../../components/HeaderPages/HeaderPages';
import { MainHistoriaPages } from '../../components/MainHistoriaPages/MainHistoriaPages';
export const PagHistoria = () => {
  return (
    <div className='pagHistoria-container'>
      <HeaderPages title={'mi historia'} />
      <hr className='slide-bottom'/>
      <MainHistoriaPages/>
    </div>
  );
};
