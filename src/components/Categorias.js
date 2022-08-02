import React from 'react';
import { Link, Outlet } from 'react-router-dom'

const categorias = () => {
  return (
    <div className='d-inline'>
        <br />
        CATEGORIAS
        <br />
        <br />
                <Link to="/categorias/Reliquias" className="nav-link d-inline fs-5 m-3" aria-current="page">Reliquias</Link>
                {" | "}
                <Link to="/categorias/Militaria" className="nav-link d-inline fs-5 m-3">Militaria</Link>
                {" | "}
                <Link to="/categorias/Cristaleria" className="nav-link d-inline fs-5 m-3">Cristaleria</Link>
                {" | "}
                <Link to="/categorias/Esculturas" className="nav-link d-inline fs-5 m-3">Esculturas</Link>
                {" | "}
                <Link to="/productos"   className="nav-link d-inline fs-5 m-3">Ver Todo</Link>
        <Outlet />
    </div>
  )
}

export default categorias