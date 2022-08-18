import React from 'react'


const validationsForm = (form) => {
    let errors = {};
    let validName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let validEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let validComment = /^.{1,255}$/;
    let validTel = /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/;

    if(!form.name.trim()){
        errors.name = "El campo 'Nombre' es requerido"
    } else if (!validName.test(form.name.trim())){
        errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco"
    }

    if(!form.email.trim()){
        errors.email = "El campo 'Email' es requerido"
    } else if (!validEmail.test(form.email.trim())){
        errors.email = "El campo 'Email' es incorrecto"
    }

    if(!form.comment.trim()){
        errors.comment = "El campo 'Comentarios' es requerido"
    } else if (!validComment.test(form.comment.trim())){
        errors.comment = "El campo 'Comentarios' no debe exceder los 255 caracteres"
    }

    if(!form.tel.trim()){
        errors.tel = "El campo 'Telefono' es requerido"
    } else if (!validTel.test(form.tel.trim())){
        errors.tel = "El campo 'Telefono' solo puede contener números y códigos de área"
    }

    

    return errors;
}

export default validationsForm
