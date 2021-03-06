import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({id, title, description, price, stock, pictureUrl}) => {
  return (
    <div className='card m-3 border-primary'>
        <div className='row g-0'>
            <div className='col-md-4'>
                <img src={pictureUrl} alt={title} className='img-fluid rounded-start m-3 img-card'></img>
            </div>
            
            <div className='card-body col-md-8 h-100 w-50'>
                    <h4 className='card-title'>{title}</h4>
                    <p className='card-text fs-5'>{description}</p>
                    <p>${price}</p>
                    <p className='card-text fs-5'>Unidades Disponibles: {stock}</p>
                    <Link className='btn btn-primary' to={"./" + id}>Ver detalle</Link>
            </div>
            
        </div>
    </div>
  );
};

export default Item

