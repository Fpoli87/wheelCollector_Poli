import React from 'react'

const Saludo = ({ greeting }) => {
  return (
    <div className='fs-1 mt-3 fst-italic'>
        {greeting}
    </div>
  )
}

export default Saludo