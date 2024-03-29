import React, { useEffect, useState, } from 'react';
import ItemDetail from './ItemDetail';
import { useParams} from 'react-router-dom';
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams()
  
    useEffect(()=>{

      const db = getFirestore();
        const queryDoc = doc(db, 'products', id);
        getDoc(queryDoc)
        .then(snp => setItem({id: snp.id, ...snp.data()})) 
        }, [id] )
      
    return (
    <div className='fs-1 mt-3 fst-italic'>
        {<ItemDetail item={ item } />}
        
    </div>
  )
}

export default ItemDetailContainer