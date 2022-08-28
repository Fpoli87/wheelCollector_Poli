import React, { useEffect, useState } from 'react';
import {Outlet} from 'react-router-dom';
import CategoriaDetalle from './CategoriasDetalle';
import { useParams } from 'react-router-dom';
import { getItems } from '../../Firebase/firebase';

const Categorias = () => {

    const [item, setItems] = useState([]);
  const { category } = useParams()
  
  useEffect(() => {

    getItems(category)
      .then(res => setItems(res))

  }, [category])

    return (
      
    <div className='fs-1 mt-3 fst-italic'>
        
        <Outlet />
        
        <h2>Productos Disponibles en Seccion {category}</h2>

        <div className='row row-cols-1 row-cols-md-2 g-4 items'>
          {item.map(items =>
            <CategoriaDetalle items={ items } />
          )}
        </div>
    </div>
  )
}

export default Categorias