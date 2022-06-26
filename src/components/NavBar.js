import React from "react";

const NavBar = () => {
    return (
        <div className="nav">
            <nav className="navbar w-100 navbar-dark bg-primary navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand">Wheel Collector!</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page">Inicio</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link">Produtos</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link">Sobre Nosotros</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;