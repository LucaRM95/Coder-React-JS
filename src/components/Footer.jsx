import React from 'react';
import logo from '../assets/img/Logo-MI.png';

const Footer = () => {
    return (
        <footer className="container-fluid bg-dark">
            <div className="row mt-5 mb-5">
                <div className="col-md-8">
                    <img src={logo} alt="" />
                    <p>Choose your side</p>
                    <h2>Mala Influencia</h2>
                    <div>
                        <a href="/">
                            <i className="fab fa-instagram me-3 ms-3"></i>
                        </a>
                        <a href="/">
                            <i className="fab fa-twitter me-3 ms-3"></i>
                        </a>
                        <a href="/">
                            <i className="fab fa-facebook me-3 ms-3"></i>
                        </a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <p>
                            Contacto: 
                        </p>
                    </div>
                    <div><p>Tel: +54 9 11-3131-1212</p></div>
                    <div><p>eMail: contacto@malainfluencia.com.ar</p></div>
                    <div><p>Dir: Av. Verdes 552</p></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
