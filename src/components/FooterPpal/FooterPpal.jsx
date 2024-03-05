import React from 'react';
import './FooterPpal.css';

import youtubeIcon from '../../assets/iconos/icons8-youtube2.svg';
import linkedinIcon from '../../assets/iconos/icons8-linkedin.svg';
import githubIcon from '../../assets/iconos/icons-github.svg';
export const FooterPpal = () => {
  return (
    <footer className='ppalFooter-container'>
      <div className='enlaces-general-container'>
        <a href='https://www.linkedin.com/in/pablo-ferreno-veiga/' target='_blank'
              rel='noopener noreferrer'>
          <img src={linkedinIcon} alt='linkedin' />
        </a>
        <a href='https://github.com/peibolcoru' target='_blank'
              rel='noopener noreferrer'>
          <img src={githubIcon} alt='github' />
        </a>
        <a href='https://www.youtube.com/channel/UCayLZMzKTYX-B-qDRldXhRg' target='_blank'
              rel='noopener noreferrer'>
          <img src={youtubeIcon} alt='youtube' />
        </a>
      </div>
      <div className='curriculum'>curriculum</div>
    </footer>
  );
};
