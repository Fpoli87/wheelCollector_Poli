import React from 'react'
import { Link } from 'react-router-dom'
import ImgInicio from '../../../Img/img/inicio-hist.jpg'
import './historiaMin.css'

const HistoriaMin = () => {
  return (
    <div>
        <div className='row inicio__hist'>
            <div className='col-lg-6 '>
                <img src={ImgInicio} />
            </div>
            <div className='col-lg-6 texto__hist'>
                <h2 className='txt-bnv'>BIENVENIDOS</h2>
                <p>Global Antiques es una empresa familiar de sexta generación, fundada en Jerusalén hace más de 125 años. La Galería es un proveedor de arte antiguo de calidad de museo, especializado en antigüedades clásicas, del Cercano Oriente, bíblicas, chinas, precolombinas, bizantinas, asiáticas, africanas y primitivas.</p>
                <p>Tanto si es un coleccionista, un estudioso, un diseñador, un inversor o simplemente un apreciador, la Colección Global tiene algo para usted. Navegue a través de los siglos en las siguientes páginas y no dude en ponerse en contacto con nosotros en cualquier momento si tiene preguntas, comentarios o más consultas. Si desea realizar una búsqueda exhaustiva de todo nuestro inventario de productos, haga clic en el siguiente enlace.</p>
                <Link to="/productos"   className="nav-link d-inline fs-5 m-3"><button className=' btn-inicio'>Productos</button></Link>
            </div>
        </div>
    </div>
  )
}

export default HistoriaMin