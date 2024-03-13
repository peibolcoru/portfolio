import { Route, Routes } from 'react-router-dom'

import { Inicio } from './pages/PagPpal/Inicio'

import './App.css'
import { PagProg } from './pages/PagProg/PagProg'
import { PagProgTecno } from './pages/PagProgTecno/PagProgTecno'
import { PagAudiovisual } from './pages/PagAudiovisual/PagAudiovisual'
import { PagAudiovisualTecno } from './pages/PagAudiovisualTecno/PagAudiovisualTecno'
import { PagEstudios } from './pages/PagEstudios/PagEstudios'
import { PagExperiencia } from './pages/PagExpriencia/PagExperiencia'
import { PagHistoria } from './pages/PagHistoria/PagHistoria'

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/programacion" element={<PagProg/>}/>
          <Route path="/progtecno" element={<PagProgTecno/>}/>
          <Route path="/audiovisual" element={<PagAudiovisual/>}/>
          <Route path="/audiovisualtecno" element={<PagAudiovisualTecno/>}/>
          <Route path="/estudios" element={<PagEstudios/>}/>
          <Route path="/experiencia" element={<PagExperiencia/>}/>
          <Route path="/mihistoria" element={<PagHistoria/>}/>
        </Routes>
    </div>
  )
}

export default App
