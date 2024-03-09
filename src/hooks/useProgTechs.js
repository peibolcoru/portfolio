import { useEffect, useState } from 'react';

const useProgTechs = () => {
  const [progTechs, setProgTechs] = useState([]);

  const cargaProgTechs = async () => {
    try {
      const res = await fetch(`/datos/tecnologiasProg/tecnologiasProg.json`);
      const json = await res.json();
      setProgTechs(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    cargaProgTechs();
  }, []);


  return {progTechs}
};
export default useProgTechs