import React from 'react';
import { Link, Outlet } from 'react-router-dom'

const categorias = () => {
  return (
    <div>
        CATEGORIAS
                <Link to="/categorias/hombres" className="nav-link m-3" aria-current="page">Ropa de Hombre</Link>
                {" | "}
                <Link to="/categorias/mujer" className="nav-link m-3">Ropa de Mujer</Link>
                {" | "}
                <Link to="/categorias/electro" className="nav-link m-3">Electronica</Link>
                {" | "}
                <Link to="/categorias/joyas" className="nav-link m-3">Joyeria</Link>
                {" | "}
                <Link to="/productos"   className="nav-link m-3">Ver Todo</Link>
        <Outlet />
    </div>
  )
}

export default categorias