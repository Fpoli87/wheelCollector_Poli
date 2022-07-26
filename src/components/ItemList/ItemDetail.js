import React from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { cartContext } from '../../Context/CartContext';
import { useContext } from 'react';


const ItemDetail = ({item}) => {

  const {id, title, price, stock, description, pictureUrl, category} = item
  
  const navigate = useNavigate();
  const {addProd} = useContext(cartContext)

  
  return (

    <div className=' m-3 ' key={id}>
        <br />
        <div className='row g-0'>
            <div className='col-md-4'>
                <img src={pictureUrl} alt={title} className='img-fluid rounded-start m-3 img-top'></img>
            </div>
            
            <div className=' col-md-8 h-100 w-50'>
                    <h2 className='card-title'>{title}</h2>
                    <p className='card-text fs-3'>{description}</p>
                    <p>${price}</p>
                    <p className='card-text fs-4'>Unidades Disponibles: {stock}</p>
                    <p className=' card-text fs-5'>Categoria:  {category}</p>
                    <a className='' href={"/" + id}></a>
            </div>
            
        </div>
        <ItemCount 
            stock={stock} 
            initial={1} 
            onClick={(n) => alert(`Agregados ${n} productos!`)}
            onAdd={addProd} 
        />

        <Link to={'/categorias'} onClick={() => navigate(-1)}>
          <button type="button" className="btn btn-primary m-1">Volver atras</button>
        </Link>

        <br />
    </div>
  
  );
}
export default ItemDetail
 