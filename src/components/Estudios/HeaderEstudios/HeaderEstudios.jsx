import React from 'react';
import './HeaderEstudios.css';

import effuture from '../../../assets/logos centro/ef-business-school-efbs-1.png';
import hackaboss from '../../../assets/logos centro/hackaboss.svg';
import xunta from '../../../assets/logos centro/xunta.svg';

export const HeaderEstudios = ({ estudio }) => {
  const logos = { effuture, hackaboss, xunta };

  const logo = logos[estudio.logo];

  return (
    <div className='estudio-header-container'>
      <h2>{estudio.nombre}</h2>
      <div className='centro-container'>
        <div>
          <p>{estudio.centro}</p>
          <p>{estudio.años}</p>
        </div>
        <a href={estudio.link_centro} target="_blank"><img src={logo} alt='' /></a>
      </div>
    </div>
  );
};
