import React from "react";
import Item from "./Item";

const ItemList = ( { items } ) => { 

    const data = new Promise((resolve, reject) => {
        
        if ( items !== undefined){

            resolve( items );

        }else{
            reject("Hubo un problema al cargar los productos. Intentalo más tarde!");
        }
    })
    data.then( items => {

        const item = items.map( item => {
            return item;
        })

        return item;
    })
    data.catch( err => {
        return err; 
    })
    
    console.log(data)

    return (
        <>
            <strong>Hola</strong>
            <Item item = { data }/>
        </>
    )
}

export default ItemList;
