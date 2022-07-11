import React, {useState , useEffect} from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import products from '../products.json';

const ItemListContainer = ({ greeting }) => {
    
    const [list, setList] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setList(false);
        }, 2000);
        console.log('useEffect');
      }, []);

    return (
    <div className='fs-1 mt-3 fst-italic'>
        {greeting}
        {list ? (
            <h3>Actualizando lista...</h3>
            ) : (
                <><ItemCount
                        stock={5}
                        initial={1}
                        onAdd={(n) => alert(`Agregados ${n} productos!`)} /><ItemList items={products} /></>
                )}
    </div>
  )
}

export default ItemListContainer