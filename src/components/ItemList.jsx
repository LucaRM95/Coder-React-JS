import React, { useState } from "react";
import Item from "./Item";

const ItemList = ( { items } ) => { 

    let [state, setState] = useState([]);

    const data = new Promise((resolve, reject) => {
        
        if ( items !== undefined){

            resolve( items );

        }else{
            reject("Hubo un problema al cargar los productos. Intentalo más tarde!");
        }
    })
    data.then( items => {

        setState(state = items);
    })
    data.catch( err => {
        return err; 
    })

    return (
        <>
            <strong>Hola</strong>
            <Item items = { state }/>
        </>
    )
}

export default ItemList;
