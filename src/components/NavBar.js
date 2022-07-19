import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="nav">
            <nav className="navbar w-100 navbar-dark bg-primary navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand">Wheel Collector!</a>
                    <button className="navbar-toggler" type="button" databstoggle="collapse" databstarget="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                            <Link to="/" className="nav-link" aria-current="page">Inicio</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/productos" className="nav-link">Produtos</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/nosotros" className="nav-link">Sobre Nosotros</Link>
                            </li>
                        </ul>
                        <CartWidget/>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;