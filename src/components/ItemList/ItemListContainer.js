import React, { useEffect, useState } from 'react';
import {Outlet} from 'react-router-dom';
import ItemList from './ItemList';
import { getDocs } from "firebase/firestore";
import { queryCollection } from '../../Firebase/firebase';

function ItemListContainer() {

  const [products, setProducts] = useState([])

  useEffect(() => {
      getDocs(queryCollection)
          .then(resp => setProducts( resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
      
  }, [])

  return (
      <div className='fs-1 mt-3 fst-italic'>
        
        <Outlet />
        <br />
        <h2> Lista de Productos</h2>
        
        <ItemList items={products} />
      </div>
  )
}

  
  
    
export default ItemListContainer