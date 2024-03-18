import './MainAudiovisual.css';
import { v4 as uuidv4 } from 'uuid';

export const MainAudiovisual = ({ contenido }) => {
  return (
    <div className='audiovisual-descripcion'>
      <p>CREADO POR: {contenido.creador}</p>
      {contenido.descripcion.map((text) => (
        <div key={uuidv4()}>
          <p>{text}</p>
        </div>
      ))}
       <iframe
            src={`https://www.youtube.com/embed/${contenido.video_id_youtube}`}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen'
          ></iframe>
    </div>
  );
};
