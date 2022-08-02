import React, { useEffect, useState } from 'react';
import {Outlet} from 'react-router-dom';
import CategoriaDetalle from './CategoriasDetalle';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";


  
const Categorias = () => {

    const [item, setItems] = useState([]);
  const { category } = useParams()
  
  useEffect(() => {

    const getItems = async () => {

      if (category !== undefined) {
        const querydb = getFirestore();
        const q = query(collection(querydb, 'products'), where('category', '==', category))
        await getDocs(q).then((res) => {
          const data = res.docs.map(prod => ({ id: prod.id, ...prod.data() }))

          setItems(data)
        })
      } else {

        const db = getFirestore();
        const q = (collection(db, 'products'))
        await getDocs(q).then((res) => {
          const data = res.docs.map(prod => ({ id: prod.id, ...prod.data() }))

          setItems(data)
        })
      }
    }


    getItems();

  }, [category])
      
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