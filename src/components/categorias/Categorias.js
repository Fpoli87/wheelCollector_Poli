import React, { useEffect, useState } from 'react';
import {Outlet} from 'react-router-dom';
import CategoriaDetalle from './CategoriasDetalle';
import products from '../../products.json';
import { useParams } from 'react-router-dom';


  
const Categorias = () => {

    const [item, setItems] = useState([]);
  const { category } = useParams()
  
    useEffect(()=>{

      const prodPorCat = () => {

        return new Promise((res) => {
          setTimeout(() => {
              res( products.filter(prod => prod.category === category)
            )
          }, 2000)
        })
      
      }    
      prodPorCat().then(res =>{
            setItems(res)
          })
        }, [category] )
      
          console.log(item)


    return (
      
    <div className='fs-1 mt-3 fst-italic'>
        
        <Outlet />
        
        <h2>Productos Disponibles en Seccion {category}</h2>

        {item.map(items =>
          <CategoriaDetalle items={ items } />
        )}
    </div>
  )
}

export default Categorias