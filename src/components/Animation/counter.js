import React, { useState, useEffect } from 'react'
import { FaSmile, FaHistory, FaGlobe } from "react-icons/fa";
import './counter.css'


const Counter = () => {

    
    
      ;
  return (

    <div>
        <div className='contador animar'>
            <FaSmile/>
            <div className='contador_cantidad' data-cantidad-total='23570'>3</div>
            <h2>Clientes Felices</h2>
        </div>
        <div className='contador animar'>
            <FaGlobe/>
            <div className='contador_cantidad' data-cantidad-total='98'>0</div>
            <h2>Paises Recorridos</h2>
        </div>
        <div className='contador animar'>
            <FaHistory/>
            <div className='contador_cantidad' data-cantidad-total='120'>0</div>
            <h2>Años de Experiencia</h2>
        </div>
    </div>
  )
}

export default Counter