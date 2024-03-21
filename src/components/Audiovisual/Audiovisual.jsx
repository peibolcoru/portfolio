import './Audiovisual.css';
import { HeaderAudiovisual } from './HeaderAudiovisual/HeaderAudiovisual';
import 'animate.css'

import {MainAudiovisual} from '../Audiovisual/MainAudiovisual/MainAudiovisual';
import { FooterAudiovisual } from './FooterAudiovisual/FooterAudiovisual';
export const Audiovisual = ({contenido}) => {
  return (
    <div className='audiovisual-container amimate animate__animated animate__bounceInLeft'>
        <HeaderAudiovisual contenido={contenido}/>
        <MainAudiovisual contenido={contenido}/>
        <FooterAudiovisual contenido={contenido}/>
       
    </div>
  )
}
