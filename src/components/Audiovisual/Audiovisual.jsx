import './Audiovisual.css';
import { HeaderAudiovisual } from './HeaderAudiovisual/HeaderAudiovisual';

import {MainAudiovisual} from '../Audiovisual/MainAudiovisual/MainAudiovisual';
import { FooterAudiovisual } from './FooterAudiovisual/FooterAudiovisual';
export const Audiovisual = ({contenido}) => {
  return (
    <div className='audiovisual-container'>
        <HeaderAudiovisual contenido={contenido}/>
        <MainAudiovisual contenido={contenido}/>
        <FooterAudiovisual contenido={contenido}/>
       
    </div>
  )
}
