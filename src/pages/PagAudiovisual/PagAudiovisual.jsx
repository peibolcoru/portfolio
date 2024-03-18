import './PagAudiovisual.css';
import { HeaderPages } from '../../components/HeaderPages/HeaderPages';
import { MainAudiovisualPages } from '../../components/MainAudiovisualPages/MainAudiovisualPages';
import useAudiovisual from '../../hooks/useAudiovisual';

export const PagAudiovisual = () => {
  const { audiovisuales } = useAudiovisual();
  const contenido = audiovisuales && audiovisuales.audiovisual;
  return (
    <div>
      <HeaderPages title={'Últimas creaciones'} />
      <hr />
      <MainAudiovisualPages contenido={contenido} />
    </div>
  );
};
