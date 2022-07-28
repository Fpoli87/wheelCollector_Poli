import { useContext } from "react";
import { CartContext } from '../../Context/CartContext';
import './card.css'
import Icon from '../../Img/Icons/delete-can.png'

const CartCard = ( {data} ) => {

    const {removeProd} = useContext(CartContext)

    return(
        <div className="cart_section">
            <div className="container-fluid ">
                <div className="row ">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="cart_container">
                            <div className="cart_items">
                                <ul className="cart_list border-primary">
                                    <li className="cart_item clearfix">
                                        <div className="cart_item_image"><img src={data.item.pictureUrl} alt={data.item.title} /></div>
                                        <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                            <div className="cart_item_name cart_info_col">
                                                <div className="cart_item_title">Name</div>
                                                <div className="cart_item_text">{data.item.title}</div>
                                            </div>
                                            <div className="cart_item_quantity cart_info_col">
                                                <div className="cart_item_title">Quantity</div>
                                                <div className="cart_item_text">{data.count}</div>
                                            </div>
                                            <div className="cart_item_price cart_info_col">
                                                <div className="cart_item_title">Price</div>
                                                <div className="cart_item_text">${data.item.price}</div>
                                            </div>
                                            <div className="cart_item_total cart_info_col">
                                                <div className="cart_item_title">Total</div>
                                                <div className="cart_item_text">${(data.item.price * data.count).toFixed(2)}</div>
                                            </div>
                                            <div className="cart_item_color cart_info_col">
                                                <div className="cart_item_title">Remove</div>
                                                <div className="cart_item_text">
                                                    <a onClick={() => removeProd(data.item)}>
                                                        <img src={Icon} alt="Quitar Producto" className="delete-icon"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartCard