import { useEffect, useState } from 'react';

const useProyectos = () => {
  const [proyectos, setProyectos] = useState([]);

  const cargaProyectos = async () => {
    try {
      const res = await fetch(`../../datos/proyectos/proyectos.json`);
      const json = await res.json();
      setProyectos(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    cargaProyectos();
  }, []);


  return {proyectos}
};
export default useProyectos