import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hook/useForm';
import validationsForm from '../../validation/validations';
import './ContForm.css'


const initialForm = {
    name: "",
    email: "",
    comment: "",
};

const ContForm = () => {

    const { form, errors, active, handleBlur, handleSubmit, handleChange} = useForm(initialForm, validationsForm )

    return (
		<>
			{!active ? (
                 <div>
                    <form onSubmit={handleSubmit}  className="mt-5" >
                        <div>
                            <input type="text" onChange={handleChange} onBlur={handleBlur} value={form.name} name="name" id="nombreapellido" placeholder="Indique su Nombre y Apellido *" required/>
                        </div>
                        <div className='txt-err'>
                            {errors.name && <p>{errors.name}</p>}
                        </div>
                        <div>
                            <input type="email" onChange={handleChange} onBlur={handleBlur} value={form.email} name="email" id="correo" placeholder="Ingrese su correo electronico: ej@correo.com *" required/>
                        </div>
                        <div className='txt-err'>
                            {errors.email && <p>{errors.email}</p>}
                        </div>              
                        <div>
                            <textarea name="comment" onChange={handleChange} onBlur={handleBlur} value={form.comment} id="comentario" cols="30" rows="5" placeholder="Escriba aqui su consulta *" required></textarea>
                        </div>
                        <div className='txt-err'>
                            {errors.comment && <p>{errors.comment}</p>}
                        </div>
                            *Campo Obligatorio
                        <div>
                            <input className="btn btn-outline-dark btn-lg mt-10" type="submit" value="Enviar" />
                        </div>
                    </form>
                </div>
				
			) : (
				<div>
                    <h2>Gracias por tu contacto! Pronto nos estaremos comunicando</h2>
					<Link to='/home'>
						<button className='btn btn-dark radius-50 bg-dark m-3'>
							Volver a Inicio
						</button>
					</Link>
				</div>
			)}
		</>
	);

}

export default ContForm