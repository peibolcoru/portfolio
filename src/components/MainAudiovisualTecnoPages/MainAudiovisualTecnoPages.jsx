import './MainAudiovisualTecnoPages.css';

import premiere from '../../assets/iconos/audiovisuales/adobe-premiere.svg'
import aftereffects from '../../assets/iconos/audiovisuales/after-effects.svg'
import finalcut from '../../assets/iconos/audiovisuales/final-cut.svg'
import photoshop from '../../assets/iconos/audiovisuales/photoshop.svg'

export const MainAudiovisualTecnoPages = () => {
  const tecnologias = {
    premiere,
    aftereffects,
    finalcut,
    photoshop,
  };
  
  return (
    <div className='mainAudioVisualTecnoPages-container'>
      <div className='audiovisualTecno-container'>
        <img
          src={tecnologias.finalcut}
          alt='final-cut'
        />
        <h3>Final Cut Pro</h3>
      </div>
      <div className='audiovisualTecno-container'>
        <img
          src={tecnologias.premiere}
          alt='final-cut'
        />
        <h3>Adobe Premiere</h3>
      </div>
      <div className='audiovisualTecno-container'>
        <img
          src={tecnologias.aftereffects}
          alt='final-cut'
        />
        <h3>After Effects</h3>
      </div>
      <div className='audiovisualTecno-container'>
        <img
          src={tecnologias.photoshop}
          alt='final-cut'
        />
        <h3>Photoshop</h3>
      </div>
    </div>
  );
};
