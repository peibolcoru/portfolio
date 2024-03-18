import './MainHistoriaPages.css';
import foto from '../../assets/foto.webp';

export const MainHistoriaPages = () => {
  return (
    <div className='historia-container'>
      <article>
        <h3 id='titulo-historia'>
          De la Industria al Desarrollo Web: Un Viaje de Transformación
        </h3>

        <section className='inicio-foto-container'>
          <p>
          <span className='tab'></span>Mi trayectoria profesional ha sido un viaje diverso y emocionante,
            marcado por giros inesperados y la búsqueda constante de crecimiento
            personal y profesional. 
          </p>
          <img src={foto} alt='' />
        </section>
        <section>
          <h3>Inicios en el Mundo Industrial</h3>
          <p>
          <span className='tab'></span>Desde una edad temprana, me sumergí en el mundo industrial, donde
            pasé la mayor parte de mi vida laboral. Durante estos años,
            desempeñé roles clave en el control de calidad y la inspección de
            instalaciones. <br />
            <span className='tab'></span>Este tiempo me proporcionó una base
            sólida en habilidades técnicas y una comprensión profunda de los
            procesos industriales.
          </p>
        </section>
        <section>
          <h3>Explorando el Mundo Audiovisual</h3>
          <p>
          <span className='tab'></span>Paralelamente a mi trabajo en la industria, también incursioné en el
            campo audiovisual. <br />
            <span className='tab'></span>Participé en una variedad de proyectos
            sociales y publicitarios, donde pude expresar mi creatividad y
            desarrollar habilidades en producción y edición de contenido visual.
          </p>
        </section>
        <section>
          <h3>Valores Profesionales</h3>
          <p>
          <span className='tab'></span>Creo en la preparación continua como clave para mantenerme
            actualizado en un mundo digital en constante cambio. <br />
            <span className='tab'></span>Mi compromiso con la excelencia y la
            creatividad me impulsa a superar las expectativas en cada proyecto.{' '}
            <br />
            <span className='tab'></span>Además, mi experiencia previa en
            inspección y control de calidad me ha inculcado una mentalidad de
            atención al detalle y una búsqueda constante de la mejora continua.
            <br />
            <span className='tab'></span>Soy un defensor de la colaboración y la
            comunicación efectiva, siempre buscando mejorar tanto
            individualmente como en equipo.
          </p>
        </section>
        <section>
          <h3>El Momento de la Transformación</h3>
          <p>
            Sin embargo, un sueño pendiente siempre latía en mi mente:
            convertirme en desarrollador web. <br />
            <span className='tab'></span>Hace aproximadamente un año y medio,
            decidí que era el momento de perseguir ese sueño con determinación.{' '}
            <br />
            <span className='tab'></span>Reconocí que el mundo digital ofrecía
            oportunidades emocionantes y quería formar parte de él.
          </p>
        </section>
        <section>
          <h3>Volcándome en la Preparación</h3>
          <p>
            Con un impulso renovado, me sumergí en el aprendizaje de desarrollo
            web. <br />
            <span className='tab'></span>Me comprometí a adquirir nuevas
            habilidades y conocimientos, dedicando tiempo y esfuerzo a cursos,
            tutoriales y proyectos prácticos. <br />
            <span className='tab'></span>Durante este tiempo, obtuve
            certificaciones en programación orientada a objetos y bases de
            datos, además de completar un bootcamp de programación web. <br />
            <span className='tab'></span>Cada línea de código era un paso más
            cerca de convertir mi sueño en realidad.
          </p>
        </section>
        <section>
          <h3>En Busca de Nuevas Oportunidades</h3>
          <p>
            Y aquí estoy hoy, en busca de un nuevo comienzo como desarrollador
            web junior. <br />
            <span className='tab'></span>Estoy emocionado por la oportunidad de
            aplicar mis habilidades y conocimientos en un entorno profesional,
            contribuyendo al mundo digital de manera significativa.
          </p>
        </section>
        <section>
          <h3>El Futuro Prometedor</h3>
          <p>
            Si bien el camino puede ser desafiante, estoy lleno de optimismo y
            determinación. <br />
            <span className='tab'></span>Cada experiencia previa ha sido un
            pilar en mi viaje hacia el desarrollo web, y estoy listo para
            enfrentar cualquier desafío que se presente en el camino hacia el
            éxito. Gracias por acompañarme en este viaje. <br />
            <span className='tab'></span>¡Espero con ansias lo que el futuro
            tiene reservado!
          </p>
        </section>
      </article>
    </div>
  );
};
