import './Inicio.css';
import { HeaderPpal } from '../../components/HeaderPpal/HeaderPpal';
import { FooterPpal } from '../../components/FooterPpal/FooterPpal';
import { MainPpal } from '../../components/MainPpal/MainPpal';

export const Inicio = () => {
  return (
    <>
      <HeaderPpal/>
      <MainPpal/>
      <FooterPpal/>
    </>
  );
};
