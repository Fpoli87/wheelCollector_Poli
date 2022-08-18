import React, { useEffect, useState } from 'react';
import {Outlet, Link} from 'react-router-dom';
import ItemList from './ProdMinList';
import { getFirestore, collection, getDocs } from "firebase/firestore";

function ItemMinContainer() {

  const [productsMin, setProductsMin] = useState([])

  useEffect(() => {
      const db = getFirestore();
     
          const queryCollection = collection(db, 'products')
          getDocs(queryCollection)
          .then(resp => setProductsMin( resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
      
  }, [])

  return (
      <div className='fs-1 mt-3 fst-italic'>
        
        <Outlet />
        <br />
        <h2> Productos Destacados</h2>
        
        <ItemList items={productsMin} />
        <br/>

        <Link to="/productos"   className="nav-link d-inline fs-5 m-3"><button className=' btn-inicio'>Ver Todos Los Productos</button></Link>


      </div>
  )
}

export default ItemMinContainer
