import { Link } from 'react-router-dom';
import Logo from '../assets/img/Logo-MI.png';
import React from 'react';

import CartWidget from './CartWidget';
import ItemDetailContainer from './ItemDetail/ItemDetailContainer';
//import ItemListContainer from './ItemListContainer';

const Navbar = () => {

    return (
        <>
            <header className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand animate__animated animate__fadeInLeft" to="./index.html">
                        <img src={ Logo } alt="" width="35" height="35" className="d-inline-block align-text-top me-2" />
                        Mala Influencia
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div id="nav" className="navbar-nav">
                            <Link className="nav-link" to="./sections/nuestro-trabajo.html">Nuestro trabajo</Link>
                            <Link className="nav-link" to="./sections/productos.html">Productos</Link>
                            <Link className="nav-link" to="./sections/tiendas.html">Tiendas</Link>
                            <Link className="nav-link" to="./sections/ayuda.html">Ayuda</Link>
                            <CartWidget cant=""/>
                        </div>
                    </div>
                </div>
            </header>
            <ItemDetailContainer />
            {/* <ItemListContainer marginTop="mt-5" greeting="Esta será la lista de productos"/> */}
        </>
    );
}

export default Navbar;
