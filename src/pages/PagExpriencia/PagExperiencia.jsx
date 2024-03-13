import React from 'react';
import './PagExperiencia.css';
import { HeaderPages } from '../../components/HeaderPages/HeaderPages';
import useExperiencia from '../../hooks/useExperiencia';
import { MainEstudiosExpPages } from '../../components/MainEstudiosPagesExp/MainEstudiosExpPages';

export const PagExperiencia = () => {
  const { experiencia } = useExperiencia();
  const exp = experiencia?.experiencia;
  return (
    <div>
      <HeaderPages title={'experiencia'} />
      <hr />
      <MainEstudiosExpPages estudiosExp={exp}/>
    </div>
  );
};
