import React from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailList = ({ items2 }) => {
  return (
    <div>
        {items2.map((el) => (
            <ItemDetail {...el}/>
        ))}
    </div>
  );
};

export default ItemDetailList