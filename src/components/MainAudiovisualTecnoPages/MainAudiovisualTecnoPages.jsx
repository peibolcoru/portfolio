import React from 'react';
import './MainAudiovisualTecnoPages.css';
export const MainAudiovisualTecnoPages = () => {
  return (
    <div className='mainAudioVisualTecnoPages-container'>
      <div className='audiovisualTecno-container'>
        <img
          src='../../../public/iconos/audiovisuales/final-cut.svg'
          alt='final-cut'
        />
        <h3>Final Cut Pro</h3>
      </div>
      <div className='audiovisualTecno-container'>
        <img
          src='../../../public/iconos/audiovisuales/adobe-premiere.svg'
          alt='final-cut'
        />
        <h3>Adobe Premiere</h3>
      </div>
      <div className='audiovisualTecno-container'>
        <img
          src='../../../public/iconos/audiovisuales/after-effects.svg'
          alt='final-cut'
        />
        <h3>After Effects</h3>
      </div>
      <div className='audiovisualTecno-container'>
        <img
          src='../../../public/iconos/audiovisuales/photoshop.svg'
          alt='final-cut'
        />
        <h3>Photoshop</h3>
      </div>
    </div>
  );
};
