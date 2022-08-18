import React from 'react';
import { Link } from 'react-router-dom';
import './item.css'

const Item = ({id, title, description, price, stock, category, pictureUrl}) => {
  return (
    <div className='col'>
      <div className='card m-2 border-dark h-100'> 
        <img src={pictureUrl} alt={title} className='card-img-top'></img>
              
        <div className='card-body '>
                <h5 className='card-title'>{title}</h5>
                <p className='card-text fs-6 des-txt'>{description}</p>
                <p className='fs-4'>u$s {price}</p>
                <p className='fs-6 d-inline'>Categoria:</p><Link className='card-text fs-6' to={"../categorias/" + category}>{category}</Link>
                <br />
                <Link className='btn btn-dark' to={"./" + id}>Ver detalle</Link>
        </div>
      </div> 
    </div>
  );
};

export default Item

