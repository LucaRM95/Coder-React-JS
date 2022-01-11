import React from 'react';
import { useParams } from 'react-router-dom';
//import useFetch from '../hooks/useFetch';
import useFireBase from '../hooks/useFireBase';
import Item from './Item';
import Spinner from './spinner/Spinner';

const ItemListContainer = () => {
    let Categoria = useParams();

    const Productos = useFireBase(Categoria.id);

    return (
        <>
            {
                Productos.loading
                ?
                <Spinner />
                :
                <section className="mt-5">
                    <h2>Lista de productos</h2>
                    <div className="container">
                        <div className="row justify-content-center">
                            <Item items = { Productos }/>
                        </div>
                    </div>    
                </section>
            }
        </>
    );
}

export default ItemListContainer;
