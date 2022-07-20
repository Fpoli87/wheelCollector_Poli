import React, { useEffect, useState } from 'react';
import {Outlet} from 'react-router-dom';
import HombreDetalle from './HombreDetalle';
import products from '../../products.json';
import { useParams } from 'react-router-dom';


  
const HombreCat = () => {

    const [item, setItem] = useState({})
    const { category }  = useParams();

    console.log(category)
  
    const traerProdPorId = () => {
      return new Promise((res)=>{
        setTimeout(()=>{
          res(products.filter(prod => prod.category == category))
        }, 2000)
      })
}
  
    useEffect(()=>{
      traerProdPorId().then(res=>{
        setItem(res)
      })
    }, [category])
      

    return (
    <div className='fs-1 mt-3 fst-italic'>
        
        <Outlet />
        
        {<HombreDetalle items={products} />}
    </div>
  )
}

export default HombreCat