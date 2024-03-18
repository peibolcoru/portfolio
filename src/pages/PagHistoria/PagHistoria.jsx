import './PagHistoria.css';
import { HeaderPages } from '../../components/HeaderPages/HeaderPages';
import { MainHistoriaPages } from '../../components/MainHistoriaPages/MainHistoriaPages';
export const PagHistoria = () => {
  return (
    <div>
      <HeaderPages title={'mi historia'} />
      <hr />
      <MainHistoriaPages/>
    </div>
  );
};
