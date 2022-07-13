import React, { useEffect, useState } from 'react';
import product from '../product.json';
import ItemDetailList from './ItemDetailList';

const getData = new Promise((resolve, reject) => {
    let promiseAcept = true;
    setTimeout(() => {
      if (promiseAcept) {
        resolve(product);
      } else {
        reject("Lo siento, no podemos acceder a los datos!");
      }
    }, 2000);
  });
  
const ItemDetailContainer = ({ greeting }) => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log("product: ", product);
    
    useEffect(() => {

        
        getData
          .then((data) => {
            setProduct(data);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setLoading(false);
          });
      }, []);

      const getProduct = async () => {
        try {
          const response = await getData;
          setProduct(response);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        getProduct();
      }, []);

    return (
    <div className='fs-1 mt-3 fst-italic'>
        {loading ? <span>Cargando el detalle del producto...</span> : <ItemDetailList items2={product} />}
        
    </div>
  )
}

export default ItemDetailContainer