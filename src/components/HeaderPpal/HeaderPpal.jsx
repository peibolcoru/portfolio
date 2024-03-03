import React from 'react'
import "./HeaderPpal.css"

export const HeaderPpal = () => {
  return (
    <header>
        <div className='header-container'>
          <div className='myName'>
             <h2 className='name'>PABLO FERREÑO &gt;</h2>
             <h2 className='lowBar flash'>_</h2>
          </div>
          <p className='cita'>
            "La formación y la creatividad son los pilares fundamentales del
            desarrollo personal y profesional."
          </p>
        </div>
      </header>
  )
}
