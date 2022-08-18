import React, { useState, useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom';
export default function Order() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [orderId, setOrderId] = useState('');
	
	let errors = {};
    let validName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let validEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let validTel = /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/;


	const db = getFirestore();
	const orderCollection = collection(db, 'order');

	const { cart } = useContext(CartContext);

    const totales = cart.reduce((acumulador, actual) => acumulador + (actual.count * actual.item.price), 0)

	if(name == ""){
        errors.name = "El campo 'Nombre' es requerido"
    } else if (!validName.test(name)){
        errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco"
    }

	if(phone == ""){
        errors.phone = "El campo 'Telefono' es requerido"
    } else if (!validTel.test(phone)){
        errors.phone = "El campo 'Telefono' solo puede contener números y códigos de área"
    }

	if(email == ""){
        errors.email = "El campo 'Email' es requerido"
    } else if (!validEmail.test(email)){
        errors.email = "El campo 'Email' es incorrecto"
    }


	function handleForm(e) {
		e.preventDefault();

		const order = {
			buyer: { name, email, phone },
			items: cart,
			total: totales,
		};

		//= Obliga a todos los campos estar completados
		
		addDoc(orderCollection, order).then(({ id }) => {
			setOrderId(id);
			
		});
		console.log(order, orderId);
	}

	return (
		<>
			{!orderId ? (
				<div>
					<div className='mt-3'>
						<h3 className='text-center text-dark'>
							Para dar seguimiento a su compra, por favor, ingresar los datos
							abajo:
						</h3>
					</div>
					<div className='formulario container d-flex justify-content-center align-items-center pt-5'>
						<form>
							<div className='mb-1'>
								<label className='form-label text-dark'>Nombre</label>
								<input
									onChange={(e) => setName(e.target.value)}
									name = "name"
									placeholder='Ingrese su nombre *'
									type='name'
									className='form-control'
									required
								/>
							</div>
							<div className='txt-err'>
                            	{errors.name && <p>{errors.name}</p>}
                        	</div>
							<div className='mb-1'>
								<label className='form-label text-dark'>Telefono</label>
								<input
									onChange={(e) => setPhone(e.target.value)}
									name = "phone"
									placeholder='Ingrese su telefono'
									type='tel'
									className='form-control'
								/>
							</div>
							<div className='txt-err'>
                            	{errors.phone && <p>{errors.phone}</p>}
                        	</div>
							<div className='mb-3'>
								<label className='form-label text-dark'>Email</label>
								<input
									onChange={(e) => setEmail(e.target.value)}
									name
									placeholder='Ingrese su email *'
									type='email'
									className='form-control'
									required
								/>
							</div>
							<div className='txt-err'>
                            	{errors.email && <p>{errors.email}</p>}
                        	</div>
							<div className='pb-4'>
								<button
									onClick={handleForm}
									type='submit'
									className='btn btn-dark px-3 mx-2'>
									Enviar Pedido
								</button>
								<Link to='/home/contacto'>
									<button className='btn btn-dark text-warning px-3 mx-2'>
										Necesito Ayuda
									</button>
								</Link>
							</div>
						</form>
					</div>
				</div>
			) : (
				<div
					className='container d-flex justify-content-start pt-5 flex-column align-items-center gracias-compra'
					id='orderForm'>
					<h2 className='text-dark'>Muchas gracias {name} por su compra!!</h2>
					<p className='mt-2'>Le hemos enviado un correo electronico con los pasos a seguir a {email}</p>
					<p className='mt-2'>
						Para cualquier eventual consulta: contacto@wheelcollector.com
					</p>
					<p>ID de compra: {orderId}</p>
					<Link to='/home'>
						<button className='btn radius-50 btn-dark m-3'>
							Volver a Inicio
						</button>
					</Link>
				</div>
			)}
		</>
	);
}