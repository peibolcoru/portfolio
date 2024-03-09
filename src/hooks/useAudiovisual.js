import React, { useEffect, useState } from 'react';

export const useAudiovisual = () => {
  const [audiovisuales, setAudioVisuales] = useState();
  const cargaAudiovisuales = async () => {
    try {
      const res = await fetch('/datos/audiovisual/audiovisual.json');
      const json = await res.json();
      setAudioVisuales(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    cargaAudiovisuales();
  }, []);

  return { audiovisuales };
};
export default useAudiovisual;
