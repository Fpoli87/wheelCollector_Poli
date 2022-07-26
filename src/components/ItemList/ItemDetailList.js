import React from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailList = ({ items }) => {
  return (
    <div>
        {items.map(item => 
            <ItemDetail key={item.id} {...item}/>
        )}
    </div>
  );
};

export default ItemDetailList