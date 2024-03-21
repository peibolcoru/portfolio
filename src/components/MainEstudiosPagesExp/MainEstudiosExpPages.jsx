import './MainEstudiosPagesExp.css';
import { EstudiosExp } from '../EstudiosExp/EstudiosExp';
import { useEffect, useState } from 'react';
import 'animate.css';

export const MainEstudiosExpPages= ({ estudiosExp }) => {

  const [renderIndex, setRenderIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (renderIndex < estudiosExp.length - 1) {
        setRenderIndex(renderIndex + 1);
      }
    }, 300); // Cambia este valor al retardo deseado (en milisegundos)
    
    return () => clearTimeout(timeout);
  }, [renderIndex, estudiosExp]);

  return (
    <div className='estudiosExp-container'>
      {estudiosExp &&
        estudiosExp.slice(0, renderIndex + 1).map((estudioExp) => (
          <div className="estudioExp-container animate__animated animate__bounceInLeft" key={estudioExp.id} >
            <EstudiosExp estudioExp={estudioExp} />
            <hr />
          </div>
        ))}
    </div>
  );
};
