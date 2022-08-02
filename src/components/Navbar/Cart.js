import { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import CartCard from "../Cards/CartCard"
import { CartContext } from "../../Context/CartContext"

const Cart = () => {

    const { cart, clearCarrito} = useContext(CartContext)

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    useEffect( () => { },[cart])
  
    function onNameChange(evt) {
        setName(evt.target.value);
    }
    function onSurnameChange(evt) {
        setSurname(evt.target.value);
    }
    function onPhoneChange(evt) {
        setPhone(evt.target.value);
    }
    function onEmailChange(evt) {
        setEmail(evt.target.value);
    }

    const totales = cart.reduce((acumulador, actual) => acumulador + (actual.count * actual.item.price), 0)

    console.log(cart)
    return (
        <div className="text-center w-auto bg-base-100 shadow-xl m-10 border-4 border-neutral-content p-5 ">
                <div className="flex w-auto">
                    <div className="flex-initial basis-4/5 font-bold text-5xl mt-2 mb-2 cart-title">
                        CARRITO DE COMPRAS
                    </div>
                </div>
                <div className="w-auto">
                    { cart.length ?
                    <div>
                        <div className="cart_title"><small> {cart.reduce((acumulador, actual) => acumulador + actual.count, 0)} item in your cart </small></div>
                        <div className="flex w-auto h-auto flex-wrap mt-10 justify-center border-2 border-neutral-content p-20">
                            {cart.map( i => <CartCard key={i.item.id} data={i}/>)}
                        </div> 
                        <div className="order_total border-primary">
                                <div className="order_total_content text-md-right">
                                    <div className="order_total_title">Order Total:</div>
                                    <div className="order_total_amount">${totales}</div>
                                </div>
                        </div>
                        <div className="cart_buttons"> 
                            <Link to={'/productos'}><button type="button" className="button cart_button_clear">Continuar Comprando</button> </Link>
                            <Link to={'/productos'}><button type="button" className="button cart_button_checkout">Finalizar Orden</button> </Link>
                        </div>
                        <div className="text-xl font-bold" >Ingresa tus datos para continuar la compra:</div>
                        <form className="mt-5" style={{ display: "flex", alignItems: "center", flexDirection: "column"}}>
                            <div style={{ display: "flex", marginBottom: 8 , marginTop:8}}>
                                <label style={{ marginRight: 10 }}>Nombre</label>
                                <input style={{ color: 'black' }} type="text" onChange={evt => onNameChange(evt)} />
                            </div>
                            <div style={{ display: "flex", marginBottom: 8 }}>
                                <label style={{ marginRight: 10 }}>Apellido</label>
                                <input style={{ color: 'black' }} type="text" onChange={evt => onSurnameChange(evt)} />
                            </div>
                            <div style={{ display: "flex", marginBottom: 8 }}>
                                <label style={{ marginRight: 10 }}>Telefono</label>
                                <input style={{ color: 'black' }} type="number" onChange={evt => onPhoneChange(evt)} />
                            </div>
                            <div style={{ display: "flex", marginBottom: 8 }}>
                                <label style={{ marginRight: 10 }}>Email</label>
                                <input id="email" style={{ color: 'black' }} placeholder="example@mail.com" type="email" onChange={evt => onEmailChange(evt)}/>
                            </div>
                        </form>
                    </div>
                    :
                    <div className="flex flex-col mt-10 mb-10 border-2 border-neutral-content p-20">
                        <h1 className="font-bold text-4xl mt-10 mb-10">No hay productos en el carrito</h1>
                        <button className="btn btn-outline-primary btn-lg"><Link to={'/productos'}>Revisar más articulos</Link></button>
                    </div>
                    }  

                </div>
        </div>

    )
}

export default Cart 