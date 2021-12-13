import Logo from '../assets/img/Logo-MI.png';
import React from 'react';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';

const Navbar = () => {

    return (
        <>
            <header className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand animate__animated animate__fadeInLeft" href="./index.html">
                        <img src={ Logo } alt="" width="35" height="35" className="d-inline-block align-text-top me-2" />
                        Mala Influencia
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div id="nav" className="navbar-nav">
                            <a className="nav-link" href="./sections/nuestro-trabajo.html">Nuestro trabajo</a>
                            <a className="nav-link" href="./sections/productos.html">Productos</a>
                            <a className="nav-link" href="./sections/tiendas.html">Tiendas</a>
                            <a className="nav-link" href="./sections/ayuda.html">Ayuda</a>
                            <CartWidget cant=""/>
                        </div>
                    </div>
                </div>
            </header>
            <ItemListContainer marginTop="mt-5" greeting="Esta será la lista de productos"/>
        </>
    );
}

export default Navbar;
