import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import Logo from '../../Img/img/logo-text.png'
import './navbar.css'

const NavBar = () => {


    return (
        <div className="nav">
            <nav className="navbar w-100 navbar-light navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand"><img className="logo-global" src={Logo} /></NavLink>
                    <button className="navbar-toggler" type="button" databstoggle="collapse" databstarget="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item fs-3">
                            <NavLink to="/" className="nav-link" aria-current="page">Inicio</NavLink>
                            </li>
                            <li className="nav-item fs-3">
                            <NavLink to="/categorias" className="nav-link" >Categorias</NavLink>
                            </li>
                            <li className="nav-item fs-3">
                            <NavLink to="/nosotros" className="nav-link">Nosotros</NavLink>
                            </li>
                            <li className="nav-item fs-3">
                            <NavLink to="/contacto" className="nav-link">Contacto</NavLink>
                            </li>
                        </ul>
                        <NavLink to="/carrito" className="nav-link" ><CartWidget/></NavLink>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;