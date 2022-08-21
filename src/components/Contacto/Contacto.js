import React from 'react'
import ContForm from '../Form/ContForm'


const Contacto = () => {
    

  return (
    <>
        <div className="flex flex-initial basis-4/5 font-bold text-5xl mt-5 mb-2 justify-center">
            <h2>Contacto</h2>
        </div>
        <div className="flex w-full flex-wrap justify-center items-stretch mt-20">
            <div>
                <ContForm />
            </div>
        </div>
        </>
  )
}

export default Contacto