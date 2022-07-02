import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="nav">
            <nav className="navbar w-100 navbar-dark bg-primary navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand">Wheel Collector!</a>
                    <button className="navbar-toggler" type="button" dataBsToggle="collapse" dataBsTarget="#navbarNav" ariaControls="navbarNav" ariaExpanded="false" ariaLabel="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                            <a className="nav-link active" ariaCurrent="page">Inicio</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link">Produtos</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link">Sobre Nosotros</a>
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