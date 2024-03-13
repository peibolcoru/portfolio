import { useEffect, useState } from 'react'

const useExperiencia = () => {
    const [experiencia,setExperiencia] = useState();

    const fecthData = async ()=>{
         try {
            const resp = await fetch("/datos/experiencia/experiencia.json")
            const json = await resp.json()
            setExperiencia(json)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(()=>{
       fecthData();        
    },[])
  return {experiencia}
}
export default useExperiencia;