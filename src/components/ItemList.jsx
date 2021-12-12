import React from 'react';
import Item from './Item';

const ItemList = ( { items } ) => {

    new Promise((resolve, reject) => {

        if ( items !== undefined){

            items.map( item => resolve( item ) );

        }else{
            reject("Hubo un problema al cargar los productos. Intentalo más tarde!");
        }
    })
    .then( item => {

        return (
            <Item Producto = {item}/>
        )

    })
    .catch( err => {
        return(
            <strong>{ err }</strong>
        )
    })

    return(
        <>
            <hr />
            <h2>Lista de productos</h2>
        </>
    )
}

export default ItemList;
