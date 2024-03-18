import './Enlaces.css';

import { v4 as uuidv4 } from 'uuid';

import gitIcon from '../../../../assets/iconos/icons-github.svg';
import youtubeIcon from '../../../../assets/iconos/icons8-youtube.svg';


export const Enlaces = ({proyecto}) => {
  return (
    <div className='links-proyecto'>
        <p>enlaces</p>
        <div className='icons-container'>
          <div className='proyecto-gitHubLinks'>
            {proyecto.Github.map((item) => (
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
          <div className='youtubeLink'>
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
