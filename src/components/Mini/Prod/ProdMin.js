import React from 'react';
import { Link } from 'react-router-dom';

const ProdMin = ({id, title, description, price, stock, category, pictureUrl}) => {
    
  return (
    <div className='col'>
      <div className='card m-1 border-dark h-100'> 
        <img src={pictureUrl} alt={title} className='card-img-top'></img>
              
        <div className='card-body '>
                <h4 className='card-title'>{title}</h4>
                <p className='card-text fs-5 des-txt'>{description}</p>
                <p>u$s {price}</p>
                <p className='fs-4 d-inline'>Categoria:</p><Link className='card-text fs-5' to={"../categorias/" + category}>{category}</Link>
                <br />
                <Link className='btn btn-dark' to={"productos/" + id}>Ver detalle</Link>
        </div>
      </div> 
    </div>
  );
};

export default ProdMin