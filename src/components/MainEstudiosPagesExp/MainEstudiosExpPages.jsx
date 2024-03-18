import './MainEstudiosPagesExp.css';
import { EstudiosExp } from '../EstudiosExp/EstudiosExp';

export const MainEstudiosExpPages= ({ estudiosExp }) => {
  return (
    <div className='estudiosExp-container'>
      {estudiosExp &&
        estudiosExp.map((estudioExp) => (
          <div className="estudioExp-container" key={estudioExp.id} >
            <EstudiosExp estudioExp={estudioExp} />
            <hr />
          </div>
        ))}
    </div>
  );
};
