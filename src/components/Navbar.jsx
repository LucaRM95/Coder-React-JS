import { Link } from 'react-router-dom';
import Logo from '../assets/img/Logo-MI.png';
import React, { useEffect, useState } from 'react';

import CartWidget from './CartWidget';

const Navbar = () => {

    return (
        <>
            <header className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand animate__animated animate__fadeInLeft" to="./" >
                        <img src={ Logo } alt="" width="35" height="35" className="d-inline-block align-text-top me-2" />
                        Mala Influencia
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div id="nav" className="navbar-nav">
                            <Link className="nav-link" to="./remeras-skate">Remeras</Link>
                            <Link className="nav-link" to="./musculosas">Musculosas</Link>
                            <Link className="nav-link" to="./remeras-mujer">Mujeres</Link>
                            <Link className="nav-link" to="./remeras-hombre">Hombres</Link>
                            <CartWidget />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;
