import React, { useEffect, useState, } from 'react';
import products from '../../products.json';
import ItemDetailList from './ItemDetailList';
import { useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams()
  
    useEffect(()=>{

      const prodPorId = () => {

        return new Promise ((res) => {
          setTimeout(() => {
              res( products.find(prod => prod.id === id)
            )
          }, 2000)
        })
      
      }   
       
      prodPorId().then(res =>{
            setItem(res)
          })
        }, [id] )
      
          console.log(id)
    return (
    <div className='fs-1 mt-3 fst-italic'>
        {<ItemDetailList item={ item } />}
        
    </div>
  )
}

export default ItemDetailContainer