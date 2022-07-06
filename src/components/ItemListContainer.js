import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className='fs-1 mt-3 fst-italic'>
        {greeting}
        <ItemCount 
            stock={5} 
            initial={1} 
            onAdd={(n) => alert(`Agregados ${n} productos!`)} 
        />
    </div>
  )
}

export default ItemListContainer