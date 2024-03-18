import './MainPpal.css';
import { MenuProg } from './MenuProg/MenuProg';
import { MenuCrea } from './MenuCrea/MenuCrea';
import { MenuSobre } from './MenuSobre/MenuSobre';
import { useState } from 'react';

export const MainPpal = () => {
  const [displayProg, setDisplayProg] = useState(`close`);
  const [displayCrea, setDisplayCrea] = useState(`close`);
  const [displaySobre, setDisplaySobre] = useState(`close`);
  return (
    <main>
      <h1 className='saludo'>hola</h1>
      <section>
        <div className='menu-container'>
          <ul>
            <li>
              <div className='title'
                onClick={() => {
                  displayProg !== 'close'
                    ? setDisplayProg('close')
                    : setDisplayProg('open');
                  setDisplayCrea('close');
                  setDisplaySobre('close');
                }}
              >
                programación
              </div>

              <MenuProg display={displayProg} />
            </li>
            <li>
              <div className='title'
                onClick={() => {
                  displayCrea !== 'close'
                    ? setDisplayCrea('close')
                    : setDisplayCrea('open');
                  setDisplaySobre('close');
                  setDisplayProg('close')
                }}
              >
                audiovisual
              </div>
              <MenuCrea display={displayCrea} />
            </li>
            <li>
              <div className='title'
                onClick={() => {
                  displaySobre === ``
                    ? setDisplaySobre('close')
                    : setDisplaySobre('');
                  setDisplayCrea('close');
                  setDisplayProg('close');
                }}
              >
                sobre mi
              </div>
              <MenuSobre display={displaySobre} />
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};
