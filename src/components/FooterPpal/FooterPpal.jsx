import React from 'react';
import './FooterPpal.css';

import youtubeIcon from '../../assets/iconos/icons8-youtube2.svg';
import linkedinIcon from '../../assets/iconos/icons8-linkedin.svg';
import githubIcon from '../../assets/iconos/icons-github.svg';
export const FooterPpal = () => {
  return (
    <footer className='ppalFooter-container puffIn'>
      <div className='enlaces-general-container'>
        <a
          href='https://www.linkedin.com/in/pablo-ferreno-veiga/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={linkedinIcon} alt='linkedin' />
        </a>
        <a
          href='https://github.com/peibolcoru'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={githubIcon} alt='github' />
        </a>
        <a
          href='https://www.youtube.com/channel/UCayLZMzKTYX-B-qDRldXhRg'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={youtubeIcon} alt='youtube' />
        </a>
      </div>
      <a className='curriculum'
        href='https://drive.google.com/file/d/1XVa4ArfB19PfSl-1yXhNqX9R9MuDwxGu/view?usp=drivesdk'
        target='_blank'
        rel='noopener noreferrer'
      >
        curriculum
      </a>
    </footer>
  );
};
