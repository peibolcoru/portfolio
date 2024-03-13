import React from 'react';
import './HeaderEstudiosExp.css';

import effuture from '../../../assets/logos centro/ef-business-school-efbs-1.png';
import hackaboss from '../../../assets/logos centro/hackaboss.svg';
import xunta from '../../../assets/logos centro/xunta.svg';
import alcoa from '../../../assets/logos trabajos/alcoa.png';
import oca_icp from '../../../assets/logos trabajos/oca icp.png';
import sgs from '../../../assets/logos trabajos/sgs.png';

export const HeaderEstudiosExp = ({ estudioExp }) => {
  const logos = { effuture, hackaboss, xunta, alcoa, oca_icp, sgs };

  const logo = logos[estudioExp.logo];

  return (
    <div className='estudioExp-header-container'>
      <h2>{estudioExp.nombre}</h2>
      <div className='centroExp-container'>
        <div>
          <p>{estudioExp.centro}</p>
          <p>{estudioExp.años}</p>
        </div>
        <a href={estudioExp.link_centro} target="_blank"><img src={logo} alt='' /></a>
      </div>
    </div>
  );
};
