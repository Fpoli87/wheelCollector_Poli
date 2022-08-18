import React, { useEffect, useState } from 'react'
import LoadingGlobe from '../../Img/img/loading1.gif'
import Img1 from '../../Img/img/historia1.jpg'
import Img3 from '../../Img/img/historia3.jpg'
import './nosotros.css'

const Contacto = () => {
    const [cargando, setCargando] = useState(true)
    
    useEffect( () => {
        const Nosotros = new Promise( (resolve,reject) => {
            setTimeout(() => {
              setCargando(false)
              reject('error')
            }, 3000)
        })
    }, [])
    
    return (
        <>
        <div className="flex flex-initial basis-4/5 font-bold text-5xl mt-5 mb-2 justify-center">
            <h2> Algo de nuestra historia</h2>
        </div>
        <div className="flex w-full flex-wrap justify-center items-stretch mt-20">
            { cargando ?
            <div className="flex w-screen items-center justify-center space-x-2">
                <img src={LoadingGlobe}/> 
            </div>
            :
            <div>
                <div className='txt-hist'>
                    <div className='row'>
                        <p className='col-lg-6 txt-historia'>Global Antiques es una empresa familiar de sexta generación, fundada en Jerusalén hace más de 125 años. Hacia finales del siglo XIX, la familia comenzó a acumular una considerable colección de objetos encontrados en las colinas circundantes de sus tierras de cultivo jordanas. Muy pronto, trabajadores, agricultores y comerciantes de toda la región se enteraron de la creciente "Colección Global" y tuvieron que verla por sí mismos.<br /> Algunos querían comprar, otros vender, otros comerciar, otros simplemente admirar y otros aprender. El increíble surtido de artículos se manifestó rápidamente no sólo como un magnífico testamento histórico, sino también como una empresa viable. Y desde estos humildes comienzos, la familia Barakat, durante más de un siglo, se ha dedicado a adquirir las mejores obras maestras del arte antiguo de todo el mundo.</p>
                        <img className='col-lg-6' src={Img1} />
                    </div>
                    
                    <div className='row'>
                        <img className='col-lg-6' src={Img3} />
                        <p className='col-lg-6 txt-historia'>Su curiosidad, amor y aprecio por el arte y los artefactos antiguos ha llevado a la colección a abarcar las reliquias sagradas de diversas culturas de todos los rincones del mundo... desde la América precolombina hasta la civilización jemer de Camboya. Aunque hay muchos marchantes de Arte Antiguo en todo el mundo, no encontrará una colección como ésta en ningún sitio. La profundidad, la amplitud y la calidad de los objetos encontrados en una innumerable variedad de culturas es simplemente incomparable.</p>
                    </div>
                    
                </div>
            </div>
            }
        </div>
        </>
    )
  }
export default Contacto