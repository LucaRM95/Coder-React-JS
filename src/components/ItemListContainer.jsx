import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Item from './Item';

const ItemListContainer = () => {
    let Categoria = useParams();

    const Productos = useFetch( Categoria.id );

    while(Productos.loading){
        return(
            <div>
                <h4>Cargando...</h4>
            </div>
        )
    }

    return (
        <>
            <section className="mt-5">
                <h2>Lista de productos</h2>
                <div className="container">
                    <div className="row justify-content-center">
                        <Item items = { Productos }/>
                    </div>
                </div>    
            </section>
        </>
    );
}

export default ItemListContainer;
