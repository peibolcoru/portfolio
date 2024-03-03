import { Route, Routes } from 'react-router-dom'

import { Inicio } from './pages/PagPpal/Inicio'

import './App.css'
import { PagProg } from './pages/PagProg/PagProg'
import { PagProgTecno } from './pages/PagProgTecno/PagProgTecno'

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/programacion" element={<PagProg/>}/>
          <Route path="/progtecno" element={<PagProgTecno/>}/>
        </Routes>
    </div>
  )
}

export default App
