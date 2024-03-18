import './FooterAudiovisual.css';
import { v4 as uuidv4 } from 'uuid';

import premiere from '../../../assets/iconos/audiovisuales/adobe-premiere.svg';
import aftereffects from '../../../assets/iconos/audiovisuales/after-effects.svg';
import finalcut from '../../../assets/iconos/audiovisuales/final-cut.svg';
import photoshop from '../../../assets/iconos/audiovisuales/photoshop.svg';

export const FooterAudiovisual = ({ contenido }) => {
  const tecnologias = {
    premiere,
    aftereffects,
    finalcut,
    photoshop,
  };
  
  return (
    <div className='footerAudiovisual-container'>
      <p>tecnologías:</p>
      <div className='audiovisual-iconos-container'>
        {contenido.programas.map((programa) => (
          <img src={tecnologias[programa]} key={uuidv4()} alt='' />
        ))}
      </div>
    </div>
  );
};
