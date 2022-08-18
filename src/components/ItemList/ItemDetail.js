import React, {useState} from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { CartContext } from '../../Context/CartContext';
import { useContext } from 'react';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const ItemDetail = ({item}) => {

  const {id, title, price, stock, description, pictureUrl, category} = item
  

  const [irACarrito, setirACarrito] = useState(false)

  const navigate = useNavigate();
  const {addProd} = useContext(CartContext)
  const notify = () => toast("Agregado a Carrito");

  const agregar = (count) => {
    setirACarrito(true)
    addProd({...item}, count)
    notify()
  }

  
  return (

    <div className=' m-3 ' key={id}>
        <br />
        <div className='row g-0'>
            <div className='col-md-4'>
                <img src={pictureUrl} alt={title} className='img-fluid rounded-start m-3 img-top'></img>
            </div>
            
            <div className=' col-md-8 h-100 w-50'>
                    <h3 className='card-title'>{title}</h3>
                    <p className='card-text fs-5'>{description}</p>
                    <p>u$s {price}</p>
                    <p className='card-text fs-4'>Unidades Disponibles: {stock}</p>
                    <p className=' card-text fs-5'>Categoria:  {category}</p>
            </div>
            
        </div>
        {!irACarrito
          ?       
          <ItemCount 
              stock={stock} 
              initial={1} 
              onClick={notify}
              onAdd={agregar} 
          />
          
            :
          <><Link to={'/categorias'} onClick={() => navigate(-1)}>
          <button type="button" className="btn btn-dark m-1">Volver atras</button>
        </Link><Link to={'/carrito'}>
            <button type="button" className="btn btn-dark m-1">Terminar mi compra</button>
          </Link></>
        }
        <br />
    </div>
  
  );
}
export default ItemDetail
 