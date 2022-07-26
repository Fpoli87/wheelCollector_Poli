import React from 'react';
import { Link, Outlet } from 'react-router-dom'

const categorias = () => {
  return (
    <div className='d-inline'>
        <br />
        CATEGORIAS
        <br />
        <br />
                <Link to="/categorias/Hombres" className="nav-link d-inline m-3" aria-current="page">Ropa de Hombre</Link>
                {" | "}
                <Link to="/categorias/Mujer" className="nav-link d-inline m-3">Ropa de Mujer</Link>
                {" | "}
                <Link to="/categorias/Electro" className="nav-link d-inline m-3">Electronica</Link>
                {" | "}
                <Link to="/categorias/Joyas" className="nav-link d-inline m-3">Joyeria</Link>
                {" | "}
                <Link to="/productos"   className="nav-link d-inline m-3">Ver Todo</Link>
        <Outlet />
    </div>
  )
}

export default categorias