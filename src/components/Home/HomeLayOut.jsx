import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/img/undraw_online_shopping.svg';
import '../../assets/landing-styles/styles.css';

const HomeLayOut = () => {
    return (
        <>
                <section className="seccion-principal">
                <div data-aos="fade-right" className="container-fluid padd-lat">
                    <div className="row">
                        
                        <div className="titulo">
                            <div className="col-md-12 col-12">
                                <h4>Viste a la moda</h4>
                            </div>
                            <div className="col-md-12 col-12">
                                <h1>
                                    <p>Mala Influencia</p> 
                                    <p>Indumentaria</p>
                                </h1>
                            </div>
                
                            <button className="btn btn-light mt-4 mb-3">Conoce mas...</button>
                        </div>
                    </div>
                    
                </div>
            </section>

            <section className="seccion-secundaria pbt">
                <div className="row fondo-flot">
                    <div data-aos="fade-right" className="col-auto flotantes">
                        <p>
                            Eso que nos 
                            hace ser
                            mala influencia
                        </p>
                    </div>
                </div>
                
                <div className="container-fluid">
                    <div data-aos="fade-right">
                        <h1>¡Hacemos tu moda una realidad!</h1>
                        <p>
                            Si no queres depender de la moda que no te representa en Mala Influencia te damos la solución.
                            Elegí como queres vestir, que te represente y te acompañe todos los días. Hace tu moda realidad, elegí Mala Influencia.
                        </p>
                    </div>
                    <div className="row contenedor">
                        <div className="col contenedor__parrafos">
                            <div data-aos="fade-right" className="contenedor__parrafos--texto">
                                <h4>01 - Planificamos</h4>
                                <p>
                                    Definimos los modelos del cliente
                                </p>
                            </div>
                            <div className="line ms-2"></div>
                        </div>
                        <div data-aos="fade-right" className="col contenedor__parrafos">
                            <div className="contenedor__parrafos--texto">
                                <h4>02 - Diseñamos</h4>
                                <p>
                                    Diseñamos los modelos y estampados
                                </p>
                            </div>
                            <div className="line ms-2"></div>
                        </div>
                        <div data-aos="fade-right" className="col contenedor__parrafos">
                            <div className="contenedor__parrafos--texto">
                                <h4>03 - Entregamos</h4>
                                <p>
                                    Pactamos y realizamos la entrega
                                </p>
                            </div>
                            <div className="line ms-2"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="seccion-consideracion padd-lat">
                <div data-aos="fade-right" className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-12 seccion-cita__texto pbt">
                            <span>Comprometidos con vos</span>
                            <h1>Elegí Mala Influencia</h1> 
                            <p>
                                Es fundamental que un cliente nos tome en consideración. Sea para consumir nuestros productos, seguirnos en redes o votarnos en una elección. Este proceso es clave. ¿Cómo saber que lo estamos haciendo bien?
                            </p>
                            <p>
                                Hoy en día hay muchos parámentros objetivos para medir el impacto que tenemos en nuestro público. Trabajamos para que todos ellos tengan indumentaria de calidad, original y a un muy buen precio.  
                            </p>
                            <p>Choose your side, choose Mala Influencia.</p>
                            <div className="seccion-cita__btn">
                                <Link className="btn btn-warning" to="./remeras">
                                    Tienda...
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 seccion-cita__imagen">
                            <img src={image} alt="EB"/>
                        </div>
                </div>
                </div>
            </section>
        </>
    );
}

export default HomeLayOut;
