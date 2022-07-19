import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemCount from './ItemCount';
import products from '../products.json'

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

const ItemDetail = ({id, title, description, price, stock, pictureUrl}) => {
  let params = useParams();
  console.log(params)

  

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
    
    <div className=' m-3 '>
        <br />
        <div className='row g-0'>
            <div className='col-md-4'>
                <img src={pictureUrl} alt={title} className='img-fluid rounded-start m-3 img-top'></img>
            </div>
            
            <div className=' col-md-8 h-100 w-50'>
                    <h2 className='card-title'>{title}</h2>
                    <p className='card-text fs-3'>{description}</p>
                    <p>${price}</p>
                    <p className='card-text fs-4'>Unidades Disponibles: {stock}</p>
                    <a className='' href={"/" + id}></a>
            </div>
            
        </div>
        <ItemCount 
            stock={stock} 
            initial={1} 
            onAdd={(n) => alert(`Agregados ${n} productos!`)} 
        />
        <br />
    </div>
  );
};


export default ItemDetail