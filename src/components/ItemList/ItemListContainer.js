import React, { useEffect, useState } from 'react';
import {Outlet} from 'react-router-dom';
import ItemList from './ItemList';
import Categorias from '../Categorias'
import products from '../../products';

const getData = new Promise((resolve, reject) => {
    let promiseAcept = true;
    setTimeout(() => {
      if (promiseAcept) {
        resolve(products);
      } else {
        reject("Lo siento, no podemos acceder a los datos!");
      }
    }, 2000);
  });
  
const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log("products: ", products);
    
    useEffect(() => {

        
        getData
          .then((data) => {
            setProducts(data);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setLoading(false);
          });
      }, []);

      

    return (
    <div className='fs-1 mt-3 fst-italic'>
      
        <Outlet />
        
        {loading ? <span>Cargando los productos...</span> : <ItemList items={products} />}
    </div>
  )
}

export default ItemListContainer