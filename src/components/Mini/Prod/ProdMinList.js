import React from 'react';
import Item from './ProdMin';

const ItemMinList = ({ items }) => {

  const prodHi = items.slice(5,7)
  
  return (
    <div className='row row-cols-1 p-4 row-cols-md-2 items'>
        {prodHi.map(item => 
            <Item key={item.id} {...item}/>
        )}
    </div>
  );
};

export default ItemMinList