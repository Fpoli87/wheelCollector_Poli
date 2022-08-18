import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
  return (
    <div className='row row-cols-1 row-cols-md-3 vw-100 items'>
        {items.map(item => 
            <Item key={item.id} {...item}/>
        )}
    </div>
  );
};

export default ItemList