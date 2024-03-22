import './Enlaces.css';

import { v4 as uuidv4 } from 'uuid';

import gitIcon from '../../../../assets/iconos/icons-github.svg';
import youtubeIcon from '../../../../assets/iconos/icons8-youtube.svg';
import { useEffect, useState } from 'react';


export const Enlaces = ({proyecto}) => {
  const [displayYoutube,setDisplayYoutube]=useState("");
  const [displayEnlaces,setDisplayEnlaces]=useState("")
  useEffect(() => {
    if (proyecto.Github.length<1  && proyecto.Youtube_link === null) {
      setDisplayEnlaces("apagado");
    } else {
      setDisplayEnlaces("");
    }

    if (proyecto.Youtube_link === null) {
      setDisplayYoutube("apagado");
    } else {
      setDisplayYoutube("");
    }
  }, [proyecto.Github , proyecto.Youtube_link]);

  return (
    <div className={`links-proyecto ${displayEnlaces}`}>
        <p>enlaces</p>
        <div className='icons-container'>
          <div className='proyecto-gitHubLinks'>
            {proyecto.Github.map((item) =>(
              <a
                key={uuidv4()}
                href={item}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={gitIcon} alt='' />
              </a>
            ))}
          </div>
          <div className={`youtubeLink ${displayYoutube}`}>
            <a
              href={proyecto.Youtube_link}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className='youtube-icon' src={youtubeIcon} alt='' />
            </a>
          </div>
        </div>
      </div>
  )
}
