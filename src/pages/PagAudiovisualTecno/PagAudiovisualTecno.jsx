import './PagAudioVisualTecno.css';
import { HeaderPages } from '../../components/HeaderPages/HeaderPages';
import { MainAudiovisualTecnoPages } from '../../components/MainAudiovisualTecnoPages/MainAudiovisualTecnoPages';

export const PagAudiovisualTecno = () => {
  return (
    <div>
      <HeaderPages title={'tecnologias audiovisuales'} />
      <hr className='slide-bottom'/>
      <MainAudiovisualTecnoPages/>
    </div>
  )
}
