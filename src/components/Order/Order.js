import React from 'react';
import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from '../../Context/CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom';

export default function Order() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [orderId, setOrderId] = useState('');

	const db = getFirestore();
	const orderCollection = collection(db, 'order');

	const { cart } = useContext(CartContext);

    const totales = cart.reduce((acumulador, actual) => acumulador + (actual.count * actual.item.price), 0)


	function handleForm(e) {
		e.preventDefault();

		const order = {
			buyer: { name, email, phone },
			items: cart,
			total: totales,
		};

		//= Obliga a todos los campos estaren completados
		
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
						<h5 className='text-center text-primary'>
							Para dar seguimiento a su compra, por favor, ingresar los datos
							abajo:
						</h5>
					</div>
					<div className='formulario container d-flex justify-content-center align-items-center pt-5'>
						<form>
							<div className='mb-1'>
								<label className='form-label text-primary'>Nombre *</label>
								<input
									onChange={(e) => setName(e.target.value)}
									placeholder='Ingrese su nombre'
									type='name'
									className='form-control'
								/>
							</div>
							<div className='mb-1'>
								<label className='form-label text-primary'>Telefono</label>
								<input
									onChange={(e) => setPhone(e.target.value)}
									placeholder='Ingrese su telefono'
									type='phone'
									className='form-control'
								/>
							</div>
							<div className='mb-3'>
								<label className='form-label text-primary'>Email *</label>
								<input
									onChange={(e) => setEmail(e.target.value)}
									placeholder='Ingrese su email'
									type='email'
									className='form-control'
								/>
							</div>
							<div className='pb-4'>
								<button
									onClick={handleForm}
									type='submit'
									className='btn btn-primary px-3 mx-2'>
									Enviar Pedido
								</button>
								<Link to='/home/contacto'>
									<button className='btn btn-dark text-primary px-3 mx-2'>
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
					<h2 className='text-primary'>Muchas gracias por su compra!!</h2>
					<p className='mt-2'>
						Para cualquier eventual consulta: contacto@wheelcollector.com
					</p>
					<p>ID de compra: {orderId}</p>
					<Link to='/home'>
						<button className='btn radius-50 bg-primary m-3'>
							Volver a Inicio
						</button>
					</Link>
				</div>
			)}
		</>
	);
}