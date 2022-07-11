import React, { useEffect, useState } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import products from '../products.json';

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
  
const ItemListContainer = ({ greeting }) => {

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

      const getProducts = async () => {
        try {
          const response = await getData;
          setProducts(response);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        getProducts();
      }, []);

    return (
    <div className='fs-1 mt-3 fst-italic'>
        {greeting}
        <ItemCount 
            stock={5} 
            initial={1} 
            onAdd={(n) => alert(`Agregados ${n} productos!`)} 
        />
        {loading ? <span>Cargando los productos...</span> : <ItemList items={products} />}
    </div>
  )
}

export default ItemListContainer