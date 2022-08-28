import React from 'react'
import './titulo.css'

const Saludo = ({ greeting }) => {
  return (
    <div className=' mt-3 titulo '>
      
        {greeting}
    </div>
  )
}

export default Saludo