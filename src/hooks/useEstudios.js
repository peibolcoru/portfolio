import { useEffect, useState } from 'react';

const useEstudios = () => {
  const [estudios, setEstudios] = useState();

  const cargaEstudios = async () => {
    try {
      const res = await fetch('/datos/estudios/estudios.json');
      const json = await res.json();
      setEstudios(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    cargaEstudios();

  }, []);
  return {estudios};
};

export default useEstudios;
