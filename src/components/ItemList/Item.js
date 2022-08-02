import React from 'react';
import { Link } from 'react-router-dom';
import './item.css'

const Item = ({id, title, description, price, stock, category, pictureUrl}) => {
  return (
    <div className='card m-3 border-primary'>
        <div className='row g-0'>
            <div className='col-md-4'>
                <img src={pictureUrl} alt={title} className='img-fluid rounded-start m-3 img-card'></img>
            </div>
            
            <div className='card-body col-md-8 h-100 w-50'>
                    <h4 className='card-title'>{title}</h4>
                    <p className='card-text fs-5 des-txt'>{description}</p>
                    <p>u$s {price}</p>
                    <p className='card-text fs-5'>Unidades Disponibles: {stock}</p>
                    <p className='fs-4 d-inline'>Categoria:</p><Link className='card-text fs-5' to={"../categorias/" + category}>{category}</Link>
                    <br />
                    <Link className='btn btn-primary' to={"./" + id}>Ver detalle</Link>
            </div>
            
        </div>
    </div>
  );
};

export default Item

