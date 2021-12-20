import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Item from './Item';
import ItemCount from './ItemCount';

const ItemListContainer = ({ marginTop }) => {
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
            <section className={ marginTop }>
                <ItemCount stock={5} initial={1}/>
                <hr />
                <h2>Lista de productos</h2>
                <div className="container">
                    <div className="row">
                        <Item items = { Productos }/>
                    </div>
                </div>    
            </section>
        </>
    );
}

export default ItemListContainer;
